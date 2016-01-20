import _ from 'lodash';
import actionUtil from 'sails/lib/hooks/blueprints/actionUtil';

export default function (req, res) {
  let Model = actionUtil.parseModel(req);

  res.ok();
};
