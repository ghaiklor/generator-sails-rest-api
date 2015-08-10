# generator-sails-rest-api

![Downloads](https://img.shields.io/npm/dm/generator-sails-rest-api.svg) ![npm version](https://img.shields.io/npm/v/generator-sails-rest-api.svg) ![dependencies](https://img.shields.io/david/ghaiklor/generator-sails-rest-api.svg) ![dev dependencies](https://img.shields.io/david/dev/ghaiklor/generator-sails-rest-api.svg) ![License](https://img.shields.io/npm/l/generator-sails-rest-api.svg)

> Stability: 3 - Stable

> The API has proven satisfactory, but cleanup in the underlying code may cause minor changes. Backwards-compatibility is guaranteed.

Yeoman generator that provides already configured and optimized Sails REST API with bundle of predefined features.

## Build Status

| Version          | Build Status                                                                                  | Coverage Status                                                                                  |
|:----------------:|:---------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------:|
| Edge (dev)       | ![Edge Version](https://img.shields.io/travis/ghaiklor/generator-sails-rest-api/dev.svg)      | ![Edge Version](https://img.shields.io/coveralls/ghaiklor/generator-sails-rest-api/dev.svg)      |
| Stable (master)  | ![Stable Version](https://img.shields.io/travis/ghaiklor/generator-sails-rest-api/master.svg) | ![Stable Version](https://img.shields.io/coveralls/ghaiklor/generator-sails-rest-api/master.svg) |

## Features

- Disabled hooks by default: *csrf*, *grunt*, *i18n*, *pubsub*, *session*, *views*;
- Overrides default `blueprints` which simplify CRUD operation in REST API;
- Implemented `AuthController`, `PingController` and `UserController`;
- Already declared `User` model with most used fields;
- Implemented 2 policies: `isAllowed` which checks if request is going from our applications, and `isAuthenticated` which inject user in `req` via JSON Web Token;
- Custom responses which respond with `code` (Status Code), `message` (Status Message) and `data` (Response Data) fields;
- Bundle of ready-2-use services like `CipherService`, `PusherService` (Push Notifications), `SmsService` and so on... You can check table with detailed list of implemented services below;
- Integrated Passport with Facebook, Twitter, VKontakte, GitHub, Instagram, Google Plus and other social networks, JWT and Local authorization strategies;
- All configuration files cleaned up and optimized for REST API;
- Winston logger with logging to console and DailyRotateFile is enabled by default;
- Bunch of Sails adapters is already declared in `connections` configuration file so you can easily swap between them;

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

After scaffolding the project you can use this project as before. Just run the `app.js` file and all.

```bash
npm start
```

Congratulations, you just have setup your first Sails REST API :+1:

## How to use project code?

_TODO:_ Fill with information. But you can read more at our [wiki page](https://github.com/ghaiklor/generator-sails-rest-api/wiki/How-to-use)

## Bundled Sails services

All the services is moved to separate npm modules so this table can change through the development process.
But I'll try to save it as actual as possible.

|  Service Name  |               Implemented providers              |
|:--------------:|:------------------------------------------------:|
| CipherService  | bcrypt, JWT                                      |
| MailerService  | Mandrill                                         |
| PaymentService | Stripe                                           |
| PusherService  | Apple Push Notifications, Google Cloud Messaging |
| SmsService     | Twilio                                           |
| SocialService  | Facebook                                         |
| StorageService | Amazon S3, Google Cloud                          |

## How can I get latest dev version of generator?

Right now this generator is extremely under development, so each day our `dev` branch has new updates and fixes.

If you want get the latest updates, you should do this:

```bash
git clone https://github.com/ghaiklor/generator-sails-rest-api.git # Clone the repository
cd generator-sails-rest-api # Change directory
npm link # Link current directory to global module
```

After that our git repository will be linked to your global npm module and you can use it as described above.

If any updates will come you can just pull the last changes and call generator again:

```bash
cd generator-sails-rest-api
git pull
yo sails-rest-api
```

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
