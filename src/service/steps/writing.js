/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

import Util from '../../app/util'

const SOURCE_SERVICE = 'Service.js'
const SOURCE_SERVICE_TEST = 'Service.test.js'

const DESTINATION_INDEX = 'api/services/index.js'
const DESTINATION_SERVICE = name => `api/services/${name}Service.js`;
const DESTINATION_SERVICE_TEST = name => `test/unit/services/${name}Service.test.js`;

export default function () {
  Util.patchConflicter()

  let name = (this['service-name'].charAt(0).toUpperCase() + this['service-name'].slice(1)).replace(/(\w+)Service/, '$1');
  let fileName = `${name}Service`
  let indexPath = this.destinationPath(DESTINATION_INDEX)

  this.template(serviceTemplate, DESTINATION_SERVICE(name), {name, answers: this.answers, fileName});
  this.template(testTemplate, DESTINATION_SERVICE_TEST(name), {name, answers: this.answers, fileName});

  if (!this.fs.exists(this.destinationPath(DESTINATION_INDEX))) {
    return this.fs.write(this.destinationPath(DESTINATION_INDEX), Util.getRequireStatement(fileName))
  }

  if (Util.hasRequireStatement(fileName, this.fs.read(indexPath))) {
    this.log.identical(DESTINATION_INDEX);
    return
  }

  let indexContents = this.fs.read(indexPath)
  let updatedIndexFile = Util.getUpdatedIndexFile(fileName, indexContents)

  this.fs.write(indexPath, updatedIndexFile)
};
