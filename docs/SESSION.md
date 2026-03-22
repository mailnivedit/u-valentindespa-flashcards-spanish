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
- **Workflow:** `docs/development-workflow.md`, `npm run test:e2e` / `npm run test:e2e:ui`, README top section; `.cursor/rules` cross-linked to commands and examples.
- **Docs:** Root [`CHANGELOG.md`](../CHANGELOG.md) and this file for handoff; README links to both.
- **Git:** `.cursor/mcp.json` is **gitignored** (local MCP config; may contain tokens — do not commit).

## GitHub issues (optional tracking)

Issues can be created via **GitHub MCP** in Cursor (`issue_write`, server `user-github` in this environment). Examples from this project thread:

| Issue | Title (summary) |
|-------|------------------|
| [#1](https://github.com/mailnivedit/u-valentindespa-flashcards-spanish/issues/1) | Test |
| [#2](https://github.com/mailnivedit/u-valentindespa-flashcards-spanish/issues/2) | [Phase 3] Redo Wrong Cards button — first unresolved TODO item |

Use issues to track **Phase 3+** work alongside `docs/downloaded_resource/TODO.md`.

## Not implemented yet (per TODO)

- Phase 3: Redo wrong cards (GitHub: [#2](https://github.com/mailnivedit/u-valentindespa-flashcards-spanish/issues/2) aligns with first unchecked item)  
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
Continue the Spanish Flashcards app in this repo. Read docs/SESSION.md, CHANGELOG.md, docs/downloaded_resource/TODO.md, and README.md. Follow .cursor/rules. Run npm run test:e2e after code changes. Next priority: Phase 3 redo (see GitHub issue #2) or continue from TODO.
```

## Note on “chat files”

Chats are **not** stored as a folder inside the repo. Project-only AI config lives under **`.cursor/rules/`** (and local MCP under **`.cursor/mcp.json`**, ignored by git). Full conversation history is in **Cursor’s app data**; use **`docs/SESSION.md`** (this file) for a git-tracked handoff.

**Human-readable release-style notes:** see root [`CHANGELOG.md`](../CHANGELOG.md).

---

*Last updated: SESSION + CHANGELOG refreshed for MCP/GitHub issues, `.cursor/mcp.json` gitignore, and handoff links.*
