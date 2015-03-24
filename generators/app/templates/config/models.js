/**
 * Default model configuration
 *
 * Unless you override them, the following properties will be included in each of your models.
 */

module.exports.models = {
  /**
   * Your app's default connection
   * @type {String}
   */
  connection: "<%= answers['database:adapter'].toLowerCase() %>",

  /**
   * How and whether Sails will attempt to automatically rebuild the tables/collections/etc. in your schema
   * Available values is `safe`, `alter` or `drop`
   * @type {String}
   */
  migrate: 'alter'
};
