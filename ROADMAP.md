# Roadmap

## Faraway

- [ ] Add `md5`, `crc` Ciphers;
- [ ] Add `sendmail`, `Amazon` Mailer;
- [ ] Add `braintreepayments`, `PayPal` Payment;
- [ ] Add `Windows Phone` Pusher;
- [ ] Add `Twitter`, `VK`, `Google +` Social;
- [ ] Add `Local` Storage;
- [ ] Implement search on top of `find` blueprint;
- [ ] Implement pluralized form only for REST models;
- [ ] Think about questions "Which hook you want to leave enable?" and disable\enable hooks based on those answers;
- [ ] Think about generating not only backend REST API, so user can still have clean Sails application (maybe call spawn `sails new <app-name>`;
- [ ] Test coverage for all `api` files;

## Next minor version

- [ ] Replace dependency-check with clean detective in util;
- [ ] Think about ACL hook `sails-hook-acl` and make roles for model's attributes;
- [ ] Fix the issue with CORS;
- [ ] Implement `access_token` and `refresh_token` pair to work and change response name fields to appropriate it;
- [ ] Implement `refresh_token` route when you can refresh API token;
- [ ] Redesign services structure;
- [ ] Implement `/v1/upload` route which will upload binary file to storage by default;
- [ ] Implement converting camelCase attributes to snake_case in HTTP response;
- [ ] Add some global stuff which allow make kinda `Service.register(new MailerComponent.extend())`;
- [ ] Make global error codes for API with description and how fix it;
- [ ] Add aliases to common operation (for instance, `v1/user/recently_registered`;

## Version 0.9.0 (released)

- [x] Add a lot of other passport social strategies;
- [x] Add Amazon DynamoDB (NoSQL) and RDS (SQL) adapters to `connections`;

## Version 0.8.0 (released)

- [x] Rewrite all blueprints to Bluebird promises;
- [x] Rewrite authorization method for social networks (add more flexibility to add the new one);
- [x] Add separate `socialProfiles` object in User model for storing social profiles;
- [x] Remove questions about passport strategies and credentials (it works without them);
- [x] Remove partial application from passport verify methods;
- [x] Add `req` to each verify method in passport;
- [x] Move configuration objects for passport to separate object (small refactoring);
- [x] Add policy rule for `PingController` which allows to ping server from everywhere;
- [x] Remove `tools` from project. I see, that nobody use it, so it moves just to generator core;
- [x] Rename fields to retrieve API access token to `Authorization: Bearer <token>` and `access_token` in POST;
- [x] Change indent size from 4 to 2;

## Version 0.7.0 (released)

- [x] Expose `Class` to global scope. It's just wrapper for prototype extending;
- [x] Add winston logger and possibility to log into files;
- [x] Add more adapters to Sails app;
- [x] Refactor questions list and make it more user-friendly;
- [x] Add istanbul to app tests;
- [x] Small optimizations and fixes;

## Version 0.6.0 (released)

- [x] Improve stability (too much new features is appears in previous version);
- [x] Freeze architecture (only bug-fixes and adding new features);
- [x] Add questions list where you can choose which service need to include;

## Version 0.5.0 (released)

- [x] Think about package.json and unused dependencies;
- [x] Many improvements in generation process and UI;
- [x] Checking for updates of generator-sails-rest-api;
- [x] Write diagnostic scripts in `tools` folder;
- [x] Many small improvements;

## Version 0.4.0 (released)

- [x] Upgrade to Sails 0.11;
- [x] Add more custom responses;
- [x] Override and simplify default blueprints;
- [x] Freeze boilerplate structure (so any serious changes in future);

## Version 0.3.0 (released)

- [x] Implement JWT cipher;
- [x] Make mocha tests as part of Sails generator;
- [x] Improve stability;

## Version 0.2.0 (released)

- [x] Add support for **mandrill** mailer;
- [x] Rethink about Cipher service;
- [x] Add **payment** services;
- [x] Implement **stripe** payment service;
- [x] Add service **mailer**;

## Version 0.1.0 (released)
- [x] Make auto generating of all crypto tokens;
- [x] Add auth controller;
- [x] Configure all config section by default;
- [x] Add a lot of services **cipher**, **pusher**, **sms**, **social**, **storage**;
- [x] Add **bcrypt** cipher;
- [x] Add **twilio** sms;
- [x] Add **facebook** social;
- [x] Add **gcloud** and **amazon S3** storage
- [x] Configure support for **MongoDB**, **Redis**, **PostgreSQL**, **MySQL**;
- [x] Add questions for connect to databases;
- [x] Make basic template with configured Sails application;
