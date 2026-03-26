---
name: deep-interview
description: "Clarify vague requirements and explore intent. Invoke when request is unclear, boundaries are undefined, or scope is ambiguous. Asks targeted questions one at a time to understand goals, non-goals, and constraints."
---

# Deep Interview

Clarify vague requirements and explore user intent.

## When to Use

- Request is still vague or unclear
- Boundaries and scope are undefined
- Need to understand decision boundaries
- Greenfield ideas needing sharper intent
- Brownfield changes needing inspection first
- Want one-question-at-a-time clarification

## Interview Framework

### Phase 1: Intent Discovery

First, understand what the user really wants:

```
Goal: What are we trying to achieve?
Why: Why does this matter?
Success: What does success look like?
```

### Phase 2: Boundary Setting

Clarify what's in and out:

```
In Scope: What definitely needs to be done?
Out Scope: What should we NOT do?
Nice-to-have: What could be added later?
```

### Phase 3: Constraint Mapping

Understand limitations and requirements:

```
Technical: What are the technical constraints?
Business: What are the business constraints?
Timeline: When does this need to be done?
Quality: What quality standards apply?
```

### Phase 4: Context Gathering

Collect existing context:

```
Existing: What code/systems already exist?
Patterns: What patterns should we follow?
Stakeholders: Who needs to be involved?
Risks: What could go wrong?
```

## Question Types

### Open-Ended Questions

Use these to explore:
- "What problem are we solving?"
- "Who is this for?"
- "What does success look like?"
- "What happens if we don't do this?"

### Clarifying Questions

Use these to narrow down:
- "When you say X, do you mean Y or Z?"
- "Is this for [audience A] or [audience B]?"
- "Should this include [feature] or is that separate?"

### Boundary Questions

Use these to set limits:
- "What's the minimum we need to deliver?"
- "What should we definitely NOT do?"
- "Where should we draw the line?"

### Priority Questions

Use these to order work:
- "What's the most important part?"
- "If we could only do one thing, what would it be?"
- "What's a nice-to-have vs must-have?"

## Interview Flow

### Step 1: Start Broad

Ask one open-ended question to start:

> "Let me understand better. What's the main goal we're trying to achieve here?"

Listen carefully to the answer before asking the next question.

### Step 2: Drill Down

Based on the answer, ask a follow-up:

> "Got it. Now, who is this primarily for? Users, internal teams, or both?"

### Step 3: Set Boundaries

Once you understand the goal, clarify boundaries:

> "Now that I understand the goal, what should we NOT include in this work?"

### Step 4: Confirm Understanding

Summarize what you've heard:

> "Let me confirm: you want [summary], for [audience], without [exclusions], and success is [definition]. Is that right?"

### Step 5: Get Final Confirmation

Before proceeding:

> "Okay, I think I understand. Before I start planning, is there anything else I should know?"

## Common Scenarios

### Scenario 1: Vague Greenfield Idea

```
User: "Build a dashboard"

Interview Questions:
1. What kind of dashboard? Analytics, admin, monitoring?
2. Who is this for? Executives, engineers, customers?
3. What metrics or data should it show?
4. What's the minimum viable version?
5. What should it NOT do?
```

### Scenario 2: Brownfield Change

```
User: "Refactor the authentication"

Interview Questions:
1. What's wrong with the current authentication?
2. What should the new one do differently?
3. Are there any backwards compatibility requirements?
4. What parts should we definitely keep?
5. What's the risk tolerance for breaking changes?
```

### Scenario 3: Unclear Scope

```
User: "Improve the UI"

Interview Questions:
1. What specifically about the UI needs improvement?
2. Is this about aesthetics, usability, or both?
3. Who is complaining or affected?
4. What's the budget/time for this?
5. What does "improved" look like in concrete terms?
```

## Decision Boundary Questions

These help understand tradeoffs:

### Technical Tradeoffs
- "Should we prioritize speed or quality?"
- "Is backwards compatibility more important than cleaner code?"
- "Should we use existing patterns or try something new?"

### Business Tradeoffs
- "Is time-to-market more important than perfect implementation?"
- "Should we cut features to hit the deadline?"
- "What's the cost of getting this wrong?"

### Quality Tradeoffs
- "How important is 100% test coverage?"
- "Should we ship with known issues if they're minor?"
- "What's the acceptable performance bar?"

## Anti-Patterns to Avoid

1. **Too Many Questions at Once** - Ask one question, wait for answer
2. **Leading Questions** - Don't bias the user's answer
3. **Assuming You Understand** - Confirm before proceeding
4. **Skipping Boundaries** - Always clarify what's out of scope
5. **Moving Too Fast** - Take time to fully understand

## Interview Output

After the interview, produce:

```
Summary:
- Goal: [clear statement]
- Audience: [who this is for]
- In Scope: [what's included]
- Out Scope: [what's excluded]
- Constraints: [limitations]
- Success Criteria: [how we'll know we're done]
```

## When to Stop Interviewing

Stop when:
- Goal is clear and specific
- Boundaries are defined
- Constraints are understood
- User confirms understanding
- You feel confident to proceed

Then hand off to `planner` for implementation planning.
