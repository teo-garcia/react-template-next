# React Template Next

Modern Next.js application template with TypeScript, Tailwind CSS, and
comprehensive testing setup.

## Requirements

- Node 22+
- pnpm 9

## Installation

```bash
npx degit teo-garcia/react-template-next my-app
cd my-app
pnpm install
pnpm dev
```

## Features

- **Next.js** - Server-side rendering and static site generation
- **React** - Component-based UI library
- **Tailwind CSS** - Utility-first styling
- **TypeScript** - Static type checking
- **Vitest** - Unit testing with Testing Library
- **MSW** - API mocking
- **ESLint + Prettier** - Code quality and formatting
- **Husky + Lint Staged** - Pre-commit hooks

## Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Production build
pnpm start        # Run production build
pnpm test         # Run unit tests
pnpm lint:es      # ESLint check
pnpm lint:ts      # TypeScript type check
pnpm format       # Format code with Prettier
```

## License

MIT
