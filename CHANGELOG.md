# Changelog

## Edge version

- Improvement: Frozen stability of the whole project, so work is going only in `services` folder;
- Fix: `passport-twitter-token` is not found;
- Upgrade: `yosay` upgraded to 1.0.2;

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
