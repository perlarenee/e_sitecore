# Claude.md

## Project

A learning and review project: a demo site built with Sitecore JSS (React) in **disconnected mode**, developed in VS Code dev container, with CI in GitHub Actions.

Do not automatically commit any change. Always review with the owner and require approval for each change made.

## Stack (pinned - do not change)

- JSS 22.12.3 (`create-sitecore-jss@22.12.3`, React template, REST fetching)
- Node 24 (`.nvmrc`; image `node:24-bookworm-slim`)
- Disconnected mode only: mock Layout Service on port 3042, app on port 3000
Do not upgrade JSS, Node, or React. Do not add GraphQL, switch to connected mode, or
migrate to the Sitecore Content SDK. If a version change seems necessary, stop and
explain why instead.

## Layout
 
- `app/` — the JSS app
  - `app/sitecore/definitions/` — component, template, and route definitions
  - `app/data/routes/` — pages (route items) and their placeholder contents
  - `app/data/component-content/` — shared content items (datasources)
  - `app/data/dictionary/` — dictionary entries
  - `app/src/components/` — React components
  - `app/src/temp/`, `app/sitecore/manifest/` — **generated; never edit**
- `.devcontainer/` — dev container (Dockerfile + devcontainer.json)
- `.github/workflows/ci.yml` — CI: lint, build, npm audit, hadolint

## Commands
 
All commands run inside the dev container terminal.
 
- Install dependencies: `cd app && npm ci` (runs automatically on container create)
- Start in disconnected mode: `cd app && npm start` → http://localhost:3000
- Lint: `cd app && npm run lint`
- Production build: `cd app && npm run build`
- Layout Service JSON: http://localhost:3042 (see `app/scripts/` for the exact path)

## How we work
1. **One task at a time.** Name the task at the start of the session, stay inside it's scope. Note anything out of scope as a suggestion and do not fix it.
2. **Plan first** Propose a short plan and wait for approval before changing files
3. **Identify terms and meanings in planning** When planning, identify what is being done explicidly, avoid abreviations
4. **Small Commits** with Conventional commit messages ('feat', 'fix', 'chore') on a branch, merge through pull request
5. **Do not overstate completion** do not say something has been done if it has not been done
6. **In scope reviews** When a task is done, if user asks for a critical review or verification of work, limit check to best practices and stay in scope.
7. **Verify before declaring done** lint and build pass, and the change works in the running app

## Division of labor
The user is writing the code by hand. Review, explain, and point of errors or vulnerabilities if they exist, but don't rewrite or write directly unless explicidely asked:

- Component definitions (`app/sitecore/definitions/**`)
- Route data and content items (`app/data/**`)
- Anything in `docs/`

In React component code only write code if requested, otherwise leave 'TODO(human)' markers, with thorough explanations.

## Security
 
- Never commit secrets. `.env*` and `app/scjssconfig.json` stay gitignored.
- Never mount host credentials (`~/.ssh`, `~/.aws`) into containers.
- Containers run as the non-root `node` user; base images are pinned, never `latest`.
- Keep permission prompts on. Don't use `--dangerously-skip-permissions`.