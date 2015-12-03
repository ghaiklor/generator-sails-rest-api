/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

import Util from '../../app/util'

const SOURCE_POLICY = 'Policy.js';
const SOURCE_POLICY_TEST = 'Policy.test.js';

const DESTINATION_INDEX = 'api/policies/index.js'
const DESTINATION_POLICY = name => `api/policies/${name}.js`;
const DESTINATION_POLICY_TEST = name => `test/integration/policies/${name}.test.js`;

export default function () {
  Util.patchConflicter()

  let name = (this['policy-name'].charAt(0).toUpperCase() + this['policy-name'].slice(1)).replace(/(\w+)Policy$/, '$1');
  let fileName = `${name}`
  let indexPath = this.destinationPath(DESTINATION_INDEX)

  this.template(SOURCE_POLICY, DESTINATION_POLICY(name), {name, fileName, answers: this.answers});
  this.template(SOURCE_POLICY_TEST, DESTINATION_POLICY_TEST(name), {name, fileName});

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
