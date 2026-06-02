import type { ErrorRequestHandler } from 'express';
import { logger } from '../config/logger';
import { env } from '../config/environment';
import { HttpError } from '../utils/httpError';
import type { ApiErrorPayload } from '../types/http';

export const errorHandler: ErrorRequestHandler = (error, _req, res, _next) => {
  const statusCode = error instanceof HttpError ? error.statusCode : 500;
  const message = error instanceof Error ? error.message : 'Unexpected server error.';

  logger.error('Request failed', {
    statusCode,
    message,
    stack: error instanceof Error ? error.stack : undefined
  });

  const payload: ApiErrorPayload & { stack?: string } = {
    status: 'error',
    message: statusCode === 500 && env.nodeEnv === 'production' ? 'Internal server error.' : message
  };

  if (env.nodeEnv !== 'production' && error instanceof Error) {
    payload.stack = error.stack;
  }

  res.status(statusCode).json(payload);
};
