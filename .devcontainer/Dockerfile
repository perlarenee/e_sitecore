FROM node:24-bookworm-slim

# Tools the dev environment needs that the slim image leaves out
RUN apt-get update \
 && apt-get install -y --no-install-recommends git ca-certificates less procps \
 && rm -rf /var/lib/apt/lists/*

# Claude Code, pinned to an exact version, with auto-updates off
ARG CLAUDE_CODE_VERSION=2.1.289
RUN npm install -g @anthropic-ai/claude-code@${CLAUDE_CODE_VERSION}
ENV DISABLE_AUTOUPDATER=1

# Folder for Claude Code's config, owned by the node user
RUN mkdir -p /home/node/.claude && chown node:node /home/node/.claude

USER node