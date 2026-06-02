# Head Node Design

The Head Node is the central coordinator of the Autonomous Multi-Agent AI Platform. It acts as the project manager, task planner, agent coordinator, progress monitor, and result collector.

This document describes the intended Head Node design for planning purposes. No Head Node implementation is required for Week 1 Day 1.

## Core Workflow

```text
User submits project
        |
        v
Head Node receives request
        |
        v
Task decomposition
        |
        v
Task assignment
        |
        v
Agent execution
        |
        v
Result collection
        |
        v
Project merge
```

## Responsibilities

The Head Node will eventually handle:

- Receiving project requests.
- Understanding project requirements.
- Creating a project workspace.
- Splitting the request into smaller tasks.
- Assigning tasks to specialized agents.
- Tracking task and agent status.
- Coordinating file access.
- Monitoring logs and errors.
- Collecting outputs from agents.
- Merging outputs into a coherent project.
- Reporting progress to the desktop app.
- Preserving context for future project memory.

## Request Intake

The Head Node receives requests from the desktop app through the backend API.

Input may include:

- User goal.
- Project type.
- Reference URLs.
- Preferred tech stack.
- Design preferences.
- Required integrations.
- Constraints.

Initial validation should confirm:

- Required fields are present.
- Project type is supported.
- Workspace can be created.
- Required credentials or API keys are available when needed.

## Task Decomposition

The Head Node converts a broad user goal into smaller executable tasks.

Example user goal:

```text
Build a portfolio website with a backend contact API.
```

Possible tasks:

- Research portfolio layout references.
- Generate frontend structure.
- Build responsive UI components.
- Create backend contact endpoint.
- Add environment configuration.
- Test health and contact endpoints.
- Summarize generated project files.

Task decomposition should include:

- Task title.
- Task description.
- Agent type.
- Priority.
- Dependencies.
- Expected output.
- Workspace path.

## Task Assignment

Tasks are assigned by agent capability.

```text
Frontend work -> Frontend Agent
Backend/API work -> Backend Agent
Research/comparison work -> Research Agent
Validation/test work -> Testing Agent
```

Assignment should consider:

- Agent availability.
- Task priority.
- Task dependencies.
- Required tools.
- Current agent workload.

## Agent Execution

Agents receive task instructions and operate inside the shared workspace.

Each agent should receive:

- Task ID.
- Project ID.
- Task description.
- Relevant project context.
- Allowed workspace path.
- Expected output format.

Agents report:

- Started status.
- Progress events.
- Generated files.
- Errors or blockers.
- Completion status.

## Result Collection

The Head Node collects task results and validates them before merging.

Result metadata:

- Task ID.
- Agent ID.
- Files created or modified.
- Summary of work.
- Errors encountered.
- Follow-up recommendations.

Validation may include:

- Checking required files exist.
- Running tests.
- Inspecting logs.
- Confirming task output matches the expected result.

## Project Merge

The Head Node merges completed outputs into the project workspace.

Merge responsibilities:

- Preserve existing files.
- Avoid overwriting unrelated changes.
- Track file ownership and modifications.
- Record merge logs.
- Notify the desktop app when output is ready.

## Failure Handling

The Head Node should support controlled recovery.

Failure examples:

- Agent execution fails.
- Browser automation fails.
- AI tool credits are exhausted.
- File conflict occurs.
- Required dependency is missing.

Planned recovery behavior:

- Mark task as `failed` or `blocked`.
- Store error details.
- Retry when safe.
- Reassign task to another agent if needed.
- Ask the user for input when recovery is not safe.

## Dynamic Agent Replacement

Future versions may support replacing agents when credits expire, browser sessions fail, or an AI tool becomes unavailable.

Planned replacement flow:

```text
Agent unavailable
        |
        v
Head Node stores checkpoint
        |
        v
Replacement agent is selected
        |
        v
Task context is restored
        |
        v
Replacement agent continues work
```

This is a future capability and is not part of Day 1 implementation.

## Day 1 Boundary

Day 1 is documentation and infrastructure only.

The Head Node should not be implemented yet. The current goal is to define the design clearly enough that later backend tasks can build toward it without confusion.
