module.exports = {
  '**/*.{js,jsx,ts,tsx}': [
    'bash -c tsc',
    'yarn prettier --write',
    'yarn lint:js --fix',
    'yarn test:unit --passWithNoTests',
  ],
  '**/*.{css}': ['yarn lint:css --fix'],
}
