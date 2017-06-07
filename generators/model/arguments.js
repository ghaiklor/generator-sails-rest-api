module.exports = {
  'modelName': {
    type: String,
    required: true,
    desc: 'Model Name',
    banner: 'Model Name'
  },
  'resolverParent': {
    type: String,
    required: false,
    desc: 'Resolver Parent Class',
    banner: 'Resolver Parent Class',
    default: 'Resolver'
  }
}

