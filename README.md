# generator-sails-rest-api [![Build Status](https://secure.travis-ci.org/ghaiklor/generator-sails-rest-api.png?branch=master)](https://travis-ci.org/ghaiklor/generator-sails-rest-api) [![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/ghaiklor/generator-sails-rest-api?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

> [Yeoman](http://yeoman.io) generator

Yeoman generator that provides already configured and optimized Sails REST API.

## Features

- Disabled hooks by default: *cors*, *csrf*, *grunt*, *i18n*, *pubsub*, *session*, *sockets*, *views*;
- All configuration files cleaned up and optimised for REST API;
- Integrated Passport with Facebook, Twitter and Local authorizations strategies and implemented routes to them;
- Already declared `User` model with most used fields;
- Implemented 2 policies: `isOurApp` which checks if request is going from our applications, and `isUser` which checks if user is authorized by JSON Web Token;
- Custom responses which respond with `status` (Status Code), `message` (Status Message) and `response` (Response Data) fields;
- Bundle of ready-2-use services like `CipherService`, `PusherService` (Push Notifications), `SmsService` and so on... You can check table with detailed list of implemented services below;

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
|  CipherService | bcrypt                                           |
|  MailerService | Mandrill                                         |
| PaymentService | Stripe                                           |
|  PusherService | Apple Push Notifications, Google Cloud Messaging |
|   SmsService   | Twilio                                           |
|  SocialService | Facebook                                         |
| StorageService | Amazon Google Cloud                              |

## License

The Apache License 2.0 (Apache-2.0)

Copyright (c) 2015 Eugene Obrezkov
