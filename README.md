<div align="center">

# React Template Next

**Production-ready Next.js starter with TypeScript, Tailwind CSS, and modern
testing**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node](https://img.shields.io/badge/Node-24+-339933?logo=node.js&logoColor=white)](https://nodejs.org)
[![pnpm](https://img.shields.io/badge/pnpm-10+-F69220?logo=pnpm&logoColor=white)](https://pnpm.io)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev)

Part of the [@teo-garcia/templates](https://github.com/teo-garcia/templates)
ecosystem

</div>

---

## Features

| Category         | Technologies                                  |
| ---------------- | --------------------------------------------- |
| **Framework**    | Next.js 16 with App Router and Turbopack      |
| **UI**           | React 19, Tailwind CSS 4, Lucide Icons        |
| **Data**         | TanStack Query for server state               |
| **Type Safety**  | TypeScript with strict mode                   |
| **Testing**      | Vitest, Testing Library, Playwright, MSW      |
| **Code Quality** | ESLint, Prettier, Husky, lint-staged          |
| **Shared**       | @teo-garcia/react-shared components and hooks |

---

## Requirements

- Node.js 24+
- pnpm 10+

---

## Quick Start

Clone the template, install dependencies, copy `.env.example` to `.env`, and run
the dev server on port 3000.

---

## Scripts

| Command             | Description                             |
| ------------------- | --------------------------------------- |
| `pnpm dev`          | Start development server with Turbopack |
| `pnpm build`        | Create production build                 |
| `pnpm start`        | Run production server                   |
| `pnpm test`         | Run unit tests                          |
| `pnpm test:browser` | Run browser tests                       |
| `pnpm test:e2e`     | Run Playwright E2E tests                |
| `pnpm coverage`     | Run tests with coverage                 |
| `pnpm check`        | Run lint, typecheck, format, and tests  |
| `pnpm lint:es`      | Lint and fix with ESLint                |
| `pnpm lint:ts`      | TypeScript type checking                |
| `pnpm format`       | Format with Prettier                    |

---

## Project Structure

| Path              | Purpose                     |
| ----------------- | --------------------------- |
| `app/`            | Next.js App Router pages    |
| `app/components/` | Shared UI components        |
| `app/lib/`        | Configuration and utilities |
| `public/`         | Static assets               |
| `e2e/`            | Playwright E2E tests        |

---

## Shared Configs

| Package                              | Role                |
| ------------------------------------ | ------------------- |
| `@teo-garcia/eslint-config-shared`   | ESLint rules        |
| `@teo-garcia/prettier-config-shared` | Prettier formatting |
| `@teo-garcia/tsconfig-shared`        | TypeScript settings |
| `@teo-garcia/vitest-config-shared`   | Test configuration  |
| `@teo-garcia/react-shared`           | React primitives    |

---

## Related Templates

| Template                     | Description             |
| ---------------------------- | ----------------------- |
| `react-template-rr`          | React Router + Vite SPA |
| `react-native-template-expo` | Expo mobile app         |
| `nest-template-monolith`     | NestJS backend          |
| `nest-template-microservice` | NestJS microservice     |
| `fastapi-template-monolith`  | FastAPI backend         |

---

## License

MIT

---

<div align="center">
  <sub>Built by <a href="https://github.com/teo-garcia">teo-garcia</a></sub>
</div>
