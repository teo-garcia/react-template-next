export default {
  '**/*.{js,jsx,ts,tsx}': ['prettier --write', 'eslint --fix'],
  '**/*.{json,md,yml,yaml}': ['prettier --write'],
}
