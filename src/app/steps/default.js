/**
 * Step 4
 * Default priority in run loop
 */

export default function () {
  this.composeWith('node:app', {
      options: {
        travis: false,
        babel: false,
        boilerplate: false,
        gulp: false,
        eslint: false,
        coveralls: false
      }
    },
    {local: require.resolve('generator-node/generators/app')}
  );
};
