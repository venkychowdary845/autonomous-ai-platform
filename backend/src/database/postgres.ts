import { Pool } from 'pg';
import { env } from '../config/environment';
import { logger } from '../config/logger';

export const postgresPool = new Pool({
  connectionString: env.postgresUrl,
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000
});

export const testPostgresConnection = async (): Promise<void> => {
  const client = await postgresPool.connect();

  try {
    await client.query('SELECT 1');
    logger.info('PostgreSQL connection established');
  } catch (error) {
    logger.error('PostgreSQL connection failed', {
      error: error instanceof Error ? error.message : error
    });
    throw error;
  } finally {
    client.release();
  }
};

export const closePostgresConnection = async (): Promise<void> => {
  await postgresPool.end();
  logger.info('PostgreSQL connection pool closed');
};
