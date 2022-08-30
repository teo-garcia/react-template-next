![Package License](https://img.shields.io/github/license/teo-garcia/react-template-next)
![Package Version](https://img.shields.io/github/package-json/v/teo-garcia/react-template-next)

![README.md banner](./README.png)

# React Template Next

A faster way to start using Next with Typescript.

## Requirements

- `Node 14+`
- `Git 2+`

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
- Typescript 4.
- Linting with ESLint + Stylelint + Prettier.
- Git Hooks with Husky + Lint Staged.
- Unit Testing with Jest + RTL.
- E2E Testing with Playwright.

## Commands

| **Command** | **Description**                  |
| ----------- | -------------------------------- |
| dev         | Run `dev:web`.                   |
| build       | Run `build:web`.                 |
| dev:web     | Run Next in DEV mode.            |
| build:web   | Run Next in PROD mode.           |
| start:web   | Run Next server (build required) |
| test:unit   | Run Jest                         |
| test:e2e    | Run Playwright                   |
| lint:css    | Lint CSS files.                  |
| lint:js     | Lint JS files.                   |
