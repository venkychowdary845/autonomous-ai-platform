# Autonomous Multi-Agent AI Platform

Desktop-based AI orchestration platform where a future Head Node will coordinate specialized AI agents.

This repository is currently in foundation setup. The backend infrastructure lives in `backend/`.

## Branch Strategy

- `main`: stable production-ready branch.
- `dev`: integration branch for reviewed work before promotion to `main`.
- `feature/*`: short-lived branches for new work.
- `fix/*`: short-lived branches for bug fixes.
- `chore/*`: short-lived branches for tooling, documentation, or maintenance.

Examples:

```bash
feature/backend-foundation
feature/head-node-api-shell
fix/health-route-error
chore/update-pr-template
```

## Pull Request Flow

1. Create work branches from `dev`.
2. Use the naming convention: `feature/*`, `fix/*`, or `chore/*`.
3. Open pull requests into `dev`.
4. Keep PRs focused and small enough to review clearly.
5. Merge `dev` into `main` only after validation and review.

## Project Structure

```text
/
├── .github/            # Pull request and issue templates
├── docs/               # Project process and architecture notes
└── backend/            # Node.js TypeScript backend foundation
```

## Backend

See `backend/README.md` for backend setup, Docker commands, and service details.
