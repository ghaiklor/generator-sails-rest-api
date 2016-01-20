export default function (data) {
  let response = {data};

  this.res.status(200);
  this.res.jsonx(response);
}
