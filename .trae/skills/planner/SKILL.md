---
name: planner
description: "Strategic planning skill for feature implementation. Invoke when planning new features, refactoring, or implementing complex changes. Creates detailed implementation plans with boundaries, dependencies, and verification steps."
---

# Planner

Strategic planning for feature implementation, refactoring, and complex changes.

## When to Use

- Implementing new features or functionality
- Refactoring existing code
- Making complex changes with multiple dependencies
- Needing clear implementation roadmap
- Risk management and boundary setting
- Creating verification and testing plans

## Planning Framework

### 1. Context Analysis

First, analyze the current state:

```
What do we know?
- Current codebase structure
- Related files and dependencies
- Existing patterns and conventions
- Technical debt and constraints

What don't we know?
- Unclear requirements
- Unknown edge cases
- Missing context about business logic
- Potential side effects
```

### 2. Goal Definition

Clearly define what we want to achieve:

```
Primary Goal:
- One sentence, specific, measurable outcome

Secondary Goals:
- Related improvements that can be made

Non-Goals:
- Explicitly list what we will NOT do
- Prevents scope creep
```

### 3. Boundary Setting

Set clear boundaries for the work:

| Dimension | Current State | Target State | Rationale |
|-----------|--------------|--------------|-----------|
| Scope | What's included? | What's excluded? | Why? |
| Risk | Known risks | Mitigation | How we'll handle it |
| Time | Estimated effort | Phases | Breakdown |

### 4. Implementation Strategy

Create a step-by-step plan:

```
Phase 1: Preparation
- [ ] Analyze and document current code
- [ ] Set up testing framework (if needed)
- [ ] Create feature flag (if applicable)

Phase 2: Core Implementation
- [ ] Implement core functionality
- [ ] Add error handling
- [ ] Update types/interfaces

Phase 3: Integration
- [ ] Integrate with existing systems
- [ ] Update database (if needed)
- [ ] Update API endpoints

Phase 4: Verification
- [ ] Run existing tests
- [ ] Add new tests
- [ ] Manual testing checklist

Phase 5: Delivery
- [ ] Code review
- [ ] Documentation
- [ ] Deploy (if applicable)
```

### 5. Dependencies Map

Visualize dependencies:

```
Task A
  ↓
Task B ← Task C
  ↓
Task D
```

List all dependencies clearly.

### 6. Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Breaking changes? | Low/High | Low/High | Strategy |
| Performance regressions? | ... | ... | ... |
| Integration issues? | ... | ... | ... |

### 7. Verification Plan

How will we know it's working?

```
Automated Tests:
- Unit tests
- Integration tests
- E2E tests (if applicable)

Manual Verification:
- Feature works as expected
- Edge cases handled
- No regressions
- Performance acceptable
```

## Planning Questions Template

Use these questions to guide the planning:

### Understanding the Request
1. What is the exact problem we're solving?
2. Who is this for? (Users, developers, stakeholders)
3. What does success look like? (Measurable outcomes)
4. What's the urgency and priority?

### Technical Context
1. What code already exists?
2. What patterns should we follow?
3. Are there any technical constraints?
4. What's the tech stack?

### Scope Management
1. What's definitely in scope?
2. What's definitely out of scope?
3. What might be nice to have later?
4. How will we prevent scope creep?

### Risk & Quality
1. What could go wrong?
2. How will we test this?
3. What documentation is needed?
4. How will we verify it's working?

## Common Planning Patterns

### Small Feature (1-2 days)
```
1. Understand requirements
2. Identify affected files
3. Implement with tests
4. Review and deliver
```

### Medium Feature (3-7 days)
```
Phase 1: Analysis & Design
Phase 2: Implementation
Phase 3: Testing & Verification
Phase 4: Review & Documentation
```

### Large Feature (1+ weeks)
```
Phase 1: Discovery & Planning
Phase 2: Architecture & Design
Phase 3: Implementation (multiple sub-phases)
Phase 4: Integration
Phase 5: Testing & QA
Phase 6: Deployment & Monitoring
```

## Anti-Patterns to Avoid

1. **Big Bang Approach** - Don't try to do everything at once
2. **No Boundaries** - Know when to stop
3. **Ignoring Existing Code** - Work with, not against, the codebase
4. **Skipping Testing** - Verification is part of delivery
5. **Scope Creep** - Non-goals are as important as goals

## Delivery Checklist

Before starting implementation, verify:

- [ ] Requirements are clear and documented
- [ ] Scope is bounded (in/out defined)
- [ ] Risks are identified with mitigations
- [ ] Implementation steps are broken down
- [ ] Dependencies are mapped
- [ ] Verification plan exists
- [ ] All stakeholders agree on the plan

## Post-Implementation Review

After delivery, review:

1. What went well?
2. What could be improved?
3. Did we stay within scope?
4. Did we meet our goals?
5. What did we learn for next time?
