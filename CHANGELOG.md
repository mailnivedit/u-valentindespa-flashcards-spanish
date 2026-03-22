# Changelog

All notable changes to this project are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html) where applicable.

## [Unreleased]

### Added

- `docs/SESSION.md` — handoff notes for new chats and long-context workflows
- `docs/development-workflow.md` — Cursor rules alignment (comments, tests, proposing new tests)
- `npm run test:e2e` and `npm run test:e2e:ui` scripts (Playwright)
- Playwright E2E suite: `tests/e2e.spec.ts` (home + study flow for animals category)
- Spanish Flashcards app: Vite + React + TypeScript, routing, static flashcard data (`src/data/flashcards.ts`)
- Study mode: category selection, flip cards, Right/Wrong, session complete, wrong-answer IDs in state
- `.cursor/rules` updates with links to example files and `npm run test:e2e`
- **GitHub issues** (optional): e.g. [#1](https://github.com/mailnivedit/u-valentindespa-flashcards-spanish/issues/1) (smoke test issue), [#2](https://github.com/mailnivedit/u-valentindespa-flashcards-spanish/issues/2) (Phase 3 — first unresolved TODO: Redo Wrong Cards button); can be created/managed via **GitHub MCP** in Cursor

### Changed

- README: project description, scripts, workflow links, pointers to `docs/SESSION.md` and `CHANGELOG.md`
- Refactor: JSDoc/comments on core pages and components; `Study` split into clearer subcomponents
- `docs/SESSION.md` & `CHANGELOG.md`: refreshed to document MCP/issue workflow and `.cursor/mcp.json` handling

### Security

- `.cursor/mcp.json` added to `.gitignore` — local MCP config may contain API tokens; prefer env-based or Cursor-managed secrets

### Pending (see `docs/downloaded_resource/TODO.md`)

- Phase 3: Redo wrong cards (tracked on GitHub as [#2](https://github.com/mailnivedit/u-valentindespa-flashcards-spanish/issues/2) when using issues)
- Phase 4: Quiz (MCQ / fill-in-the-blank)
- Phase 5: Statistics and optional persistence

---

## Earlier history

For commit-level history, use:

```bash
git log --oneline
```

Remote: `https://github.com/mailnivedit/u-valentindespa-flashcards-spanish.git` (branch `master`).
