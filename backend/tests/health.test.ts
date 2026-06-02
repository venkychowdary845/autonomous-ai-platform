process.env.PORT = '4000';
process.env.POSTGRES_URL = 'postgresql://postgres:postgres@localhost:5432/autonomous_ai_platform';
process.env.REDIS_URL = 'redis://localhost:6379';

import request from 'supertest';
import { createApp } from '../src/app';

describe('GET /health', () => {
  it('returns the service health payload', async () => {
    const response = await request(createApp()).get('/health').expect(200);

    expect(response.body).toEqual({
      status: 'ok',
      service: 'autonomous-ai-platform',
      timestamp: expect.any(String)
    });
    expect(new Date(response.body.timestamp).toString()).not.toBe('Invalid Date');
  });
});
