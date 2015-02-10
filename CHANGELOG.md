# Changelog

## Edge version

- Improvement: Frozen stability of the whole project, so work is going only in `services`, `test` and `doc` folder;
- Improvement: Add blank tests for each `controllers`, `models`, `policies`, `responses`, `services`;
- Improvement: Each test case include `assert(false)` as reminder that they should be written;
- Improvement: Add JSON Web Token as part of `CipherService`;
- Improvement: Support for `skip-install` flag. You can skip `npm install` executing;
- Improvement: Add `customMiddleware` support in `config/http.js`;
- Improvement: Add log notification that generator under heavy development;
- Improvement: Add log notification that `npm install` skipped if you call with `skip-install` flag;
- Improvement: License has changed to GPL 3.0. For me important that this will be open-source and only open-source;
- Improvement: `yosay` upgraded to 1.0.2;
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
