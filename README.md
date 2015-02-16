# generator-sails-rest-api [![npm version](https://badge.fury.io/js/generator-sails-rest-api.svg)](http://badge.fury.io/js/generator-sails-rest-api) [![Build Status](https://secure.travis-ci.org/ghaiklor/generator-sails-rest-api.png?branch=master)](https://travis-ci.org/ghaiklor/generator-sails-rest-api) [![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/ghaiklor/generator-sails-rest-api?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

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

## Project structure

Here some changes what I've done to Sails application.

- `api/controllers/AuthController.js` - Implemented `signin`, `signup`, `facebook` and `twitter` routes for user signin\signup;
- `api/models/User.js` - Implemented default `User` model which fits to you in most cases;
- `api/policies/isOurApp.js` - Checks for `Application-Token` in headers to prevent requests from non-allowed clients;
- `api/policies/isAuthenticated.js` - Authorizes user via JSON Web Token and inject authorized user into `req.user`;
- `api/responses/*.js` - Each response modified to return `status`, `message` and `response` data;
- `api/services/**/*.js` - Additional features like send push notification implemented like service for Sails;
- `config/**/*.js` - Optimized all configuration files to work only with REST API and added `passport.js` config file;
- `doc/**/*.json` - Folder where all documentation for yours REST API. Documentation generating executing from this sources;
- `test/**/*.js` - All tests for project;
- `.sailsrc` - Predefined list of hooks which we don't need for clear REST API backend;

## How to use

### Policies

#### isOurApp.js

File `api/policies/isOurApp.js` contains secret token which you should give to your frontend developers.

So each request which doesn't include `Application-Token` will be rejected.

It's kinda of private API and only allowed users can make requests.

### Responses

Each response in Sails is customized to fit this requirement: response should contains `status`, `message` and `response`.

It's the best workflow for mobile developers, who can assign `status` to their constants in code and see what happens in their request.

```javascript
res.badRequest(data, status, message);
res.forbidden(data, status, message);
res.notFound(data, status, message);
res.ok(data, status, message);
res.serverError(data, status, message);
```

`data` - this is response object, `status` - status code in response and `message` - custom message with more detailed description.

So, for example, you want to return forbidden with custom status and message, you can do this like:

```javascript
res.forbidden(null, "E_CUSTOM_FORBIDDEN", "My custom forbidden");
```

And this code will returns this response:

```json
{
    "status": "E_CUSTOM_FORBIDDEN",
    "message": "My custom forbidden",
    "response": "{}"
}
```

### Services

Each service has factory class and service which proxies to that factory class.

For example, you want to create JWT token with some payload inside. You can do this in this way:

```javascript
var payload = {
    id: someUserId
};

var jwt = CipherService.create('jwt', payload).hashSync();

console.log(jwt); // Prints out JWT token with payload
```

Each service is done in this way. You just call `.create()` with type of service and options object.

## Ready-2-use services

|  Service Name  |               Implemented providers              |
|:--------------:|:------------------------------------------------:|
| CipherService  | bcrypt, JWT                                      |
| MailerService  | Mandrill                                         |
| PaymentService | Stripe                                           |
| PusherService  | Apple Push Notifications, Google Cloud Messaging |
| SmsService     | Twilio                                           |
| SocialService  | Facebook                                         |
| StorageService | Amazon Google Cloud                              |

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
