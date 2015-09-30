# Changelog

## Edge version

## Version 0.10.6

- Hofix: Issue with installing the latest versions of dependencies;

## Version 0.10.5

- Hotfix: Issue with breaking changes in services;

## Version 0.10.4

- Improvement: Implement `SearchController` that can lookup for text in all models;
- Improvement: `pluralize` config in `blueprints` is works only for controllers that own appropriate model;
- Fix: `test` folder is not copies to destination folder;

## Version 0.10.3

- Fix: Bug with sockets hook is enabled by default;

## Version 0.10.2

- Improvement: Implement `Connection: keep-alive` for all responses;
- Fix: GZip compression in production mode;

## Version 0.10.1

- Improvement: Implement `populate` field that works tight with `fields` in find and findOne blueprints;

## Version 0.10.0

- **Improvement**: I have moved all the services from generator to separate npm modules. In this way you still can get updates for services and get hotfixes and new features without regenerating the whole project;
- Improvement: Increase stability level index. So we are moving to stable versions;
- Improvement: Implement `fields` parameter in requests that allows you set name of fields that you want to get;
- Improvement: Move `cors` tasks loading to separate installable hook. Now you can defined cors tasks in `config/cors.js`;
- Improvement: Add question that asks what services you want to use and not;
- Improvement: Asking you for default service that you want to use;
- Improvement: Add more configuration attributes to `config/http.js` like `ssl` and `port`;
- Improvement: Add `cron.js` config file where you can configure cron tasks;
- Improvement: Add Dockerfile;
- Improvement: Start working with test coverage, so now you have tests for controllers and models;
- Improvement: Add `test` environment to Sails application;
- Improvement: Add `supertest` in sails.request;
- Improvement: Automatically installing sails adapter for chosen database;
- Improvement: Add `clean` npm task for removing `.tmp` folder;
- Improvement: Logs files more readable now (without JSON format);
- Improvement: Add `X-Total-Count` header when you `GET /v1/model`;
- Improvement: Implement `refresh_token` route;
- Fix: Replace `jwt.decode()` with `jwt.verify()`. It's security fix, because `decode` doesn't verify token;
- Fix: Bug with email validation in User model;
- Fix: Auth stuff is using new CipherService API;
- Fix: Bug with JWT token undefined in passport config;
- Fix: Bug with lodash is undefined in passport config;
- Typo: Allow to send options object to `jsonwebtoken` verify and sign methods;
- Typo: Change JWT algorithm to HS512;
- Typo: Remove old `isAllowed` policy by `Application-Token`;
- Typo: Change `blueprints.populate` to false;
- Typo: Increase default limit for response to 20;
- Typo: Remove `skip-welcome` option;
- Typo: Rename `skip-update` option to `skip-check-update`;
- Typo: Remove `skip-all` option;
- Typo: Remove `verbose` option;

## Version 0.9.2

- Improvement: Add some shortcut actions to User controller;
- Improvement: Return CORS configuration and hook;
- Fix: Fix all strategies that handle errors incorrect;

## Version 0.9.1

- Hotfix: Bug when passport is modify configuration objects for strategies;

## Version 0.9.0

- Improvement: Add much more other social networks for authorize;
- Improvement: Add DynamoDB adapter to questions list;
- Improvement: More flexible questions workflow. Now it will ask you only questions based on database that you chose;
- Fix: OrientDB configuration object in connections;
- Fix: Bug with `allParams()` and `id` in body request;
- Typo: Add some rules to `User` model attributes;

## Version 0.8.1

- Hotfix: Strange bug with parsing AST, when `require` from `test` folder is not properly parsing and stop the generation;

## Version 0.8.0

- Improvement: Rewrite all blueprints to Bluebird promises;
- Improvement: Rewrite authorization method for social networks (add more flexibility to add the new one);
- Improvement: Add separate `socialProfiles` object in User model for storing social profiles;
- Improvement: Remove questions about passport strategies and credentials (it works without them);
- Improvement: Remove partial application from passport verify methods;
- Improvement: Add `req` to each verify method in passport;
- Improvement: Move configuration objects for passport to separate object (small refactoring);
- Improvement: Add checking for `info` object is exists on authentication;
- Fix: Server is crashing when `email` is empty on passport authentication;
- Fix: Fix passport authenticate logic for new User `socialProfiles` attribute;
- Fix: When `type` in `auth/social` is empty;
- Fix: Fix response header with `OK` and replace with `CREATED`;
- Fix: Fix when `skip-all` is not stopping installing npm dependencies;
- Typo: Add policy rule for `PingController` which allows to ping server from everywhere;
- Typo: Remove `tools` from project. I see, that nobody use it, so it moves just to generator core;
- Typo: Rename `response` field in response to `data` field;
- Typo: Rename fields to retrieve API access token to `Authorization: Bearer <token>` and `access_token` in POST;
- Typo: Change indent size from 4 to 2;
- Typo: Move mocha options to `mocha.opts` file;
- Typo: Change ping message;
- Typo: `email` is required now;
- Typo: Option names has changes to more simple `skip-welcome`, `skip-update`, `skip-install`, `skip-all` and `verbose`;

## Version 0.7.0

- Improvement: Add wrapper for prototype extending to services;
- Improvement: Add winston Logger by default;
- Improvement: Add Console and DailyRotateFile transports to `sails.config.log`;
- Improvement: Add Google Plus authorization;
- Improvement: Add Memory, Disk, SQLServer and OrientDB connections;
- Improvement: Add model connection by default to Disk in development environment;
- Improvement: Add questions kinda "Do you need Facebook authorization?";
- Improvement: Add test coverage tool;
- Improvement: Add bootstrap function and configure `npm test` command, so you have test coverage and running test cases;
- Improvement: Rename all test cases to `*.test.js` files;
- Improvement: Move mocha options to `mocha.opts` files in `test` folder;
- Improvement: Optimize `passport.js` configuration file;
- Improvement: Move ping from Auth to `PingController`. Into this controller can be added more checks of server status;
- Improvement: Add shortcut for Sails REPL in package, so you can call `npm run console` and you'll get REPL of sails app;
- Typo: Rename `JWT` header auth to `Bearer`;
- Typo: Remove auth by username. Local strategy works only with email now;
- Typo: Rename `fix-deps` script to `check-deps`;
- Typo: Remove warning when you set `skip-project-install` option;
- Typo: Simplify end section in generator;
- Typo: Rename `test` folder to `tests`;

## Version 0.6.2

- Fix critical bug with inquirer dependency;

## Version 0.6.1

- Fixed critical bug when yo is not see the generator;

## Version 0.6.0

- Improvement: Implemented parsing CommonJS modules from AST (Abstract Syntax Tree), so now generator is knows which modules you are really using;
- Improvement: Frozen structure of generator and project. Any serious changes in project structure;
- Improvement: Add Yahoo authorization;
- Improvement: Split generator arguments declaration to separate folder;
- Improvement: Split generator options declaration to separate folder;
- Improvement: Split generator questions declaration to separate folder;
- Improvement: Answers to questions is dynamically assign to existing `this.answers` object in `RunContext`;
- Improvement: Split each generator step to separate folder and modules;
- Improvement: Implement util `assign()` method which is using in `prompting` step for extend answers object;
- Improvement: Redesign of generator structure;
- Improvement: Add options to `check-updates.js` tool;
- Improvement: Add tools to npm scripts, so you can call `npm run-script <tool-name>` now;
- Improvement: Add `verbose` flag, so you can see everything what going on in `RunContext`;
- Improvement: Add logging all `serverError` responses to log by default (you don't need call `sails.log.error()`);
- Improvement: Implement logging all responses in `silly` mode;
- Improvement: Add `ping` route to `AuthController` which just respond with OK;
- Fix: Bug when JWT issued to user `false`;
- Fix: Bug with passport-jwt upgrade;
- Fix: Bug with `bodyParser` is not parsing POST body;
- Fix: Bug with no colorful print in `fix-deps.js`;
- Fix: Bug with no colorful print in installing step in generator;
- Fix: Bug when returns total count of records even with `where` criteria;
- Fix: Change log level info to `info` in production mode;

## Version 0.5.1

- Hotfix: Bug when with `skip-all` generator is freeze up;

## Version 0.5.0

- Improvement: Add `tools` folder where useful tools is located;
- Improvement: Implement `fix-deps` tool which checks for missing or unused dependencies in the project and fix that;
- Improvement: Implement `update-deps` tool which checks all modules for new versions and provides interactive menu for updating;
- Improvement: Return `methodOverride` middleware to http config;
- Improvement: Add hidden `restPrefix` config to `blueprints` configuration file;
- Improvement: Add hidden `serverOptions` and `bodyParser` configurations to `http` configuration file;
- Improvement: Add `.gitkeep` files to each `api` folder;
- Improvement: Extend `api` folder with other directories which loads with Sails by default;
- Improvement: Implement checking for `generator-sails-rest-api` updates in CLI;
- Improvement: Optimizing and improvement yeoman `index.js` file structure;
- Improvement: Automatically creates `.yo-rc.json` file where generator's configuration is storing;
- Improvement: Add `skip-generator-update` option which skips checking for generator updates on running;
- Improvement: Add `skip-generator-welcome` option which skips yeoman's welcome when generator is running;
- Improvement: Add `skip-project-install` option which skips running `npm install` in project root;
- Improvement: Add `skip-project-diagnostic` option which skips running diagnostic tools after project initialized;
- Improvement: Add `skip-all` option which skips everything and just scaffolds project;
- Fix: Add `skip-install` to yeoman as it should be declared (before it was wrong);
- Fix: Bunch of small improvements and fixes;

## Version 0.4.0

- Improvement: Move to Sails v0.11;
- Improvement: Move to Unstable stability level;
- Improvement: Move `jwt` config to `JwtCipher` service;
- Improvement: Add more custom responses `Bad Request`, `Created`, `Forbidden`, `Not Found`, `OK`, `Server Error`, `Unauthorized`;
- Improvement: You can override root object in response;
- Improvement: Include all default blueprints to `api/blueprints` folder;
- Improvement: Rewrite default blueprints for CRUD and simplify them;
- Improvement: Returns meta information for `GET /v1/:model` in body and `Content-Range` in headers;
- Improvement: Add questions for Facebook and Twitter tokens;
- Improvement: Rename `isUser` policy to `isAuthenticated`, it's more appropriate name;
- Fix: Getting status code from passport in `AuthController`;

## Version 0.3.0

- Improvement: Frozen stability of the whole project, so work is going only in `services`, `test` and `doc` folder;
- Improvement: Add blank tests for each `controllers`, `models`, `policies`, `responses`, `services`;
- Improvement: Each test case named **write this test** as reminder and include `assert(true)`;
- Improvement: Add JSON Web Token as part of `CipherService`;
- Improvement: Support for `skip-install` flag. You can skip `npm install` executing;
- Improvement: Add `customMiddleware` support in `config/http.js`;
- Improvement: Add log notification that generator under heavy development;
- Improvement: Add log notification that `npm install` skipped if you call with `skip-install` flag;
- Improvement: License has changed to GPL 3.0. For me important that this will be open-source and only open-source;
- Improvement: `yosay` upgraded to 1.0.2;
- Fix: Fix bug with `JWTService` in `AuthController.js`;
- Fix: `jsonwebtoken` package not declared in `package.json`;
- Fix: Fix bug when `npm test` also start installing npm modules;
- Fix: `passport-twitter-token` is not found;

## Version 0.2.0

- Improvement: Working with Cipher more comfortable;
- Improvement: Question is divided by groups;
- Add: `.tmp` folder added to `.gitignore` list;
- Add: `MailerService` and **Mandrill** provider;
- Add: `PaymentService` and **Stripe** provider;
- Add: **Twitter** authorization in **passport**;
- Fix: twilio module in package.json;
- Fix: `SocialFactory` is undefined;
- Fix: calling Facebook social service in any case;
- Fix: wrong comparing password with hash in database;

## Version 0.1.0

- Rethink about structure;
- Done factories and proxy services for each service located under the hood;
- Configure all **passport** and **jwt** authorization;
- Add **cipher** service with *bcrypt* support;
- Add **sms** service with *twilio* support;
- Add **social** service with *facebook* support;
- Add **storage** service with *gcloud* and *amazon s3* support;
- Add **AuthController** for auth in system via local and facebook strategy;
- Add route to **UserController** for getting facebook friends;
- All factories for services available within global context;
- Add notification about configuring application after installing;
- Add basic User model;
- Add Basic Cipher, Cipher Factory, bcrypt cipher services;
- Inject status codes in responses;
- Automatic installing npm dependencies;
- Automatic launching application after npm install;
- Add questions for database name, user, password and adapter;
- Add in connections config all supported adapters;
- Remove unused middleware from express;
- Remove unused parts from ```package.json```;
- Realize simple template with basic features;
- Configure scaffolding;
