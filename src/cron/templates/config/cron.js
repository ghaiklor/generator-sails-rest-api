/**
 * Cron configuration where you can define cron tasks with range time and callbacks.
 * Look here for detailed examples https://github.com/ghaiklor/sails-hook-cron
 *
 * @example
 * export default {
 *   cron: {
 *     jobExample: {
 *       schedule: '* * * * * *',
 *       onTick: () => doSomething(),
 *       onComplete: () => doSomething(),
 *       start: true,
 *       timezone: 'Ukraine/Kiev',
 *       context: undefined
 *     }
 *   }
 * }
 */

export default {
  cron: {}
};
