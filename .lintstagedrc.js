const path = require('path');
const _ = require('lodash');

function getChangedFiles(filenames) {
  return _.map(filenames, (f) => path.relative(process.cwd(), f));
}

function buildEslintCommand(filenames) {
  return `next lint --fix --file ${getChangedFiles(filenames).join(
    ' --file '
  )}`;
}

function buildJestCommand(filenames) {
  return `yarn test --findRelatedTests ${getChangedFiles(filenames)}`;
}

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand, buildJestCommand],
};
