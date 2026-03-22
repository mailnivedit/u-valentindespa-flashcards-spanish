# Development workflow (team + Cursor rules)

This project uses `.cursor/rules` to align humans and the assistant on three practices.

## 1. Commenting (`comment-code-explanation.mdc`)

- Prefer **why** over restating the code on non-obvious logic.
- Document public components and data shapes (see `src/data/flashcards.ts`, study flow).

## 2. Run tests after changes (`run-tests-after-changes.mdc`)

After meaningful edits, run the E2E suite and fix failures before considering the work done:

```bash
npm run test:e2e
```

Requires a dev server on the port in `playwright.config.ts` (default `5173`), or let Playwright start it per config.

## 3. Propose tests for new behavior (`propose-new-tests.mdc`)

When adding user-visible behavior (routes, study/quiz flows, stats):

- Extend `tests/e2e.spec.ts`, or add a new spec under `tests/`.
- Prefer one focused test per journey or edge case.

Ask explicitly if new flows should be covered before merging when scope is unclear.
