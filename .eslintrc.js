module.exports = {
  // The 'extends' array specifies the base configurations and plugin configurations to build upon
  extends: [
    // Use ESLint's recommended rules as a starting point
    'eslint:recommended',
    // Use recommended TypeScript-specific rules
    'plugin:@typescript-eslint/recommended',
    // Use Next.js specific rules, including Core Web Vitals
    'next/core-web-vitals',
    // Use recommended accessibility rules for JSX
    'plugin:jsx-a11y/recommended',
    // Use recommended rules for Tailwind CSS
    'plugin:tailwindcss/recommended',
    // Use Jest-specific recommended rules
    'plugin:jest/recommended',
    // Use recommended rules for Testing Library with React
    'plugin:testing-library/react',
    // Use Playwright-specific recommended rules
    'plugin:playwright/playwright-test',
    // Use import plugin's rules for detecting errors
    'plugin:import/errors',
    // Use import plugin's rules for warnings
    'plugin:import/warnings',
    // Use import plugin for TypeScript support
    'plugin:import/typescript',
  ],

  // The 'plugins' array lists additional ESLint plugins to use
  plugins: ['import'],

  // The 'rules' object allows custom configuration of rules
  rules: {
    // Enforce import order
    'import/order': [
      'error',
      {
        // Define the order of import groups
        groups: [
          'builtin', // Node.js built-in modules
          'external', // npm packages
          'internal', // Internal modules
          'parent', // Parent directory imports
          'sibling', // Same directory imports
          'index', // Index imports
          'object', // Object imports
          'type', // Type imports
        ],
        // Add new lines between import groups
        'newlines-between': 'always',
        // Sort imports alphabetically within each group
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    // Enforce no duplicate imports
    'import/no-duplicates': 'error',
  },

  // The 'settings' object is used to configure plugins
  settings: {
    'import/resolver': {
      // Use TypeScript resolver for import plugin
      typescript: {},
    },
  },
}
