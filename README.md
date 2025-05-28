<!-- ![README.md banner](./README.png) -->

![Package License](https://img.shields.io/github/license/teo-garcia/react-template-next)
![Package Version](https://img.shields.io/github/package-json/v/teo-garcia/react-template-next)

# React Template Next

Start building modern web applications using React and Next.js.

## Requirements

- `Node 22+`
- `Git 2+`
- `pnpm 9`

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

- Next for server-side rendering and static site generation.
- React for building user interfaces.
- Tailwind for utility-first CSS.
- Typescript for static type checking.
- ESLint for linting and Prettier for code formatting.
- Husky for Git hooks and Lint Staged for running linters on staged files.
- Jest for unit testing and Testing Library React for testing React components.
- Playwright for end-to-end testing.
- MSW for API mocking.

## Environment variables

Use `NEXT_PUBLIC_API_BASE_URL` to set a base URL for API requests. The value
is exported as `apiBaseUrl` from `@/lib/misc/environment` and can be reused
throughout the codebase. If the variable is not defined, requests fall back to
relative paths such as `/api/healthcheck`.
