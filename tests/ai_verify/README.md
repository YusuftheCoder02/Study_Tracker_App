# AI Skill Verification

## Purpose

This workspace exists to verify that I can independently apply the programming skills used in AI-generated features.

**My goal is not to memorize or rewrite AI-generated code. My goal is to become a software engineer who can build independently while using AI to accelerate development.**

## Verification Workflow

### 1. Identify Skills
- Review an AI-generated feature.
- Identify the programming concepts required to implement it.
- Determine which skills need verification.

### 2. Generate Challenges
- AI creates independent coding challenges targeting those skills.
- Challenges must test transferable knowledge.
- Challenges should not simply reproduce the original feature.
- Challenge difficulty should reflect the skills being verified.
- Break broad abilities into small, observable skills with stable IDs. Assign one new target skill per exercise by default; combine targets only when that combination is itself the learning objective.
- Assume a complete beginner unless the records show otherwise. Start with a tiny, low-setup task and increase difficulty gradually.
- Assign one exercise at a time. Before preparing it, check `skills.json` and previous reviews. AI may automate a skill only when both an independent passing review and a matching `skills.json` record exist. A prior assignment, exposure, or supplied starter implementation is not verification. Leave the target skill for the user, and remove or teach unverified prerequisites instead of silently relying on them.
- Provide neutral setup as labeled infrastructure. It does not count as verification of the skills used to create it.
- Keep a large exercise bank as a flexible outline, not as prebuilt assignments. After a pass, offer the next appropriate unverified skill; if the user struggles, offer a smaller practice exercise for that gap. Provide fresh independent work after solution-level help before verifying a skill.
- Use occasional, separately labeled integration exercises after their component skills have been verified. Track feature readiness separately from individual skill passes.

### 3. Solve Independently
- Complete challenges without referencing AI-generated implementations.
- Do not use tutorials, hints, or solutions during verification.
- Write the code independently.
- AI may clarify challenge requirements without revealing solutions.
- Re-practising a verified skill is optional; do not repeatedly require it.
- The user may request guided practice instead of verification; label it clearly and do not record a skill as verified from solution-level help.

### 4. Evaluate
- AI reviews the submitted solutions.
- Evaluate correctness and understanding.
- Identify skills that require additional practice.
- Failed challenges indicate learning gaps, not personal failure.

### 5. Approve
- Add an individual skill to `skills.json` only after it has an independent passing review.
- Track the original feature's readiness separately. Individual skill passes alone do not make a feature eligible for integration.
- The original feature still needs code review and testing before integration into `main`.

## Rules

1. AI may generate coding challenges and evaluate solutions.
2. AI must not provide solutions or hints unless explicitly requested.
3. Challenges must test transferable programming skills.
4. Verification must demonstrate independent problem-solving.
5. Rewriting an entire AI-generated feature is not required.
6. Memorizing AI-generated implementations does not count as verification.
7. Failed challenges require additional learning before approval.
8. Passing verification does not automatically make a feature production-ready.

## Verification Records

Each verification should document:

- **Feature:** Name of the AI-generated feature.
- **Skills:** Programming concepts being tested.
- **Challenges:** Exercises assigned.
- **Results:** Pass or fail for each challenge.
- **Learning Gaps:** Skills requiring improvement.
- **Status:** Pending, In Progress, Passed, or Needs Review.
- **Exercise type:** Individual skill check, guided practice, or integration check.

Guided practice and solution-level help do not verify a skill. After solution-level help, use a fresh independent exercise for verification.

## Core Principle

> I automate what I can independently do. I learn what I cannot yet do.

AI should increase my productivity without replacing my engineering competence.

The purpose of verification is to prove transferable skills, not to repeatedly recreate software that AI has already generated.