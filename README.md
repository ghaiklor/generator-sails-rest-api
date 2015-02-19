# generator-sails-rest-api

[![npm version](https://badge.fury.io/js/generator-sails-rest-api.svg)](http://badge.fury.io/js/generator-sails-rest-api) [![Build Status](https://secure.travis-ci.org/ghaiklor/generator-sails-rest-api.png?branch=master)](https://travis-ci.org/ghaiklor/generator-sails-rest-api) [![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/ghaiklor/generator-sails-rest-api?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) [Documentation](https://github.com/ghaiklor/generator-sails-rest-api/wiki)

> Stability: 2 - Unstable

> The project is in the process of settling, but has not yet had sufficient real-world testing to be considered stable.

> Backwards-compatibility will be maintained if reasonable.

Yeoman generator that provides already configured and optimized Sails REST API with bundle of predefined features.

## Features

- Disabled hooks by default: *cors*, *csrf*, *grunt*, *i18n*, *pubsub*, *session*, *views*;
- Implemented tools `fix-deps` and `update-deps` which fix `package.json` from unused and missing dependencies and updates dependencies in interactive mode;
- Overrides default `blueprints` which simplify CRUD operation in REST API;
- Integrated Passport with Facebook, Twitter and Local authorization strategies;
- Already declared `User` model with most used fields;
- Implemented 2 policies: `isOurApp` which checks if request is going from our applications, and `isAuthenticated` which inject user in `req` via JSON Web Token;
- Custom responses which respond with `code` (Status Code), `message` (Status Message) and `response` (Response Data) fields;
- Bundle of ready-2-use services like `CipherService`, `PusherService` (Push Notifications), `SmsService` and so on... You can check table with detailed list of implemented services below;
- All configuration files cleaned up and optimized for REST API;
- Integrated Swagger doc specification in `doc` folder;
- Integrated Mocha tests for all `blueprints`, `controllers`, `models`, `policies`, `responses` and `services`. After generating you can execute `npm test`;

## ready-2-use services

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

Copyright © 2015 Eugene Obrezkov

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <http://www.gnu.org/licenses/>.
