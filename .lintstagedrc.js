module.exports = {
  '**/*.{js,jsx,ts,tsx}': [
    'pnpm prettier --write',
    'pnpm lint:js --fix',
    'pnpm test:unit --passWithNoTests',
  ],
}
