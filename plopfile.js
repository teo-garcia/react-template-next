/* Since this code is being run directly with Node.js, we cannot use ES imports.
Instead, we must use CommonJS require statements to load dependencies. */
/* eslint-disable-next-line */
const { getPlopGenerators } = require('./src/lib/tools/getPlopGenerators')

module.exports = (plop) => {
  plop.setGenerator('component', getPlopGenerators('component'))
  plop.setGenerator('feature', getPlopGenerators('feature'))
}
