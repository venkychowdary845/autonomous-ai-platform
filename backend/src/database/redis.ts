import { createClient } from 'redis';
import { env } from '../config/environment';
import { logger } from '../config/logger';

export const redisClient = createClient({
  url: env.redisUrl
});

redisClient.on('error', (error) => {
  logger.error('Redis client error', {
    error: error.message
  });
});

export const connectRedis = async (): Promise<void> => {
  if (!redisClient.isOpen) {
    await redisClient.connect();
  }
};

export const testRedisConnection = async (): Promise<void> => {
  try {
    await connectRedis();
    await redisClient.ping();
    logger.info('Redis connection established');
  } catch (error) {
    logger.error('Redis connection failed', {
      error: error instanceof Error ? error.message : error
    });
    throw error;
  }
};

export const closeRedisConnection = async (): Promise<void> => {
  if (redisClient.isOpen) {
    await redisClient.quit();
    logger.info('Redis connection closed');
  }
};
