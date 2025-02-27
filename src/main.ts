import { ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import { HttpExceptionFilter } from './modules/common/filters/HttpExceptions.filter';
import { AppModule } from './app.module';
import { connectMicroservices } from './modules/common/providers/services/connectMicroservices';
import {
  swaggerPath,
  swaggerDocumentOptions,
  swaggerSetupOptions,
} from './modules/shared/swagger/swagger';

const { PORT = 3000 } = process.env;

async function main() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      forbidUnknownValues: false,
    }),
  );

  const document = SwaggerModule.createDocument(app, swaggerDocumentOptions);

  Object.values((document as OpenAPIObject).paths).forEach((path: any) => {
    Object.values(path).forEach((method: any) => {
      if (
        Array.isArray(method.security) &&
        method.security.includes('isPublic')
      ) {
        method.security = [];
      }
    });
  });

  await connectMicroservices(app);
  await app.startAllMicroservices();

  SwaggerModule.setup(swaggerPath, app, document, swaggerSetupOptions);

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new HttpExceptionFilter(httpAdapter));

  void app.listen(PORT);

  console.log(
    `\n\nServer: http://localhost:${PORT}`,
    `\nRest API Doc: http://localhost:${PORT}/api`,
    `\nGraphQL API Playground: http://localhost:${PORT}/graphql`,
    `\n\nYour Server is successfully started on ${new Date().toUTCString()}\n\n`,
  );

  return app;
}

module.exports = main();
