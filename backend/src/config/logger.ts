import winston from 'winston';
import { env } from './environment';

const logFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.errors({ stack: true }),
  winston.format.json()
);

export const logger = winston.createLogger({
  level: env.nodeEnv === 'production' ? 'info' : 'debug',
  defaultMeta: {
    service: 'autonomous-ai-platform'
  },
  format: logFormat,
  transports: [new winston.transports.Console()]
});
