/**
 * Step 7
 * Where installation are run (npm, bower)
 */

const PASSPORT_DEPENDENCIES = {
  local: ['passport-local'],
  jwt: ['passport-jwt'],
  facebook: ['passport-facebook-token'],
  twitter: ['passport-twitter-token'],
  vkontakte: ['passport-vkontakte-token'],
  foursquare: ['passport-foursquare-token'],
  github: ['passport-github-token'],
  instagram: ['passport-instagram-token'],
  paypal: ['passport-paypal-token'],
  reddit: ['passport-reddit-token'],
  soundcloud: ['passport-soundcloud-token'],
  windowsLive: ['passport-windows-live-token'],
  twitch: ['passport-twitch-token'],
  yandex: ['passport-yandex-token'],
  amazon: ['passport-amazon-token'],
  googlePlus: ['passport-google-plus-token'],
  yahoo: ['passport-yahoo-token']
};

export default function () {
  let passportDependencies = Object.keys(PASSPORT_DEPENDENCIES).reduce((deps, strategy) => deps.concat(PASSPORT_DEPENDENCIES[strategy]), []);

  this.npmInstall(passportDependencies, {save: true});
};
