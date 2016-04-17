/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

export default function () {
  const env = this.env

  env.lookup(() => {
    env.run('trails:model ' + this['api-name'])
    env.run('trails:controller ' + this['api-name'])
  })

}
