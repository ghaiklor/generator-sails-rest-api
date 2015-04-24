# Contributing

At this page we explain how you can contribute to our project.

**Table of Contents**

- [Contributing](#contributing)
  - [Creating issue](#creating-issue)
  - [Get the project](#get-the-project)
    - [Clone repository](#clone-repository)
    - [Install dependencies](#install-dependencies)
    - [Run generator-sails-rest-api locally](#run-generator-sails-rest-api-locally)
  - [Branch explanation](#branch-explanation)
  - [Git workflow](#git-workflow)
    - [Feature/bug branches](#featurebug-branches)
    - [Release branches](#release-branches)
    - [Hotfix branches](#hotfix-branches)
  - [Tests](#tests)
  - [Versions](#versions)

## Creating issue

If you have any proposal or want to report about bug, feel free to create issue.
We don't moderate issues and will answer you as soon as possible.

## Get the project

### Clone repository

Clone repository to your computer.

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
Then check if this linked up by executing `npm -g list --depth=0`.
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

All stable releases will merge into `master` branch.
So if you want get and use last stable release ready for production - use `master` branch.

But, of course, you can use edge version and check out our latest features.
They are may be unstable and not tested, so they are not ready for production.
All those changes and features will merge into `dev` branch.

Other branches it's only helper branches which can close at any time.
In general we have 3 types of branches:

+ Feature branches;
+ Release branches;
+ Hotfix branches;

Advanced description you will read below in "Git workflow" section.

## Git workflow

We are using git workflow, which are nice described [here in Russian](http://habrahabr.ru/post/106912/ "Thanks to Андрей Хитрин aka zloddey") and [here in English](http://nvie.com/posts/a-successful-git-branching-model/ "Thanks to Vincent Driessen").

In general, we are using `master` branch for stable releases (and ONLY stable releases) and `dev` branch for development purposes.

### Feature/bug branches

Let's say you want realize new feature or fix something.
You **MUST** checkout to new branch from `dev` branch.
Created branch **MUST** have name that begins with **feature-...** or **bug-...**.
This name conventions simplify work with many branches and we can got what exactly each branch doing.
When you finish with branch, manually merge feature-branch into `dev`.

```bash
git checkout dev # Checkout to dev branch
git pull # Update dev branch changes

git checkout -b feature-awesome # Create new feature branch
git commit -am "Commit 1" # Commit changes
git commit -am "Commit 2" # Last commit

git checkout dev # Switch back to dev branch
git pull # Update last changes in dev

git merge feature-awesome # Merge your changes into dev branch

git branch -d feature-awesome # And you can delete old branch
git push -u origin dev # Push changes to origin server
```

**_Note_**: If you don't have rights for push\merge into `dev`, create pull request and we accept it ourselves.

### Release branches

When we decide that `dev` branch is ready for release, we are create new branch with **release-...** prefix.
In this branch we update metadata and fix **ONLY** bugs.
When release branch will proceed all last checks and tests, we merge release branch into `master` and `dev`.
And add tag in `master` branch with appropriate release version.

```bash
git checkout dev # Switch to development branch
git pull # Get last changes

git checkout -b release-1.2.0 # Create new release branch

git commit -am "Release version v1.2.0" # Commit changes into release branch
git commit -am "Allows make small changes" # Maybe small changes

git checkout master # Switch to master branch
git merge release-1.2.0 # Merge release branch into master
git tag -a "v1.2.0" master # Add a tag to release commit in master branch

git checkout dev # Switch to dev branch
git merge release-1.2.0 # Merge release changes to dev branch

git branch -d release-1.2.0 # Remove unused release branch

git push -u origin --all # And push all to origin server
git push -u origin --tags # With tags too
```

### Hotfix branches

When some seriously error or bug occurs into stable release (`master`) we make hotfix branch.
Hotfix branch **MUST** begins with **hotfix-...** prefix.
After fixes we merge hotfix branch into `master` and `dev`.
Also increment patch version and publish this hotfix as new version.

```bash
git checkout master # Switch to master branch
git checkout -b hotfix-1.2.1 # Create new hotfix branch

git commit -am "Fix for something" # Critical bugs fixes
git commit -am "Bumped version and build" # Last commit

git checkout master # Switch back to master branch
git merge hotfix-1.2.1 # Merge hotfix branch
git tag -a "v1.2.1" master # Add tag to this commit

git checkout dev # Switch to dev branch
git merge hotfix-1.2.1 # Apply fixes to dev branch too

git branch -d hotfix-1.2.1 # Remove hotfix branch
git push -u origin --all # Push all changes to origin server
git push -u origin --tags # And push tags to origin server
```

## Tests

We are using Mocha for testing.
All test cases located into `test` folder and split like source files split.
For every file in `api/` folder we create appropriate in `test/` folder.

When you create new feature or fix some bug, you **MUST** write test case for it in `test` folder.
For example, you add new feature to `api/services/cipher/BCryptCipher.js`.
After that you need modify `test/services/cipher/BCryptCipher.js` for corresponds to new feature.

For run tests just call `npm test`.

## Versions

We are using "Semantic Versioning".
You can find rules how to use it [here](http://semver.org/).

In general, 4 types of version exists:

1. Pre-release -> `v1.2.3-4`. Pre-release changes only builds number after `-`. I.e `v1.2.3-4` -> `v1.2.3-5`.

2. Patch -> `v1.2.3`. Patch version changes only patch version at the end and remove builds number. I.e. `v1.2.3-5` -> `v1.2.3` -> `v1.2.4`.

3. Minor -> `v1.3.0`. Minor version changes second number in version and reset patch version and prerelease version. I.e. `v1.2.4` -> `v1.3.0`.

4. Major -> `v2.0.0`. Major version changes first number in version and reset all other versions. I.e. `v1.3.0` -> `v2.0.0`.
