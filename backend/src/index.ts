import { createServer } from 'http';
import { createApp } from './app';
import { env } from './config/environment';
import { logger } from './config/logger';
import { closePostgresConnection } from './database/postgres';
import { closeRedisConnection } from './database/redis';
import { testInfrastructureConnections } from './services/connectionService';

const app = createApp();
const server = createServer(app);

const startServer = async (): Promise<void> => {
  logger.info('Starting backend service', {
    nodeEnv: env.nodeEnv,
    port: env.port
  });

  await testInfrastructureConnections();

  server.listen(env.port, () => {
    logger.info('Backend service is listening', {
      port: env.port
    });
  });
};

const shutdown = async (signal: NodeJS.Signals): Promise<void> => {
  logger.info('Shutdown signal received', { signal });

  server.close(async () => {
    await closeRedisConnection();
    await closePostgresConnection();
    logger.info('Backend service stopped');
    process.exit(0);
  });
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

startServer().catch((error) => {
  logger.error('Backend service failed to start', {
    error: error instanceof Error ? error.message : error
  });
  process.exit(1);
});
