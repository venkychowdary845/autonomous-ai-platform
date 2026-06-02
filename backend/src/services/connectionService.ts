import { testPostgresConnection } from '../database/postgres';
import { testRedisConnection } from '../database/redis';

export const testInfrastructureConnections = async (): Promise<void> => {
  await testPostgresConnection();
  await testRedisConnection();
};
