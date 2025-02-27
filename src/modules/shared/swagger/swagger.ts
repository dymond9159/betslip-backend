import { DocumentBuilder, SwaggerCustomOptions } from "@nestjs/swagger";

export const swaggerPath = "api";

export const swaggerDocumentOptions = new DocumentBuilder()
  .setTitle("betslip")
  .setDescription(
    '\n\n## Please note that some endpoints are secured with JWT Bearer authentication.'
  )
  .addBearerAuth()
  .build();

export const swaggerSetupOptions: SwaggerCustomOptions = {
  swaggerOptions: {
    persistAuthorization: true,
  },
  customCssUrl: "./assets/swagger.css",
  customfavIcon: "./assets/favicon.png",
  customSiteTitle: "betslip",
};
