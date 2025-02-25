import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import { HealthService } from './health.service';

@Controller('health')
export class HealthController {
  constructor(protected readonly healthService: HealthService) {}

  /**
   * Endpoint to check if the service is alive.
   *
   * This method returns a simple response to confirm that the service is up and running.
   * It is typically used to monitor if the application is running.
   *
   * @param response The response object used to send the HTTP response.
   * @returns The response with a message confirming the service's availability.
   */
  @Get('live')
  healthLive(@Res() response: Response): Response<void> {
    return response
      .status(HttpStatus.OK)
      .send({ message: 'Your service is okay now.' });
  }

  /**
   * Endpoint to check if the database is ready.
   *
   * This method checks the connection to the database using the HealthService. It returns a message
   * indicating whether the database is ready for use or not.
   *
   * @param response The response object used to send the HTTP response.
   * @returns The response with a message about the database's readiness.
   */
  @Get('ready')
  async healthReady(@Res() response: Response): Promise<Response<void>> {
    const dbConnection = await this.healthService.isDbReady();

    if (!dbConnection) {
      return response
        .status(HttpStatus.OK)
        .send({ message: 'Your database is not ready.' });
    }

    return response
      .status(HttpStatus.OK)
      .send({ message: 'Your database is ready.' });
  }
}
