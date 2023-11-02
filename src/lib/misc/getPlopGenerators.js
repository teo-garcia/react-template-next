/**
 * Returns an array of actions that can be used to generate files
 * based on the specified type.
 *
 * @param {string} type - The type of the component to generate.
 * @returns {Array<Object>} - An array of actions that can be used to generate files.
 */
const getActionsByType = (type) => {
  const dirName = `${type}s`
  return [
    {
      type: 'add',
      path: `src/${dirName}/{{pascalCase name}}/{{pascalCase name}}.tsx`,
      templateFile: 'templates/component.jsx.hbs',
    },
    {
      type: 'add',
      path: `src/${dirName}/{{pascalCase name}}/{{pascalCase name}}.module.css`,
      templateFile: 'templates/component.css.hbs',
    },
    {
      type: 'add',
      path: `src/${dirName}/{{pascalCase name}}/{{pascalCase name}}.test.tsx`,
      templateFile: 'templates/component.test.hbs',
    },
  ]
}

/**
 * Returns an object that represents a generator for creating a new
 * React component of the specified type.
 *
 * @param {string} type - The type of the component to generate.
 * @returns {Object} - An object that represents a generator.
 */
const getPlopGenerators = (type) => {
  return {
    description: `Create a new React ${type} 🚀`,
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: `What is the name of the new ${type}? 🚀`,
        validate: (value) => !!value || 'Name is required ℹ️',
      },
    ],
    actions: getActionsByType(type),
  }
}

module.exports = {
  getPlopGenerators,
}
