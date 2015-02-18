# Changelog

## Edge version

- Improvement: Return `methodOverride` middleware to http config;
- Improvement: Add hidden `restPrefix` config to `blueprints` configuration file;
- Improvement: Add hidden `serverOptions` and `bodyParser` configurations to `http` configuration file;
- Improvement: Add `.gitkeep` files to each `api` folder;
- Improvement: Extend `api` folder with other directories which loads with Sails by default;
- Improvement: Implement checking for `generator-sails-rest-api` updates in CLI;
- Improvement: Optimizing and improvement yeoman `index.js` file structure;
- Improvement: Automatically creates `.yo-rc.json` file where generator's configuration is storing;
- Fix: Add `skip-install` to yeoman as it should be declared (before it was wrong);

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
- Improvement: Each test case named **TODO: write this test** as reminder and include `assert(true)`;
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
