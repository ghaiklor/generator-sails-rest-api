module.exports = [{
  type: 'list',
  name: 'services:location:provider',
  message: 'Which type of location providers you want to use',
  default: 'Google',
  choices: [
    'Google',
    'FreeGeoIP',
    'DataScienceToolkit',
    'OpenStreetMap',
    'MapQuest',
    'OpenMapQuest',
    'Agol',
    'TomTom',
    'NominatimMapQuest',
    'OpenCage',
    'SmartyStreets',
    'GeoCodio',
    'Yandex'
  ]
}];
