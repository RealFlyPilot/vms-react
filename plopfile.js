export default plop => {
  // controller generator
  plop.setGenerator('component', {
    description: 'application component scaffold',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/apps/AccelerationHQ/components/{{name}}.js'
        // templateFile: 'plop-templates/controller.hbs'
      }
    ]
  })
}
