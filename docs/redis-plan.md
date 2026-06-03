# Redis Planning

This document defines the planned Redis usage for the Autonomous Multi-Agent AI Platform.

No Redis queue, pub/sub, or cache implementation is required for Week 1 Day 1. The backend currently only includes Redis connection infrastructure.

## Redis Purpose

Redis will support fast runtime coordination between the Head Node and agents.

Planned uses:

- Task queue
- Agent communication
- Temporary state
- Runtime cache

## Task Queue

Redis can act as the queue backend for future task orchestration.

Possible queue library:

- BullMQ

Planned queues:

- `tasks:frontend`
- `tasks:backend`
- `tasks:research`
- `tasks:testing`
- `tasks:default`

Queue message shape:

```json
{
  "taskId": "uuid",
  "projectId": "uuid",
  "agentType": "backend",
  "priority": 1,
  "createdAt": "2026-06-02T00:00:00.000Z"
}
```

## Agent Communication

Redis may be used for event-based communication between agents and the Head Node.

Possible channels:

- `agent:events`
- `task:events`
- `project:events`
- `head-node:commands`

Example event:

```json
{
  "eventType": "task.completed",
  "projectId": "uuid",
  "taskId": "uuid",
  "agentId": "uuid",
  "timestamp": "2026-06-02T00:00:00.000Z"
}
```

## Temporary State

Redis can store short-lived state that should not permanently live in PostgreSQL.

Examples:

- Active browser session IDs.
- Agent heartbeat state.
- Temporary progress counters.
- Short-lived locks.
- Current execution pointers.

Suggested keys:

```text
agent:{agentId}:heartbeat
project:{projectId}:active-tasks
task:{taskId}:runtime-state
lock:project:{projectId}
```

## Runtime Cache

Redis can cache frequently accessed data to reduce database reads.

Examples:

- Project summary cache.
- Agent capability cache.
- Current task status cache.
- Recent log tail cache.

Suggested cache keys:

```text
cache:project:{projectId}:summary
cache:agent:{agentId}:capabilities
cache:task:{taskId}:status
cache:logs:{projectId}:recent
```

## Reliability Rules

Redis should not be the only place for durable project data.

Rules:

- Durable records belong in PostgreSQL.
- Redis may hold runtime state, queues, locks, and cache entries.
- Critical task transitions should eventually be persisted in PostgreSQL.
- Redis keys should use clear prefixes and expiration where appropriate.

## Day 1 Boundary

Day 1 includes Redis connection setup only. Queue processing, pub/sub, cache services, and runtime state managers should be implemented in later phases.
