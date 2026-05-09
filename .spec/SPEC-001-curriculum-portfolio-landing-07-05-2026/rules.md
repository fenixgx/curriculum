# RULES - Fusion 2.1 + SubAgents UNIFIED

> **Version:** 2.3 CLEAN - Unified system without duplicated files
> **Created:** 2025-11-19/20
> **Cleaned:** 2026-02-25
> **Philosophy:** "Powerful but not overwhelming + Never desynchronized"

---

## Quick Index

1. **Part 1:** Triangular System and Rules - how SPECs work
2. **Part 2:** SPEC Creator - for agents that create specs
3. **Part 3:** SubAgents Orchestrator - for agents that launch subagents
4. **Part 4:** SubAgents Executor - for agents that execute missions

---

# PART 1: TRIANGULAR SYSTEM AND RULES

## Central Philosophy

This system exists to keep technical work synchronized and recoverable.

The goal is:

- enough structure to avoid losing context,
- not so much structure that the process becomes heavier than the work,
- mandatory cross-references between the three living files,
- LIFO logging so a future agent can recover quickly,
- clear priorities so execution does not drift.

The principle is:

> Powerful but not overwhelming.
> Never desynchronized.

## SPEC Structure (4 Files - ONLY THESE)

Every SPEC folder contains only:

```text
.spec/SPEC-XXX-name/
├── RULES.md
├── spec.md
├── tasks.md
└── work_prepend.md
```

Do not create extra files inside the SPEC folder.

Forbidden:

- `README.md`
- `NOTES.md`
- `briefing.md`
- `agents/`
- external diagrams
- random logs

If more context is needed:

- add a section inside `spec.md`,
- expand missions inside `tasks.md`,
- add reports to `work_prepend.md` in LIFO order.

## THE MANDATORY TRIANGLE

```text
      spec.md
      /    \
     /      \
tasks.md ←→ work_prepend.md
```

### Synchronization Rules

Never update only one file if the change affects the triangle.

When `spec.md` changes:

- update related tasks in `tasks.md`,
- add a log entry in `work_prepend.md`.

When `tasks.md` changes:

- make sure each task links to a requirement in `spec.md`,
- add progress/log context in `work_prepend.md`.

When `work_prepend.md` changes:

- update `tasks.md` if a task changed state,
- update `spec.md` if requirements, architecture, or decisions changed.

### Standard Reference Format

Use explicit references:

```md
Requirement: spec.md #R1
Task: tasks.md Phase 2, T4
Log: work_prepend.md latest entry
```

Example:

```md
### [DATE HH:MM] - Task X Completed

- Requirement: spec.md #R3
- Task: tasks.md Phase 2, T7
- Files modified:
  - path/to/file.ts
- Verification:
  - TypeScript passed
  - Build passed
```

## FULL UPDATE CYCLE

When executing work:

1. Read `rules.md`.
2. Read `work_prepend.md` top section.
3. Read relevant `spec.md` requirement.
4. Read relevant `tasks.md` task.
5. Execute the work.
6. Verify.
7. Update `work_prepend.md` first, newest entry at top.
8. Update `tasks.md`.
9. Update `spec.md` delta log if the requirement or architecture changed.

## FUNDAMENTAL RULES

1. **Only 4 SPEC files.**
2. **New work log entries go at the top.**
3. **Every requirement must map to tasks.**
4. **Every completed task must have a log entry.**
5. **No invented completion.**
6. **No fake verification.**
7. **No extra documentation files.**
8. **No desynchronization.**

## DELTA LOG (Requirement Changes)

`spec.md` must include a Delta Log for requirement changes.

Format:

```md
### [DATE] Change: [Descriptive title]

- Requirement affected:
- What changed:
- Why:
- Files/tasks affected:
- Status:
```

Delta Log is not a changelog for every small edit. It is for meaningful changes
to requirements, architecture, decisions, or scope.

## ARCHIVE (Completed SPECs)

Completed SPECs must keep only a brief summary in global project docs.

Do not copy the whole SPEC into project-level documentation.

When archiving:

- preserve the 4 files,
- mark final status,
- record final verification,
- keep lessons learned.

## PRIORITY MATRIX

Use these labels in `tasks.md`:

- **[MVP]** = must happen first; core functionality.
- **[B]** = blocker; prevents future work or causes regression.
- **[P]** = parallel; can be batched.
- **[OPT]** = optional; only after MVP and blockers.

Rules:

- MVP comes first.
- Blockers are handled before polish.
- Parallel work can be delegated.
- Optional work never blocks launch.

## CONTEXT MANAGEMENT

The first lines of `work_prepend.md` must recover context quickly.

A future agent should be able to read the top of the file and know:

- current phase,
- current task,
- last action,
- next action,
- blockers,
- verification state.

Do not hide important context at the bottom.

## QUALITY STANDARDS

Before calling work complete:

- verify the implementation,
- check requirements,
- check tasks,
- check work log,
- document risks,
- do not claim Rodolfo approved unless he did.

Quality means the next agent can continue without guessing.

## WARNING SIGNS

Stop and inspect if:

- `spec.md` says one thing and `tasks.md` says another,
- a task is complete but no log explains it,
- work log says complete but verification is missing,
- there are extra files inside the SPEC,
- requirements keep growing without priority,
- implementation changed but Delta Log did not.

## RECOVERY PROCEDURES

If context was lost:

1. Read `work_prepend.md` first.
2. Read the last 3 session entries.
3. Read `tasks.md` pending items.
4. Read `spec.md` relevant requirement.
5. Verify files on disk.
6. Ask Rodolfo if the state is ambiguous.

## ERROR HANDLING

When something fails:

- capture the exact error,
- identify file and line,
- identify whether it is config, runtime, build, data, or UX,
- fix the smallest correct thing,
- verify again,
- record the result in `work_prepend.md`.

## APPROVAL GATES

Do not mark as final without the right approval.

Examples:

- technical verification can be done by the agent,
- visual/content approval must come from Rodolfo,
- production readiness requires both code verification and Rodolfo review.

## TIPS BY SYSTEM TYPE

For UI:

- verify responsive behavior,
- verify visual hierarchy,
- verify text does not overflow.

For backend:

- verify database/API behavior,
- verify error paths,
- verify security boundaries.

For documentation:

- verify cross-references,
- verify no duplicated stale information,
- verify current truth.

## COMPLETE PRACTICAL EXAMPLE (Triangle in Action)

### 1. Creation of Unified Specification

`spec.md` defines the problem and requirements.

`tasks.md` breaks requirements into prioritized tasks.

`work_prepend.md` records the current state and progress.

### 14:30 - TASK 1 COMPLETED

Example log entry:

```md
### 14:30 - TASK 1 COMPLETED

- Requirement: spec.md #R1
- Task: tasks.md Phase 1, T1
- Files modified:
  - src/example.ts
- Verification:
  - TypeScript passed
- Next:
  - Continue with T2
```

---

# PART 2: SPEC CREATOR

## Rodolfo Method (Natural Flow)

Do not create a SPEC immediately from a vague idea.

Natural flow:

1. Understand the real problem.
2. Research enough context.
3. Brainstorm and challenge assumptions.
4. Ask questions if there are multiple interpretations.
5. Define the solution.
6. Create the SPEC.

The rule:

> 3 minutes clarifying is better than 30 minutes doing the wrong work.

## Mental Checklist BEFORE Creating SPEC

- Do I understand the real problem?
- Did I inspect the existing project?
- Did I identify the real constraints?
- Did I ask Rodolfo about ambiguous points?
- Are requirements concrete?
- Is scope realistic?
- Can tasks map clearly to requirements?

## Creator Principles

- Real problem before academic methodology.
- Requirements must be useful, not decorative.
- Avoid too many requirements.
- Keep the system understandable.
- Prefer concrete acceptance criteria.
- Never invent facts.

## Creator Success Metrics

A good SPEC:

- can be read after compaction,
- explains why the work exists,
- tells what has to be done,
- tells what is already done,
- prevents duplicated work,
- helps future agents continue safely.

---

# PART 3: SUBAGENTS ORCHESTRATOR

## WHEN TO LAUNCH AGENTS

Launch agents when:

- there are independent missions,
- investigation can happen in parallel,
- work can be split by file/module ownership,
- multiple perspectives help avoid mistakes,
- the user explicitly asks for subagents or parallel work.

Do not launch agents when:

- the task is tiny,
- the next step is blocked by the agent result and should be done locally,
- agents would edit the same files without coordination,
- delegation adds more overhead than value.

## SETUP BEFORE LAUNCHING (5-15 min)

Before launching:

1. Read relevant SPEC context.
2. Define missions in `tasks.md`.
3. Give each mission a clear goal.
4. Give each mission a clear scope.
5. Define what the agent must report.
6. Define what the agent must not touch.

Example mission:

```md
### M15: Create TRIAL_CONFIG Constants - 30min

- Goal:
- Files allowed:
- Files not allowed:
- Expected output:
- Verification:
```

## LAUNCH AGENTS

Agent prompt must include:

- SPEC id,
- mission id,
- objective,
- allowed files,
- forbidden files,
- reporting format,
- verification requirements.

Agents must know they are not alone in the codebase.

Agents must not revert changes made by others.

## SUPERVISION

While agents work:

- continue with non-overlapping work,
- do not duplicate their mission,
- monitor reports,
- wait only when the result is needed,
- verify before merging conclusions.

## AUTO-UPDATE WORKFLOW (CRITICAL)

When an agent finishes:

1. Read the report.
2. Verify changed files.
3. Update `work_prepend.md`.
4. Update `tasks.md`.
5. Update `spec.md` if requirements changed.
6. Run verification if code changed.

## FINAL CONSOLIDATION

Final multi-agent consolidation must include:

```md
### [DATE HH:MM] - MULTI-AGENT SESSION: [Title]

- Agents launched:
- Missions completed:
- Files modified:
- Verification:
- Remaining risks:
- Next steps:
```

## ORCHESTRATOR ANTI-PATTERNS

Do not:

- launch vague agents,
- assign overlapping file ownership,
- skip verification,
- trust reports blindly,
- create extra SPEC files,
- leave tasks unsynchronized.

---

# PART 4: SUBAGENTS EXECUTOR (Opus Agents)

## FILES YOU MUST READ (MANDATORY)

Before executing:

1. `rules.md`
2. `work_prepend.md`
3. relevant `spec.md` section
4. relevant `tasks.md` mission
5. existing files you will modify

## BEFORE MODIFYING FILES

Check:

- Am I inside scope?
- Did I read existing code?
- Did I understand patterns?
- Am I about to duplicate existing logic?
- Do I know how to verify?
- Do I need clarification?

## DURING EXECUTION

If the mission is long, report progress around 50%.

Template:

```md
### [DD/MM/YYYY HH:MM] - MISSION-XX: 50% PROGRESS

- Completed:
- In progress:
- Blockers:
- Files touched:
- Risk:
```

## WHEN FINISHED - MANDATORY REPORT

Report in `work_prepend.md`:

```md
### [DD/MM/YYYY HH:MM] - MISSION-XX: [Descriptive Title]

## FILES MODIFIED
- Full path (lines changed: what changed)

## FILES CREATED
- Full path (line count: description)

## FILES READ
- Full path (why it was read)

## IMPLEMENTATION
- What was implemented
- Important decisions
- Patterns followed

## TESTING
- Commands run
- Results
- What was not tested

## RISKS
- Remaining risks
- Assumptions

## STATUS
- Completed / blocked / partial
```

## 5 SUPREME TECHNICAL RULES

### 1. TypeScript MUST Compile

Do not report complete if TypeScript is broken.

### 2. Paths ALWAYS Complete

Use full paths in reports.

Correct:

```text
F:\PROYECTOS\ROKAMENU\src\app\api\products\route.ts
```

Incorrect:

```text
route.ts
```

### 3. Fallbacks MANDATORY

Handle missing/empty states where the system can realistically hit them.

### 4. NO Commits OR Builds Unless Asked

Agents do not commit by default.

Agents do not run heavy builds unless mission requires it or orchestrator asks.

### 5. Follow Existing Patterns

Read nearby code and follow the project's current style.

## 18 STRICT PROHIBITIONS

### 6. DO NOT assume routes have /{lang}/ prefix

Verify routing before changing links or paths.

### 7. DO NOT overwrite without checking previous version

Read before writing.

### 8. VERIFY filenames match configuration

Do not create mismatched names.

### 9. DO NOT report "it works" only because TypeScript is clean

TypeScript clean is necessary, not sufficient.

### 10. DO NOT update sitemap without verifying routes exist

Routes must exist before sitemap entries.

### 11. DO NOT estimate keyword volumes without real data

No invented SEO metrics.

### 12. VERIFY components support ALL used types

Do not pass props/variants that components do not support.

### 13. DO NOT create files outside scope without permission

Stay inside the mission.

### 14. VERIFY operators with -1 (unlimited)

Handle unlimited plan logic carefully.

### 15. DO NOT hardcode plan limits

Use existing config/source of truth.

### 16. DO NOT change UX behavior without permission

If the mission is technical, do not silently redesign UX.

### 17. VERIFY FormData changes preserve other fields

Do not drop existing data while adding one field.

### 18. `ai_feature_usage` queries use `company_id` (NOT `business_id`)

Follow the existing data model.

## ANTI-DUPLICATION BETWEEN AGENTS

Before implementing:

- search for existing helpers,
- search for existing components,
- search for existing constants,
- do not create duplicate abstractions.

## LIMITS AND SCOPE

Do only the mission.

If you find unrelated problems:

- report them,
- do not fix them unless approved.

## COMMUNICATION

Be specific.

Bad:

```text
I updated the files.
```

Good:

```text
I updated src/lib/x.ts to add Y because Z required it.
```

## DEBUGGING

Debug with evidence:

- exact error,
- file,
- line,
- reproduction,
- smallest fix,
- verification.

## THE LEGACY

The system exists because many agents, many files, and many sessions can create
chaos if context is not preserved.

The goal is not bureaucracy.

The goal is that the next agent knows what happened, why it happened, and what
must not be broken.

