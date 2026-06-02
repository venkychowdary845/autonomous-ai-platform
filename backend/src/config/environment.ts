import dotenv from 'dotenv';

dotenv.config();

type Environment = {
  nodeEnv: string;
  port: number;
  postgresUrl: string;
  redisUrl: string;
  openAiApiKey: string;
  geminiApiKey: string;
};

const parsePort = (value: string | undefined): number => {
  const parsed = Number(value ?? 4000);

  if (!Number.isInteger(parsed) || parsed <= 0) {
    throw new Error('PORT must be a positive integer.');
  }

  return parsed;
};

const getRequiredValue = (key: string): string => {
  const value = process.env[key];

  if (!value) {
    throw new Error(`${key} is required.`);
  }

  return value;
};

export const env: Environment = {
  nodeEnv: process.env.NODE_ENV ?? 'development',
  port: parsePort(process.env.PORT),
  postgresUrl: getRequiredValue('POSTGRES_URL'),
  redisUrl: getRequiredValue('REDIS_URL'),
  openAiApiKey: process.env.OPENAI_API_KEY ?? '',
  geminiApiKey: process.env.GEMINI_API_KEY ?? ''
};
