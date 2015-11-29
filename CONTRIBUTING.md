# Contributing

At this page we explain how you can contribute to our project.

## Creating an issue

If you have any proposal or want to report about a bug, feel free to create an issue.
We will answer as soon as possible.

## Get the project

### Clone a repository

Clone a repository to your computer.

```bash
git clone https://github.com/ghaiklor/generator-sails-rest-api.git # via HTTPS
git clone git@github.com:ghaiklor/generator-sails-rest-api.git # via SSH
```

### Install dependencies

We are using `npm` for manage dependencies.
So all development dependencies is declared into `package.json` and you can install it simply call `npm install`.

```bash
cd generator-sails-rest-api
npm install
```

### Run generator-sails-rest-api locally

When you clone the repository, you can link this repository as global npm module in your system.
Then check if this is linked up by executing `npm -g list --depth=0`.
If everything is correct, you will see path to your cloned repository.
After linking, you can call `yo sails-rest-api` and run generator locally.

```bash
git clone https://github.com/ghaiklor/generator-sails-rest-api.git
cd generator-sails-rest-api
sudo npm link
yo sails-rest-api
```

## Branch explanation

Our repository has two main branches:

1. [master](https://github.com/ghaiklor/generator-sails-rest-api/tree/master "Master Branch")
2. [dev](https://github.com/ghaiklor/generator-sails-rest-api/tree/dev "Development Branch")

We are using git workflow, which are nice described [here in Russian](http://habrahabr.ru/post/106912/ "Thanks to Андрей Хитрин aka zloddey") and [here in English](http://nvie.com/posts/a-successful-git-branching-model/ "Thanks to Vincent Driessen").

Better to read those articles, before you make a pull request, if you are not familiar with that.

In a nutshell, all pull requests must go into `dev` branch and only into `dev` branch.

## Publishing

`semantic-release` is a package that allows to publish to npm after tests completed successfully right from the CI server (from `master` branch).
This flow is fully configured, so you can just contribute to the project, everything else `semantic-release` will do.

## Tests

We are using Mocha for testing.
All test cases located into `test` folder.

When you create new feature or fix some bug, you **MUST** write test case for it in `test` folder.

For running tests just call `npm test`.

```shell
npm test
```
