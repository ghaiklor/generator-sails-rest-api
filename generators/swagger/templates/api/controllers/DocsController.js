export function index(req, res) {
  res.status(200).jsonx(sails.hooks.swagger.doc);
}
