# generator-trails

[![Gitter][gitter-image]][gitter-url]
[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Follow @trailsjs on Twitter][twitter-image]][twitter-url]

Trails Yeoman Generator.

## Usage
```sh
$ yo trails --help

Usage:
  yo trails [options] 

Options:
        --help          # Print the generator's options and usage
        --skip-cache    # Do not remember prompt answers             Default: false
        --skip-install  # Do not automatically install dependencies  Default: false
        --skip-update   # Do not check for generator's updates       Default: false

Generators:

  Create New Api
    yo trails:api <api-name>

  Create New Model
    yo trails:model <model-name>

  Create New Controller
    yo trails:controller <controller-name>

  Create New Policy
    yo trails:policy <policy-name>

  Create New Service
    yo trails:service <service-name>
    
  Install New Trailpacks
    yo trails:trailpack <trailpacks-name> (eg yo trails:trailpack trailpack-repl,trailpack-webpack)
```

## Contributing
We love contributions! In order to be able to review your code efficiently,
please keep the following in mind:

1. Pull Requests (PRs) must include new and/or updated tests, and all tests [must pass](https://travis-ci.org/trailsjs/generator-trails).
2. Use `eslint`! See the `eslintConfig` in [package.json](./package.json).
3. Please [reference the relevant issue](https://github.com/blog/1506-closing-issues-via-pull-requests) in your Pull Request.

## License
[MIT](./LICENSE)

[trails-image]: http://i.imgur.com/amwaQQI.png
[trails-url]: http://trailsjs.io
[npm-image]: https://img.shields.io/npm/v/generator-trails.svg?style=flat-square
[npm-url]: https://npmjs.org/package/generator-trails
[ci-image]: https://img.shields.io/travis/trailsjs/generator-trails/master.svg?style=flat-square
[ci-url]: https://travis-ci.org/trailsjs/generator-trails
[daviddm-image]: http://img.shields.io/david/trailsjs/generator-trails.svg?style=flat-square
[daviddm-url]: https://david-dm.org/trailsjs/generator-trails
[gitter-image]: http://img.shields.io/badge/+%20GITTER-JOIN%20CHAT%20%E2%86%92-1DCE73.svg?style=flat-square
[gitter-url]: https://gitter.im/trailsjs/trails
[twitter-image]: https://img.shields.io/twitter/follow/trailsjs.svg?style=social
[twitter-url]: https://twitter.com/trailsjs
