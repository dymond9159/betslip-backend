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
  // Create a NestJS application instance with CORS enabled
  const app = await NestFactory.create(AppModule, { cors: true });

  // Set a global API prefix to organize routes under `/api`
  app.setGlobalPrefix('api');

  // Apply global validation pipe for automatic validation of incoming requests
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // Automatically transform payloads to DTOs
      forbidUnknownValues: false, // Allow unknown values in the request payload
    }),
  );

  // Create Swagger documentation for the API based on the defined options
  const document = SwaggerModule.createDocument(app, swaggerDocumentOptions);

  // Loop through the paths and methods in the Swagger document to modify security settings
  Object.values((document as OpenAPIObject).paths).forEach((path: any) => {
    Object.values(path).forEach((method: any) => {
      // Remove security definitions for paths marked as 'isPublic'
      if (
        Array.isArray(method.security) &&
        method.security.includes('isPublic')
      ) {
        method.security = []; // Clear security settings for public paths
      }
    });
  });

  // Establish connections to microservices
  await connectMicroservices(app);

  // Start all connected microservices
  await app.startAllMicroservices();

  // Set up Swagger UI for API documentation
  SwaggerModule.setup(swaggerPath, app, document, swaggerSetupOptions);

  // Get the HTTP adapter and set up global exception filters
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new HttpExceptionFilter(httpAdapter));

  // Start the HTTP server on the specified port
  void app.listen(PORT);

  // Temporary logging for server status, remove in production
  console.log(
    '\n\n',
    `Base Server: http://localhost:${PORT}\n`, // Base server URL
    `Rest API Doc: http://localhost:${PORT}/api\n`, // Swagger API documentation URL
    `GraphQL API Playground: http://localhost:${PORT}/graphql`, // GraphQL Playground URL
    '\n\nYour server is successfully started on',
    new Date().toUTCString(), // Log the current time the server started
    '\n\n',
  );

  return app;
}

module.exports = main();
