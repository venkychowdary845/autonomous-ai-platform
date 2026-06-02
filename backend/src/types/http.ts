export type HealthResponse = {
  status: 'ok';
  service: 'autonomous-ai-platform';
  timestamp: string;
};

export type ApiErrorPayload = {
  status: 'error';
  message: string;
};
