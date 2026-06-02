# Backend Architecture

This document defines the Week 1 Day 1 backend architecture direction for the Autonomous Multi-Agent AI Platform.

The platform is a desktop-based orchestration system where an Electron application sends user project requests to a backend Head Node. The Head Node coordinates task planning, agent execution, shared files, monitoring, and result collection.

## High-Level System

```text
Electron Desktop App
        |
        v
    Head Node
        |
        v
  Task Management
        |
        v
 Agent Runtime Layer
        |
        v
Frontend Agent | Backend Agent | Research Agent | Testing Agent
```

## Main Components

### Electron Desktop App

The desktop app is the user-facing surface. It receives user goals, displays project progress, shows logs, and provides access to generated files.

Responsibilities:

- Collect project requirements from the user.
- Send requests to the backend Head Node.
- Display task status, agent status, and execution logs.
- Allow users to inspect generated project files.

### Head Node

The Head Node is the central coordinator. It does not directly implement frontend, backend, research, or testing work. Instead, it interprets user goals, creates tasks, assigns them to agents, and merges results.

Responsibilities:

- Receive user project requests.
- Analyze requirements.
- Break work into tasks.
- Assign tasks to specialized agents.
- Track agent progress.
- Coordinate shared workspace access.
- Collect agent outputs.
- Merge results into the project workspace.
- Report status back to the desktop app.

### Task Management

The task management layer stores and tracks units of work. It maintains task state, assignment, retries, dependencies, and completion metadata.

Initial task states:

- `created`
- `assigned`
- `running`
- `blocked`
- `completed`
- `failed`

### Agent Runtime Layer

The agent runtime layer manages the execution context for each specialized agent. It provides the agent with task details, project context, workspace paths, and required tool access.

Initial agent types:

- Frontend Agent
- Backend Agent
- Research Agent
- Testing Agent

Future agent types may include Database Agent, Deployment Agent, Debugging Agent, and Documentation Agent.

### Shared Workspace

The shared workspace is the local project folder where generated files, logs, downloads, and intermediate outputs are stored.

Example structure:

```text
project/
├── frontend/
├── backend/
├── database/
├── memory/
├── logs/
└── downloads/
```

### Project Memory System

The memory system is planned for later phases. It will store project summaries, decisions, agent outputs, checkpoints, and compressed context.

No memory implementation is required for Day 1.

### Browser Automation Engine

Some AI tools may not expose complete APIs. The browser automation engine will use tools such as Playwright or Puppeteer to control AI web apps when needed.

Planned capabilities:

- Open isolated browser sessions.
- Login with user-approved accounts.
- Send prompts.
- Monitor responses.
- Download generated files.
- Retry failed browser interactions.

No browser automation implementation is required for Day 1.

## Request Flow

```text
User
  |
  v
Electron Desktop App
  |
  v
Backend API
  |
  v
Head Node
  |
  v
Task Management
  |
  v
Agent Runtime Layer
  |
  v
Specialized Agents
  |
  v
Shared Workspace
  |
  v
Head Node result collection
  |
  v
Electron Desktop App status update
```

Request flow steps:

1. User submits a project goal from the Electron desktop app.
2. The desktop app sends the request to the backend API.
3. The Head Node validates and analyzes the request.
4. The Head Node decomposes the request into tasks.
5. Task Management records the tasks and dependencies.
6. The Head Node assigns tasks to specialized agents.
7. Agents execute work inside the shared workspace.
8. Agents report progress, blockers, and outputs.
9. The Head Node collects and validates results.
10. The desktop app receives final status and file locations.

## Agent Communication

Agent communication should flow through the Head Node. Agents should not directly coordinate with each other as the primary communication path.

Preferred communication pattern:

```text
Agent -> Head Node -> Task/Event Store -> Head Node -> Agent
```

This keeps task state centralized and avoids conflicting instructions.

Planned communication channels:

- HTTP API for desktop-to-backend communication.
- Redis pub/sub or streams for runtime agent events.
- PostgreSQL for durable task, agent, and log records.
- Shared workspace files for generated artifacts.

## File Sharing

Files are shared through a local project workspace controlled by the Head Node.

Rules:

- Each project receives its own workspace folder.
- Agents write to assigned folders where possible.
- The Head Node tracks important file paths and output metadata.
- Agents should avoid overwriting files outside their assigned scope.
- Conflict resolution should be handled by the Head Node in later phases.

## Task Assignment

The Head Node assigns tasks based on agent capability and current task state.

Examples:

- UI layout task -> Frontend Agent
- API route task -> Backend Agent
- Library comparison task -> Research Agent
- Endpoint validation task -> Testing Agent

Assignment metadata:

- Task ID
- Project ID
- Agent type
- Priority
- Dependencies
- Input context
- Workspace path
- Expected output

## Day 1 Scope

Day 1 focuses on foundation and planning only.

Included:

- Backend skeleton.
- Health endpoint.
- Environment configuration.
- PostgreSQL and Redis connection modules.
- Architecture documentation.
- Branch strategy and PR workflow.

Excluded:

- Head Node implementation.
- Agent implementation.
- Memory implementation.
- Task queue implementation.
- Browser automation implementation.
- Business logic.
