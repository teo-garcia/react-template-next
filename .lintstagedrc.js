module.exports = {
  '**/*.{js,jsx,ts,tsx}': [
    'yarn prettier --write',
    'yarn lint:js --fix',
    'yarn test:unit --passWithNoTests',
  ],
  '**/*.css': ['yarn lint:css --fix'],
}
