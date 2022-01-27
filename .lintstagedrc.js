const path = require('path');
const _ = require('lodash');

function getChangedFiles(filenames) {
  return _.map(filenames, (f) => path.relative(process.cwd(), f));
}

function buildEslintCommand(filenames) {
  return `yarn lint --fix --file ${getChangedFiles(filenames).join(
    ' --file '
  )}`;
}

function buildJestCommand(filenames) {
  return `yarn test:unit --findRelatedTests ${getChangedFiles(filenames)}`;
}

function buildPlaywrightCommand() {
  return 'yarn run playwright test';
}

module.exports = {
  '*.{js,jsx,ts,tsx}': [
    buildEslintCommand,
    buildJestCommand,
    buildPlaywrightCommand,
  ],
};
