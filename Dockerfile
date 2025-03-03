# multi-stage: base (build)
FROM node:20.18.1 AS base

# create directory where the application will be built
WORKDIR /app

# copy dependency manifests explicitly
COPY package.json package-lock.json ./

# install dependencies
RUN npm ci

# copy prisma schema and migrations
COPY prisma ./prisma/

# copy over the codebase
COPY . .

# generate prisma client & migrate the database
RUN npm run db:migrate-auto

# create the production bundle
RUN npm run build

# multi-stage: production (runtime)
FROM node:20.18.1 AS production

# create arguments of build-time variables
ARG user=amplication
ARG group=${user}
ARG uid=1001
ARG gid=$uid

# install required system dependencies
RUN apt-get update -y && apt-get install -y openssl

# create execution directory
WORKDIR /app

# add the non-root user
RUN groupadd --gid ${gid} ${user} && useradd --uid ${uid} --gid ${gid} -m ${user}

# copy only required production files
COPY --from=base /app/node_modules/ ./node_modules
COPY --from=base /app/package.json ./package.json
COPY --from=base /app/dist ./dist
COPY --from=base /app/prisma ./prisma
COPY --from=base /app/scripts ./scripts
COPY --from=base /app/tsconfig* ./

# set ownership to non-root user
RUN chown -R ${uid}:${gid} /app/

# set production environment
ENV NODE_ENV=production
ENV PORT=3000

# remove dev dependencies for production
RUN npm ci --only=production

# set user to the non-privileged user
USER ${user}

# expose the application port
EXPOSE ${PORT}

# start the server
CMD [ "node", "./dist/main.js" ]
