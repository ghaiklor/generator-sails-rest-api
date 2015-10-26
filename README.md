# generator-sails-rest-api

[![Join the chat at https://gitter.im/ghaiklor/generator-sails-rest-api](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/ghaiklor/generator-sails-rest-api?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

![Downloads](https://img.shields.io/npm/dm/generator-sails-rest-api.svg)
![Downloads](https://img.shields.io/npm/dt/generator-sails-rest-api.svg)
![npm version](https://img.shields.io/npm/v/generator-sails-rest-api.svg)
![License](https://img.shields.io/npm/l/generator-sails-rest-api.svg)

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
![dependencies](https://img.shields.io/david/ghaiklor/generator-sails-rest-api.svg)
![dev dependencies](https://img.shields.io/david/dev/ghaiklor/generator-sails-rest-api.svg)

[![Onix-Systems](https://cloud.githubusercontent.com/assets/3625244/9819276/b40b6338-58b5-11e5-8800-c42f3ebe1242.png)](http://us.onix-systems.com/)

Yeoman generator that provides already configured and optimized Sails REST API with bundle of predefined features.

## Build Status

| Version         | Build Status                                                                                  | Coverage Status                                                                                  |
|:---------------:|:---------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------:|
| Edge (dev)      | ![Edge Version](https://img.shields.io/travis/ghaiklor/generator-sails-rest-api/dev.svg)      | ![Edge Version](https://img.shields.io/coveralls/ghaiklor/generator-sails-rest-api/dev.svg)      |
| Stable (master) | ![Stable Version](https://img.shields.io/travis/ghaiklor/generator-sails-rest-api/master.svg) | ![Stable Version](https://img.shields.io/coveralls/ghaiklor/generator-sails-rest-api/master.svg) |

## Features

- Generator is split in more smaller parts, so that you are able to scaffold models, policies, controllers, etc... separately;
- Disabled hooks by default: *csrf*, *grunt*, *i18n*, *pubsub*, *session*, *sockets*, *views*;
- Flexible questions that allow to you quickly configure database connections, services that you want to use, etc...
- Integrated ES6 (Babel) support right from the box;
- Implemented authentication layer based on passport with JWT and Local strategies, Facebook, Twitter, VKontakte, GitHub, Instagram, Google Plus and other social networks;
- Overrides defaults `blueprints` which simplify CRUD operation in REST API and adds new features like `fields` or `populate` in requests;
- All configuration files cleaned up and optimized for REST API;
- Some generators can scaffold predefined functionality;
- Sub-generator that simplifies creating cron configuration;
- Logger generator can scaffold logging configuration for `bunyan`, `winston` or use default Sails logger;
- Overridden responses which respond with `code` (Status Code), `message` (Status Message) and `data` (Response Data) fields;
- Bundle of ready-2-use services like `CipherService`, `PusherService` (Push Notifications), `SmsService` and so on... You can check the table with detailed list of implemented services below;
- Bunch of Sails adapters is already declared in `connections.js` configuration file so you can easily swap between them;
- Implemented useful express middleware like `Connection: keep-alive` and GZip compression. In a nutshell, all what optimizes HTTP performance;
- Swagger generator can scaffold Swagger UI Explorer for you project;

## Getting Started

Start using generator is very simple.

First of all, you need install **yeoman** and **generator-sails-rest-api**:

```bash
npm install -g yo generator-sails-rest-api
```

Then create project directory and initiate the generator under the project directory:

```bash
mkdir my-project
cd my-project
yo sails-rest-api
```

You will be prompted for questions. Answer to those questions that generator is asks and you will get configured Sails project.

After scaffolding the project you can use this project as before. Just run the `app.js` file or use npm scripts.

```bash
npm start
```

Congratulations, you just have setup your first Sails REST API :+1:

## Bundled Sails services

|  Service Name  |               Implemented providers              |
|:--------------:|:------------------------------------------------:|
| CipherService   | JWT                                              |
| HashService     | bcrypt                                           |
| ImageService    | GraphicsMagick, ImageMagick                      |
| LocationService | Google, Yandex, FreeGeoIP and a lot of others    |
| MailerService   | direct, sendmail, SMTP, SES and a lot more       |
| PaymentService  | BrainTreePayments, Stripe                        |
| PusherService   | Apple Push Notifications, Google Cloud Messaging |
| SmsService      | Twilio                                           |
| SocialService   | Facebook                                         |
| StorageService  | Amazon S3, Local                                 |

## License

The MIT License (MIT)

Copyright (c) 2015 Eugene Obrezkov aka ghaiklor

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
