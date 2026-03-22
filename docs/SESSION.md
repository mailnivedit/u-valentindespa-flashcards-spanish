# Session handoff (Spanish Flashcards)

> **Purpose:** Portable summary for new chats when context is large (~70%+).  
> **Not a substitute for:** Cursor’s own chat history (stored by the app, not as repo files).

## Project

- **Stack:** Vite + React + TypeScript, `react-router-dom`, Playwright E2E.
- **Scope docs:** `docs/downloaded_resource/specification.md`, `docs/downloaded_resource/TODO.md`.
- **Remote:** `origin` → `https://github.com/mailnivedit/u-valentindespa-flashcards-spanish.git` (branch **`master`**).

## Implemented (high level)

- **Phase 1:** App shell, static flashcard data, home navigation (Study / Quiz / Stats).
- **Phase 2:** Category selection, `Study` flow with flip + Right/Wrong, session complete, wrong IDs tracked in state.
- **E2E:** `tests/e2e.spec.ts` — home smoke + full animals study session.
- **Refactor:** Comments/JSDoc on core files; `Study` split into smaller UI pieces.
- **Workflow:** `docs/development-workflow.md`, `npm run test:e2e` / `test:e2e:ui`, README top section; `.cursor/rules` cross-linked to commands and examples.

## Not implemented yet (per TODO)

- Phase 3: Redo wrong cards  
- Phase 4: Quiz MCQ / FIB  
- Phase 5: Stats + persistence  

`Quiz.tsx` / `Stats.tsx` are placeholders; `/quiz` still uses `CategorySelectionPage` only.

## Commands

```bash
npm run dev
npm run build
npm run test:e2e
```

## New chat prompt (paste this)

```
Continue the Spanish Flashcards app in this repo. Read docs/SESSION.md, docs/downloaded_resource/TODO.md, and README.md. Follow .cursor/rules. Run npm run test:e2e after code changes. Next priority: [Phase 3 redo / Phase 4 quiz / your choice].
```

## Note on “chat files”

Chats are **not** stored as a folder inside the repo. Project-only AI config lives under **`.cursor/rules/`**. Full conversation history is in **Cursor’s app data**; use **`docs/SESSION.md`** (this file) for a git-tracked handoff.

**Human-readable release-style notes:** see root [`CHANGELOG.md`](../CHANGELOG.md).

---

*Last updated from session covering Phases 1–2, E2E, refactor, rules alignment, and push to GitHub.*
