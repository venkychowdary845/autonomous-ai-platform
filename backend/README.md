# Autonomous Multi-Agent AI Platform Backend

Week 1 Day 1 backend foundation for the Autonomous Multi-Agent AI Platform.

This package provides only infrastructure: an Express API shell, environment configuration, PostgreSQL and Redis connection modules, logging, tests, and Docker support. It intentionally does not implement Head Node orchestration, AI agents, memory systems, business logic, or task queues.

## One-Command Start

```bash
docker compose up --build
```

The backend starts at `http://localhost:4000`.

Health check:

```bash
curl http://localhost:4000/health
```

Expected response:

```json
{
  "status": "ok",
  "service": "autonomous-ai-platform",
  "timestamp": "2026-06-01T00:00:00.000Z"
}
```

## Local Setup

```bash
cd backend
npm install
copy .env.example .env
npm run dev
```

For local development without Docker, update `.env` so `POSTGRES_URL` and `REDIS_URL` point to local services.

## Environment Variables

| Variable | Description | Example |
| --- | --- | --- |
| `PORT` | HTTP server port | `4000` |
| `POSTGRES_URL` | PostgreSQL connection string | `postgresql://postgres:postgres@localhost:5432/autonomous_ai_platform` |
| `REDIS_URL` | Redis connection string | `redis://localhost:6379` |
| `OPENAI_API_KEY` | Reserved for future OpenAI integrations | Empty for Day 1 |
| `GEMINI_API_KEY` | Reserved for future Gemini integrations | Empty for Day 1 |

## Run Commands

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run format
npm run test
```

## Docker Commands

```bash
docker compose up --build
docker compose down
docker compose down -v
```

`docker compose up --build` starts:

- Backend container
- PostgreSQL 16 container
- Redis 7 container

## Project Structure

```text
backend/
├── src/
│   ├── routes/          # Express route definitions
│   ├── controllers/     # Request handlers
│   ├── services/        # Infrastructure service coordination
│   ├── middleware/      # Request logging, 404, and error middleware
│   ├── config/          # Environment and logger configuration
│   ├── database/        # PostgreSQL and Redis connection modules
│   ├── utils/           # Shared utility classes
│   ├── types/           # Shared TypeScript types
│   ├── app.ts           # Express app factory
│   └── index.ts         # Server startup and graceful shutdown
├── tests/               # Jest test suite
├── .env.example         # Required environment variables
├── tsconfig.json        # TypeScript configuration
├── package.json         # Scripts and dependencies
├── Dockerfile           # Production backend image
├── docker-compose.yml   # Backend, PostgreSQL, and Redis stack
└── README.md            # Setup and operating guide
```

## Notes

- The startup path checks PostgreSQL and Redis before accepting traffic.
- Winston logs startup, HTTP requests, database connection status, Redis connection status, and shutdown events.
- The current test suite validates the `/health` endpoint without requiring PostgreSQL or Redis.
