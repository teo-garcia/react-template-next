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
