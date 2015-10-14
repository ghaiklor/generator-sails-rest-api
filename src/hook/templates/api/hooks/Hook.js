export default function (sails) {
  return {
    configure: () => true,

    defaults: config => config,

    initialize: cb => cb(),

    routes: {
      before: {},
      after: {}
    }
  }
};
