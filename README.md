![README.md banner](./README.png)

![Package License](https://img.shields.io/github/license/teo-garcia/react-template-next)
![Package Version](https://img.shields.io/github/package-json/v/teo-garcia/react-template-next)

# React Template Next

Start building modern web applications using React and Next.js.

## Requirements

- `Node 18+`
- `Git 2+`
- `pnpm 8`

## Installation

1. Get the template using `npx degit`:

```bash
  npx degit teo-garcia/react-template-next my_project
```

2. Install the dependencies:

```bash
  pnpm install
```

3. Run the project:

```bash
  pnpm dev
```

## Tools

- Next 14.
- React 18.
- Tailwind 3.
- Typescript 4.
- ESLint 8 + Prettier 3.
- Husky 8 + Lint Staged 15.
- Jest 29 + Testing Library React 14.
- Playwright 1.
- MSW 2.

## Commands

| **Command**             | **Description**                                 |
| ----------------------- | ----------------------------------------------- |
| dev                     | Run `dev:web`.                                  |
| build                   | Run `build:web`.                                |
| dev:web                 | Run `next` in `DEV` mode.                       |
| build:web               | Run `next` in `PROD` mode.                      |
| start:web               | Run `next` server (build required).             |
| test:unit               | Run `jest`.                                     |
| test:e2e                | Run `dev`, and `playwright`.                    |
| lint:css                | Lint CSS files.                                 |
| lint:js                 | Lint JS files.                                  |
| create:component <name> | Creates a component at `src/components/<name>`. |
| create:feature <name>   | Creates a component at `src/features/<name>`.   |
