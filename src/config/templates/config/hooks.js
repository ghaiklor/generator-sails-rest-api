/**
 * A hook is a Node module that adds functionality to the Sails core.
 *
 * Here you can specify which hooks need to be loaded and which ones not.
 */

export default {
  hooks: {
    csrf: false,
    grunt: false,
    i18n: false,
    pubsub: false,
    session: false,
    sockets: false,
    views: false
  }
}
