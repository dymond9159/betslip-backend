import { Injectable } from '@nestjs/common';
import { PrismaService } from '../shared/prisma/prisma.service';

@Injectable()
export class HealthService {
  constructor(protected readonly prisma: PrismaService) {}

  /**
   * Checks the availability and readiness of the database connection.
   *
   * This method attempts to execute a simple database query (`SELECT 1`) to ensure the database
   * connection is live and functioning properly. If the query succeeds, it indicates that the
   * database is reachable and operational. If an error occurs during the query execution (e.g.,
   * due to network issues or database unavailability), it returns `false` to indicate that the
   * database is not ready.
   *
   * @returns {Promise<boolean>} A promise that resolves to `true` if the database is ready,
   * or `false` if there is an issue with the database connection.
   */
  async isDbReady(): Promise<boolean> {
    try {
      await this.prisma.$queryRaw`SELECT 1`;
      return true;
    } catch (error) {
      return false;
    }
  }
}
