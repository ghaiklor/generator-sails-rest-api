# generator-sails-rest-api [![Build Status](https://secure.travis-ci.org/ghaiklor/generator-sails-rest-api.png?branch=master)](https://travis-ci.org/ghaiklor/generator-sails-rest-api) [![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/ghaiklor/generator-sails-rest-api?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

**UNDER HEAVY DEVELOPMENT**

> Stability: 1 - Experimental

Yeoman generator that provides already configured and optimized Sails REST API.

## Features

- Disabled hooks by default: *cors*, *csrf*, *grunt*, *i18n*, *pubsub*, *session*, *sockets*, *views*;
- All configuration files cleaned up and optimised for REST API;
- Integrated Passport with Facebook, Twitter and Local authorizations strategies and implemented routes to them;
- Already declared `User` model with most used fields;
- Implemented 2 policies: `isOurApp` which checks if request is going from our applications, and `isUser` which checks if user is authorized by JSON Web Token;
- Custom responses which respond with `status` (Status Code), `message` (Status Message) and `response` (Response Data) fields;
- Bundle of ready-2-use services like `CipherService`, `PusherService` (Push Notifications), `SmsService` and so on... You can check table with detailed list of implemented services below;
- Integrated Mocha tests for all `controllers`, `models`, `policies`, `responses` and `services`. After generating you can execute `npm test`;

## Getting Started

First of all, you need install yeoman and generator:

```bash
npm install -g yo generator-sails-rest-api
```

Finally, create project directory and initiate the generator:

```bash
mkdir my-project
cd my-project
yo sails-rest-api
```

## Table of ready-2-use services

|  Service Name  |               Implemented providers              |
|:--------------:|:------------------------------------------------:|
| CipherService  | bcrypt                                           |
| MailerService  | Mandrill                                         |
| PaymentService | Stripe                                           |
| PusherService  | Apple Push Notifications, Google Cloud Messaging |
| SmsService     | Twilio                                           |
| SocialService  | Facebook                                         |
| StorageService | Amazon Google Cloud                              |

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
