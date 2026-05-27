# Monorepo Workspace with Vite Frontend and NestJS Backend

## Context

The dailytech application needs to launch as a stylish, client-side React frontend with interactive AI product mockups. Eventually, we will build out registration, sign-in, and database integrations. We want to avoid a massive refactor later when adding a backend, while ensuring the initial frontend is lightweight, SEO-friendly, and deploys easily to Vercel.

## Decision

We chose to initialize the project as an npm workspaces monorepo:
1. **Monorepo Layout**: Use `packages/web` for the frontend and `packages/backend` for the backend (NestJS).
2. **Frontend Build Tool**: Use Vite + React + TypeScript inside `packages/web` to guarantee extremely fast builds and standard static Vercel deployments.
3. **Backend Framework**: Use NestJS in `packages/backend`, stubbed out for now, to establish our API structure early.
4. **Styling**: Use Vanilla CSS for custom, high-fidelity animations, dark cyber-minimalism, and responsive layouts.

## Consequences

- **Pros**: Clear separation of concerns, easy expansion path for NestJS backend APIs, simple client-only build in Vercel.
- **Cons**: Minor setup complexity due to workspace configurations and paths.
