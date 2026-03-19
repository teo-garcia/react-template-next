<div align="center">

# React Template Next

**Production-ready Next.js starter with TypeScript, Tailwind CSS, and modern
testing**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node](https://img.shields.io/badge/Node-22+-339933?logo=node.js&logoColor=white)](https://nodejs.org)
[![pnpm](https://img.shields.io/badge/pnpm-9+-F69220?logo=pnpm&logoColor=white)](https://pnpm.io)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev)

Part of the [@teo-garcia/templates](https://github.com/teo-garcia/templates)
ecosystem

</div>

---

## Features

| Category         | Technologies                             |
| ---------------- | ---------------------------------------- |
| **Framework**    | Next.js 16 with App Router and Turbopack |
| **UI**           | React 19, Tailwind CSS 4, Lucide Icons   |
| **Data**         | React Query for server state management  |
| **Type Safety**  | TypeScript with strict mode              |
| **Testing**      | Vitest + Testing Library + MSW           |
| **Code Quality** | ESLint, Prettier, Husky, lint-staged     |

## Requirements

- Node.js 22+
- pnpm 9+

## Quick Start

```bash
# Clone the template
npx degit teo-garcia/react-template-next my-app
cd my-app

# Install dependencies
pnpm install

# Configure environment
cp .env.example .env

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

## Environment Setup

The template ships with a root `.env.example`. Copy it to `.env` before local
development and adjust values as needed for your environment.

## Project Structure

```
app/
|-- api/                    # API routes
|   `-- healthcheck/        # Health check endpoint
|-- components/             # Shared UI components
|-- providers/              # React context providers
|-- config/                 # App configuration
|-- layout.tsx              # Root layout
`-- page.tsx                # Home page
```

## Scripts

| Command              | Description                             |
| -------------------- | --------------------------------------- |
| `pnpm dev`           | Start development server with Turbopack |
| `pnpm build`         | Create production build                 |
| `pnpm start`         | Run production server                   |
| `pnpm test`          | Run unit tests                          |
| `pnpm test:browser`  | Run browser tests                       |
| `pnpm coverage`      | Run tests with coverage output          |
| `pnpm check`         | Run lint, typecheck, format, and tests  |
| `pnpm lint:es`       | Lint and fix with ESLint                |
| `pnpm lint:es:check` | Check ESLint without fixing             |
| `pnpm lint:ts`       | TypeScript type checking                |
| `pnpm format`        | Format with Prettier                    |
| `pnpm format:check`  | Check formatting                        |

## Shared Configs

This template uses standardized configurations from the ecosystem:

- [`@teo-garcia/eslint-config-shared`](https://github.com/teo-garcia/eslint-config-shared) -
  ESLint rules
- [`@teo-garcia/prettier-config-shared`](https://github.com/teo-garcia/prettier-config-shared) -
  Prettier formatting
- [`@teo-garcia/tsconfig-shared`](https://github.com/teo-garcia/tsconfig-shared) -
  TypeScript settings
- [`@teo-garcia/vitest-config-shared`](https://github.com/teo-garcia/vitest-config-shared) -
  Test configuration
- [`@teo-garcia/react-shared`](https://github.com/teo-garcia/react-shared) -
  Shared React utilities

## Related Templates

| Template                                                                               | Description             |
| -------------------------------------------------------------------------------------- | ----------------------- |
| [react-template-rr](https://github.com/teo-garcia/react-template-rr)                   | React Router + Vite SPA |
| [nest-template-monolith](https://github.com/teo-garcia/nest-template-monolith)         | NestJS backend monolith |
| [nest-template-microservice](https://github.com/teo-garcia/nest-template-microservice) | NestJS microservice     |

## License

MIT

---

<div align="center">
  <sub>Built by <a href="https://github.com/teo-garcia">teo-garcia</a></sub>
</div>
