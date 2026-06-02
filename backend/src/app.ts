import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import { healthRouter } from './routes/healthRoutes';
import { errorHandler } from './middleware/errorHandler';
import { notFoundHandler } from './middleware/notFound';
import { requestLogger } from './middleware/requestLogger';

export const createApp = (): express.Application => {
  const app = express();

  app.disable('x-powered-by');

  app.use(helmet());
  app.use(cors());
  app.use(express.json({ limit: '1mb' }));
  app.use(express.urlencoded({ extended: true }));
  app.use(requestLogger);

  app.use(healthRouter);

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
};
