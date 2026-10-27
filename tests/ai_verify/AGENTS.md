# AI verification instructions

Read README.md and skills.json before assigning or reviewing exercises.

1. Inspect the relevant AI-generated feature. Record concrete implementation problems and the transferable skills involved in its problems.md.
2. Read verifiedSkills before choosing exercises. Skip skills already verified, including equivalent skills under different names. Reuse stable skill IDs.
3. Write independent exercises and observable acceptance criteria in exercises.md. Do not supply implementation code or hints unless the user requests them.
4. The user completes each exercise in its own folder under exercises/. The solutions/ folder holds AI-generated reference answers, created only after the user has completed and submitted that exercise. Do not create or modify the user's submitted work unless explicitly asked.
5. Review submitted work against the acceptance criteria. Record pass/fail, evidence, and learning gaps in review.md. Never mark an unsubmitted or unreviewed skill verified.
6. After a demonstrated pass, append an object to skills.json verifiedSkills with id, name, verifiedAt (YYYY-MM-DD), and evidence (relative path to the review). Preserve all existing records. Verify individual skills separately when an exercise covers several.
7. Feature verification requires every required skill to be covered by an existing verified record or a passing review. Code review and testing are still required before integration into main. Do not merge automatically.

The initial empty verifiedSkills array means no verification evidence has been recorded here; it does not mean the user lacks those skills.
