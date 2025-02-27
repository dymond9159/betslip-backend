<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">NestJs</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

# Introduction

The server-side of the generated project. This component provides the different backend services - i.e., GraphQL API, authentication, authorization, logging, data validation and the connection to the database. Additional information about the server component and the architecture around it

## Getting started

## Step 1: Configuration

Configuration for the server component can be provided through the use of environment variables. These can be passed to the application via the use of the `.env` file in the base directory of the generated service. Below a table can be found which show the different variables that can be passed - these are the variables which exist by default, through the use of plugins additional integrations could require additional values. These values are provided default values after generation, change them to the desired values.

| Variable             | Description                                  | Value                                                               |
| -------------------- | -------------------------------------------- | ------------------------------------------------------------------- |
| BCRYPT_SALT          | the string used for hashing                  | [random-string]                                                     |
| COMPOSE_PROJECT_NAME | the identifier of the service plus prefix    | amp\_[service-identifier]                                           |
| PORT                 | the port on which to run the server          | 3000                                                                |
| DB_URL               | the connection url for the database          | [db-provider]://[username]:[password]@localhost:[db-port]/[db-name] |
| DB_PORT              | the port used by the database instance       | [db-provider-port]                                                  |
| DB_USER              | the username used to connect to the database | [username]                                                          |
| DB_PASSWORD          | the password used to connect to the database | [password]                                                          |
| DB_NAME              | the name of the database                     | [service-name] / [project-name]                                     |
| JWT_SECRET_KEY       | the secret used to sign the json-web token   | [secret]                                                            |
| JWT_EXPIRATION       | the expiration time for the json-web token   | 2d                                                                  |

## Step2: Scripts - pre-requisites

After configuration of the server the next step would be to run the application. Before running the server side of the component, make sure that the different pre-requisites are met - i.e., node.js [^16.x], npm, docker. After the setup of the pre-requisites the server component can be started.

```sh
# installation of the dependencies
$ npm install

# migrate the prisma schema
$ npm run db:migrate-save

# generate the prisma client
$ npm run prisma:generate
```

## Step3: Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](LICENSE).
