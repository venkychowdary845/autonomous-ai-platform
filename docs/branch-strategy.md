# Branch Strategy

This repository uses a simple Git flow designed for fast development with controlled integration.

## Long-Lived Branches

### `main`

`main` is the stable branch. It should contain only reviewed, validated code that is ready to preserve as the current stable state.

Rules:

- Do not commit directly to `main`.
- Merge into `main` from `dev` only.
- Require review before merging.
- Require passing checks before merging when CI is available.

### `dev`

`dev` is the integration branch. Feature, fix, and maintenance branches merge into `dev` first.

Rules:

- Create new work branches from `dev`.
- Open pull requests into `dev`.
- Keep `dev` healthy and buildable.
- Promote `dev` to `main` after review and validation.

## Short-Lived Branches

### `feature/*`

Use for new functionality or planned project work.

Examples:

```bash
feature/backend-foundation
feature/frontend-dashboard-shell
feature/research-agent-service
```

### `fix/*`

Use for bug fixes.

Examples:

```bash
fix/health-route-response
fix/docker-compose-env
```

### `chore/*`

Use for tooling, documentation, repository setup, and maintenance.

Examples:

```bash
chore/pr-template
chore/eslint-config
chore/docker-cleanup
```

## Pull Request Targets

```text
feature/* -> dev
fix/*     -> dev
chore/*   -> dev
dev       -> main
```

## Recommended Git Commands

Create `dev` from `main`:

```bash
git checkout main
git checkout -b dev
```

Create a feature branch from `dev`:

```bash
git checkout dev
git pull
git checkout -b feature/example-work
```

Merge stable integration work into `main`:

```bash
git checkout main
git merge dev
```

## Branch Protection Recommendations

When GitHub branch protection is configured, use these rules:

- Protect `main`.
- Protect `dev`.
- Require pull requests before merging.
- Require at least one approval.
- Require status checks when CI is available.
- Block force pushes.
- Block branch deletion.
