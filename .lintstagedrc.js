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

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand, buildJestCommand],
};
