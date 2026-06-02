import type { Request, Response } from 'express';
import type { HealthResponse } from '../types/http';

export const getHealth = (_req: Request, res: Response<HealthResponse>): void => {
  res.status(200).json({
    status: 'ok',
    service: 'autonomous-ai-platform',
    timestamp: new Date().toISOString()
  });
};
