/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

import Util from '../../app/util'

const SOURCE_MODEL = `Model.js`;
const SOURCE_MODEL_TEST = `Model.test.js`;

const DESTINATION_INDEX = 'api/models/index.js'
const DESTINATION_MODEL = name => `api/models/${name}.js`;
const DESTINATION_MODEL_TEST = name => `test/unit/models/${name}.test.js`;

export default function () {
  Util.patchConflicter()

  let name = (this['model-name'].charAt(0).toUpperCase() + this['model-name'].slice(1)).replace(/(\w+)Model$/, '$1');
  let fileName = `${name}`
  let indexPath = this.destinationPath(DESTINATION_INDEX)

  this.template(SOURCE_MODEL, DESTINATION_MODEL(name), {name, fileName, answers: this.answers});
  this.template(SOURCE_MODEL_TEST, DESTINATION_MODEL_TEST(name), {name, fileName, answers: this.answers});

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
