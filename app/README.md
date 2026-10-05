# JSS Disconnected Sitecore

A small practice/review app built with **Site core JSS(React)** in **disconnected mode**, in a VS Code dev container, with Claude constrained to the container and some initial instructions, and a CI pipeline in GitHub Actions. 

I built this to explore Sitecore structure without having access to a full Sitecore license or database, taking advantage of the mock layout service that Sitecore's headless JSS provides. 

### Prerequisites
- [Git](https://git-scm.com/)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (or Docker Engine on Linux)
- [VS Code](https://code.visualstudio.com/) with the
  [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension
- **Windows only:** WSL 2 with Ubuntu. Clone the repo inside Ubuntu (for example `~/projects`),
  not on the Windows drive, for faster file access and reliable hot reload.
Node and npm are **not** required on your machine. They come from the container.

## Getting started
 
```bash
git clone https://github.com/perlarenee/e_sitecore.git
cd e_sitecore
code .
```
 
In VS Code, run **Dev Containers: Reopen in Container** (Command Palette, or click the
remote indicator in the bottom-left corner). The first build takes a few minutes, and
dependencies install automatically.
 
Then, in the VS Code terminal:
 
```bash
cd app
npm start
```
 
- App: http://localhost:3000
- Mock Layout Service: http://localhost:3042

## Versions chosen
| | Version | Why |
|---|---|---|
| JSS | 22.12.3 | Pairs with Sitecore XP 10.4; newest 10.x-era line that still documents disconnected mode for React |
| Node | 24 | Required by JSS 22.12.x (`engines`); current LTS |
| Base image | `node:24-bookworm-slim` | Pinned Node major, Debian 12, minimal footprint |
 
Why:
- **Compatibility table.** Sitecore's modules compatibility table maps JSS 21.x to XP 10.3
- **Matching versions.** The JSS SDK version must match the Sitecore Headless Rendering module
  installed on the Sitecore server (JSS 22 ↔ Headless Rendering 22).
- **npm dist-tags.** `latest` points to 23.0.0 (the XP 10.5 line), so the version is pinned
  explicitly. The `ver22` tag points to 22.12.3, the maintainers' stable 22.x release.