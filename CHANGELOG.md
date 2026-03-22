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

### Changed

- README: project description, scripts, workflow links, pointer to `docs/SESSION.md`
- Refactor: JSDoc/comments on core pages and components; `Study` split into clearer subcomponents

### Pending (see `docs/downloaded_resource/TODO.md`)

- Phase 3: Redo wrong cards
- Phase 4: Quiz (MCQ / fill-in-the-blank)
- Phase 5: Statistics and optional persistence

---

## Earlier history

For commit-level history, use:

```bash
git log --oneline
```

Remote: `https://github.com/mailnivedit/u-valentindespa-flashcards-spanish.git` (branch `master`).
