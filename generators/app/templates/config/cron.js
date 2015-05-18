var CronJob = require('cron').CronJob;

new CronJob('* * * * * *', function onTick() {
  //TODO: you can fill it with your job
}, null, true);
