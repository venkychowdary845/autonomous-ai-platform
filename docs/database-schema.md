# Database Schema Planning

This document defines the initial PostgreSQL data model plan for the Autonomous Multi-Agent AI Platform.

No migrations or database tables are required for Week 1 Day 1. This is a planning document for future implementation.

## PostgreSQL Purpose

PostgreSQL will store durable platform data that must survive restarts.

Primary data categories:

- Users
- Projects
- Tasks
- Agents
- Logs

## Proposed Tables

## `users`

Stores platform users and ownership metadata.

Fields:

- `id` UUID primary key
- `email` text unique
- `display_name` text
- `role` text
- `created_at` timestamp
- `updated_at` timestamp

Notes:

- Authentication is not part of Day 1.
- User records will be useful when project ownership and team permissions are implemented.

## `projects`

Stores project-level metadata.

Fields:

- `id` UUID primary key
- `owner_id` UUID foreign key to `users.id`
- `name` text
- `description` text
- `workspace_path` text
- `status` text
- `created_at` timestamp
- `updated_at` timestamp

Possible statuses:

- `created`
- `planning`
- `running`
- `paused`
- `completed`
- `failed`

## `agents`

Stores known agent definitions and runtime identity.

Fields:

- `id` UUID primary key
- `project_id` UUID foreign key to `projects.id`
- `name` text
- `type` text
- `status` text
- `capabilities` jsonb
- `metadata` jsonb
- `created_at` timestamp
- `updated_at` timestamp

Agent types:

- `frontend`
- `backend`
- `research`
- `testing`
- `database`

Possible statuses:

- `idle`
- `assigned`
- `running`
- `blocked`
- `completed`
- `failed`
- `unavailable`

## `tasks`

Stores task records created by the Head Node.

Fields:

- `id` UUID primary key
- `project_id` UUID foreign key to `projects.id`
- `assigned_agent_id` UUID nullable foreign key to `agents.id`
- `title` text
- `description` text
- `type` text
- `priority` integer
- `status` text
- `dependencies` jsonb
- `input_context` jsonb
- `expected_output` jsonb
- `result` jsonb
- `created_at` timestamp
- `updated_at` timestamp
- `started_at` timestamp nullable
- `completed_at` timestamp nullable

Possible statuses:

- `created`
- `assigned`
- `running`
- `blocked`
- `completed`
- `failed`

## `logs`

Stores durable application, project, task, and agent events.

Fields:

- `id` UUID primary key
- `project_id` UUID nullable foreign key to `projects.id`
- `task_id` UUID nullable foreign key to `tasks.id`
- `agent_id` UUID nullable foreign key to `agents.id`
- `level` text
- `source` text
- `message` text
- `metadata` jsonb
- `created_at` timestamp

Log levels:

- `debug`
- `info`
- `warn`
- `error`

## Relationship Overview

```text
users
  |
  v
projects
  |
  +--> agents
  |
  +--> tasks
          |
          v
        logs
```

## Index Planning

Recommended future indexes:

- `projects.owner_id`
- `projects.status`
- `agents.project_id`
- `agents.status`
- `tasks.project_id`
- `tasks.assigned_agent_id`
- `tasks.status`
- `tasks.priority`
- `logs.project_id`
- `logs.task_id`
- `logs.agent_id`
- `logs.created_at`

## Day 1 Boundary

This document only plans the schema. Database migrations, repositories, models, and business logic should be implemented later.
