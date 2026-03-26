---
name: team-coordination
description: "Coordinate parallel work and team collaboration. Invoke when task is large enough to benefit from coordinated work breakdown, parallel execution, or multi-agent collaboration. Manages task decomposition, work distribution, and result integration."
---

# Team Coordination

Coordinate parallel work and team collaboration for large tasks.

## When to Use

- Task is large enough to benefit from decomposition
- Multiple independent pieces of work can proceed in parallel
- Need structured work distribution and integration
- Complex feature with multiple domains or subsystems
- Benefits from specialized expertise in different areas

## Team Coordination Framework

### 1. Task Decomposition

Break the work into independent pieces:

```
Main Task
├── Subtask A
├── Subtask B
├── Subtask C
└── Integration
```

Each subtask should be:
- Independent (can be done in parallel)
- Well-defined (clear scope and boundaries)
- Verifiable (clear success criteria)

### 2. Work Distribution

Assign work based on:
- Expertise (who is best for what)
- Dependencies (what order makes sense)
- Workload (balance the load)

### 3. Parallel Execution

Execute independent tasks in parallel where possible.

### 4. Result Integration

Combine the results into a coherent whole.

## Coordination Patterns

### Pattern 1: Frontend + Backend Split

```
Task: Build user profile feature

Subtasks:
├── Frontend: Profile UI components, forms, validation
├── Backend: API endpoints, database, business logic
├── Integration: Connect frontend to backend, testing
```

### Pattern 2: Feature Module Split

```
Task: Build e-commerce checkout

Subtasks:
├── Cart management
├── Payment processing
├── Order management
├── User authentication
└── Integration
```

### Pattern 3: Refactoring Split

```
Task: Refactor authentication system

Subtasks:
├── Database migration
├── API changes (backwards compatible)
├── Frontend updates
├── Testing & verification
```

## Task Decomposition Checklist

Before decomposing, verify:

- [ ] Main goal is clearly understood
- [ ] Dependencies are mapped
- [ ] Each subtask has clear scope
- [ ] Each subtask has success criteria
- [ ] Integration plan exists
- [ ] Testing plan exists

## Parallel Execution Guide

### Step 1: Prepare the Groundwork

First, do any work that needs to happen first:

```
1. Create shared interfaces/types
2. Set up feature flags (if needed)
3. Establish testing infrastructure
4. Document architecture decisions
```

### Step 2: Execute in Parallel

Launch independent tasks:

```
Task A ──┐
          ├──> Integration
Task B ──┘
```

### Step 3: Integrate Results

Combine and test the results:

```
1. Pull all changes
2. Resolve conflicts
3. Integration testing
4. End-to-end verification
```

## Communication & Sync

Regular checkpoints:
- Start: Kickoff with clear plan
- Midway: Progress updates, blockers
- End: Integration plan
- Post: Review and retrospect

## Risk Management for Teams

| Risk | Mitigation |
|------|-----------|
| Integration issues | Define clear interfaces upfront |
| Divergent implementations | Share architecture decisions |
| Schedule slip | Track progress, adjust scope |
| Quality variations | Shared quality standards |
| Communication gaps | Regular sync points |

## Example: Team Workflow

```
Scenario: Building a dashboard

Phase 1: Planning
- Decompose into components
- Define interfaces
- Set up shared types

Phase 2: Parallel Work
- Agent A: Chart components
- Agent B: Data fetching & state
- Agent C: Layout & navigation

Phase 3: Integration
- Combine all components
- Integration testing
- Polish & optimization

Phase 4: Delivery
- Code review
- Documentation
- Deploy
```

## When to Use Team vs Single Agent

Use Team Coordination when:
- Work can be cleanly decomposed
- Multiple independent pieces
- Benefits from specialization
- Time is critical

Use Single Agent when:
- Work is highly sequential
- Tight coupling between parts
- Simple enough for one agent
- Better to maintain context

## Team Success Factors

Key factors for success:
1. Clear decomposition
2. Well-defined interfaces
3. Regular communication
4. Shared standards
5. Clear ownership
6. Integration plan
7. Testing strategy

## Anti-Patterns to Avoid

1. **Over-Decomposition** - Don't split into too many tiny pieces
2. **Poorly Defined Interfaces** - Ambiguous interfaces cause integration pain
3. **No Integration Plan** - Don't forget how to put it back together
4. **Ignoring Dependencies** - Some things can't be parallelized
5. **No Sync Points** - Don't work in a silos
