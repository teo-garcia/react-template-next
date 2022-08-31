![README.md banner](./README.png)

![Package License](https://img.shields.io/github/license/teo-garcia/react-template-next)
![Package Version](https://img.shields.io/github/package-json/v/teo-garcia/react-template-next)

# React Template Next

A faster way to start using Next with Typescript.

## Requirements

- `Node 16+`
- `Git 2+`
- `Yarn 2`

## Installation

1. Copy the repo or use the `gh` tool:

```bash
  gh repo create my-project --private --clone --template teo-garcia/react-template-next
```

2. Install the dependencies:

```bash
  yarn
```

3. Run the project:

```bash
  yarn dev
```

## Features

- Next 12.
- React 18.
- Typescript 4.
- Linting with ESLint + Stylelint + Prettier.
- Git Hooks with Husky + Lint Staged.
- Unit Testing with Jest + RTL.
- E2E Testing with Cypress.

## Commands

| **Command** | **Description**                              |
| ----------- | -------------------------------------------- |
| dev         | Run `dev:web`.                               |
| build       | Run `build:web`.                             |
| dev:web     | Run `next` in `DEV` mode.                    |
| build:web   | Run `next` in `PROD` mode.                   |
| start:web   | Run `next` server (build required).          |
| test:unit   | Run `jest`.                                  |
| test:e2e    | Run `build:web`, `start:web`, and `cypress`. |
| lint:css    | Lint CSS files.                              |
| lint:js     | Lint JS files.                               |
