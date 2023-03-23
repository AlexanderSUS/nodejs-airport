# nodejs-airport

## Table of contents

1. [Installation](#installation)
2. [Run](#run)
3. [API](#api)
	- [Test route](#test-route)
	- [Flights](#flights)
		- [Get all](#get-all-flights)
		- [Get by id](#get-flight-by-id)
		- [Create](#create-new-flight)
		- [Update](#update-flight)
		- [Delete](#delete-flight)
	- [Terminals](#terminals)
		- [Get all](#get-all-terminals)
		- [Get by id](#get-terminal-by-id)
		- [Create](#create-new-terminal)
		- [Update](#update-terminal)
		- [Delete](#delete-terminal)
	- [Employee](#employee)
		- [Get all](#get-all-employees)
		- [Get by id](#get-employee-by-id)
		- [Create](#create-new-employee)
		- [Update](#update-employee)
		- [Delete](#delete-employee)

## Installation
Clone this repo with command
```sh
git clone git@github.com:AlexanderSUS/nodejs-airport.git
```

 Go to project folder
```sh
cd nodejs-airport
```

Install dependencies
```sh
npm install
```
**[⬆ back to top](#table-of-contents)**

## Run

### Run in docker 
For running application in Docker container you should have docker installed on your system

Run application
```sh
docker compose up
```

Run application in detached mode
```sh
docker compose up -d
```


Stop application
```sh
docker compose down
```

### Run as is
Run command
```sh
node index.js
```

**Server will started on 0.0.0.0:4000**

**URL** <http://localhost:4000>

## API

### Test route
| `GET`  **/**     | Return test string |
| :---             | :---- |
| Code             | 200 |
| Media type | |
| Parameters | |
| Response         | 'Hello world' |

**[⬆ back to top](#table-of-contents)**

---

### Flights

#### Get all flights
| `GET`  /flights     | Return all flight |
| ---             | ---- |
| Code             | 200 |
| Parameters |    |
| Media type | application/json |
Response body: 
```javascript
	[{
		id: 742,
		flight: 'B481',
		from: 'Minks-1',
		to: 'Domodedovo',
		departureDate: '16/03/2023',
		departureTime: '17:44',
		arrivalDate: '16/03/2023',
		arrivalTime: '18:42',
		departureTerminal: 'B',
		arrivalTerminal: 'E',
		seats: [{
			seat: 'A23';
			isBusinessClass: false;
			isNearWindow: true;
			cost: 200;
			passenger: null
		}],
	}]
```
**[⬆ back to top](#table-of-contents)**

#### Get flight by id
| `GET`  /flights/{flightId}     | Return flight by id |
| ---             | ---- |
| Code             | 200 |
| Parameters |    |
| Media type | application/json |
Response body: 
```javascript
  {
    id: 742,
    flight: 'B481',
    from: 'Minks-1',
    to: 'Domodedovo',
    departureDate: '16/03/2023',
    departureTime: '17:44',
    arrivalDate: '16/03/2023',
    arrivalTime: '18:42',
    departureTerminal: 'B',
    arrivalTerminal: 'E',
    seats: [{
      seat: 'A23';
      isBusinessClass: false;
      isNearWindow: true;
      cost: 200;
      passenger: null
    }]
  }
```
| Code             | 404 |
| :---             | :---- |
| Media type | application/json |
Response body
```javascript
  { 
    message: 'Flight not found'
  }
```

**[⬆ back to top](#table-of-contents)**

#### Create new flight

| `POST`  /flights | return newly created flight |
| :---             | :---- |
| Code             | 201 |
| Media type | application/json |

Request body:
```javascript
  {
    flight: 'B481',
    from: 'Minks-1',
    to: 'Domodedovo',
    departureDate: '16/03/2023',
    departureTime: '17:44',
    arrivalDate: '16/03/2023',
    arrivalTime: '18:42',
    departureTerminal: 'B',
    arrivalTerminal: 'E',
    seats: [{
      seat: 'A23';
      isBusinessClass: false;
      isNearWindow: true;
      cost: 200;
      passenger: null
    }]
  }

```
Response body: 
```javascript
  {
    id: 742,
    flight: 'B481',
    from: 'Minks-1',
    to: 'Domodedovo',
    departureDate: '16/03/2023',
    departureTime: '17:44',
    arrivalDate: '16/03/2023',
    arrivalTime: '18:42',
    departureTerminal: 'B',
    arrivalTerminal: 'E',
    seats: [{
    seat: 'A23';
      isBusinessClass: false;
      isNearWindow: true;
      cost: 200;
      passenger: null
    }]
  }
```
| Code             | 400 |
| :---             | :---- |
| Media type | application/json |
Response body
```javascript
  { 
    message: 'Flight number already exist'
  }
```

**[⬆ back to top](#table-of-contents)**

#### Update flight


| `PATCH`  /flights/{flightId}     | Return updated flight |
| :---             | :---- |
| Code             | 200 |
| Parameters |    |
| Media type | application/json |

Request body:
```javascript
  {
    flight: 'B481',
    from: 'Minks-1',
    to: 'Domodedovo',
    departureDate: '16/03/2023',
    departureTime: '17:44',
    arrivalDate: '16/03/2023',
    arrivalTime: '18:42',
    departureTerminal: 'B',
    arrivalTerminal: 'E',
    seats: [{
      seat: 'A23';
      isBusinessClass: false;
      isNearWindow: true;
      cost: 200;
      passenger: null
    }]
  }
```

Response body:
```javascript
  {
    id: 742,
    flight: 'B481',
    from: 'Minks-1',
    to: 'Domodedovo',
    departureDate: '16/03/2023',
    departureTime: '17:44',
    arrivalDate: '16/03/2023',
    arrivalTime: '18:42',
    departureTerminal: 'B',
    arrivalTerminal: 'E',
    seats: [{
    seat: 'A23';
      isBusinessClass: false;
      isNearWindow: true;
      cost: 200;
      passenger: null
    }]
  }
```

| Code             | 400 |
| :---             | :---- |
| Media type | application/json |
Response body:
```javascript
  { 
    message: 'reason'
  }
```

| Code             | 404 |
| :---             | :---- |
| Media type | application/json |
Response body:
```javascript
  { 
    message: 'Flight not found'
  }
```
**[⬆ back to top](#table-of-contents)**

#### Delete flight

| `DELETE`  /flights/{flightId}     |  |
| :---             | :---- |
| Code             | 204 |
| Media type |  |
Response body:

| Code             | 404 |
| :---             | :---- |
| Media type | application/json |
Response body:
```javascript
  { 
    message: 'Flight not found'
  }
```
**[⬆ back to top](#table-of-contents)**

---

### Terminals
#### Get all terminals
| `GET`  /terminals     | Return all terminals |
| :---             | :---- |
| Code             | 200 |
| Parameters |  order   |
| Media type | application/json |

Response body:
```javascript
  [{
    id: 'A',
    gates: []
  }]
```
**[⬆ back to top](#table-of-contents)**

#### Get terminal by id

| `GET`  /terminals/{terminalId}     | Return terminal by id |
| :---             | :---- |
| Code             | 200 |
| Parameters |    |
| Media type | application/json |

Response body:
```javascript
  {
    id: 'A',
    gates: []
  }
```

| Code             | 404 |
| :---             | :---- |
| Media type | application/json |
Response body:
```javascript
  { 
    message: 'Terminal not found'
  }
```

**[⬆ back to top](#table-of-contents)**

#### Create new terminal

| `POST`  /terminals/{terminalId}     | Return newly created terminal | 
| :---             | :---- |
| Code             | 201 |
| Parameters |    |
| Media type | application/json |

Request body:
```javascript
  {
    id: 'A',
    gates: [1, 2]
  }
```

Response body:
```javascript
  {
    id: 'A',
    gates: [1, 2]
  }
```

| Code             | 400 |
| :---             | :---- |
| Media type | application/json |
Response body:
```javascript
  { 
    message: 'reason'
  }
```
**[⬆ back to top](#table-of-contents)**

#### Update terminal

| `PATCH`  /terminal/{terminalId}     | Return updated terminal |
| :---             | :---- |
| Code             | 201 |
| Parameters |    |
| Media type | application/json |

Request body:
```javascript
  {
    gates: [1, 2, 3]
  }
```

Response body:
```javascript
  {
    id: 'A',
    gates: [1, 2, 3]
  }
```

| Code             | 400 |
| :---             | :---- |
| Media type | application/json |
Response body:
```javascript
  { 
    message: 'reason'
  }
```
| Code             | 404 |
| :---             | :---- |
| Media type | application/json |
Response body:
```javascript
  { 
    message: 'Terminal not found'
  }
```
**[⬆ back to top](#table-of-contents)**

#### Delete terminal
| `DELETE`  /terminal/{terminalId}     | Return no data |
| :---             | :---- |
| Code             | 204 |
| Media type |  |
Response body: no content

| Code             | 404 |
| :---             | :---- |
| Media type | application/json |
Response body:
```javascript
  { 
    message: 'Terminal not found'
  }
```
**[⬆ back to top](#table-of-contents)**

---

### Employee
#### Get all employees
| `GET`  /employee | Return all employees |
| :---             | :---- |
| Code             | 200 |
| Parameters |  title   |
| Media type | application/json |

Response body:
```javascript
  [{
    id: '3068a131-0992-4cf5-861b-b171cbb5d468',
    title: 'ticket_officer',
    firstName: 'Jane',
    lastName: 'Doe',
  }]
```
**[⬆ back to top](#table-of-contents)**

#### Get employee by id

| `GET`  /employee/{employeeId}     | Return employee by id |
| :---             | :---- |
| Code             | 200 |
| Parameters |    |
| Media type | application/json |

Response body:
```javascript
  {
    id: '3068a131-0992-4cf5-861b-b171cbb5d468',
    title: 'ticket_officer',
    firstName: 'Jane',
    lastName: 'Doe'
  }
```

| Code             | 404 |
| :---             | :---- |
| Media type | application/json |
Response body:
```javascript
  { 
    message: 'Employee not found'
  }
```
**[⬆ back to top](#table-of-contents)**

#### Create new employee

| `POST`  /employee/{employeeId}     | Return newly created employee | 
| :---             | :---- |
| Code             | 201 |
| Parameters |    |
| Media type | application/json |

Request body:
```javascript
  {
    title: 'ticket_officer',
    firstName: 'Jane',
    lastName: 'Doe'
  }

```

Response body:
```javascript
  {
    id: '3068a131-0992-4cf5-861b-b171cbb5d468',
    title: 'ticket_officer',
    firstName: 'Jane',
    lastName: 'Doe'
  }
```

| Code             | 400 |
| :---             | :---- |
| Media type | application/json |
Response body:
```javascript
  { 
    message: 'reason'
  }
```
**[⬆ back to top](#table-of-contents)**

#### Update employee

| `PATCH`  /employee/{employeeId}     | Return updated employee |
| :---             | :---- |
| Code             | 201 |
| Parameters |    |
| Media type | application/json |

Request body:
```javascript
  {
    title: 'ticket_officer'
  }
```

Response body:
```javascript
  {
    id: '3068a131-0992-4cf5-861b-b171cbb5d468',
    title: 'ticket_officer',
    firstName: 'Jane',
    lastName: 'Doe'
  }
```

| Code             | 400 |
| :---             | :---- |
| Media type | application/json |
Response body:
```javascript
  { 
    message: 'reason'
  }
```
| Code             | 404 |
| :---             | :---- |
| Media type | application/json |
Response body:
```javascript
  { 
    message: 'Employee not found'
  }
```
**[⬆ back to top](#table-of-contents)**

#### Delete employee

| `DELETE`  /employee/{employeeId}     | Return no data |
| :---             | :---- |
| Code             | 204 |
| Media type |  |
Response body: no content

| Code             | 404 |
| :---             | :---- |
| Media type | application/json |
Response body:
```javascript
  { 
    message: 'Employee not found'
  }
```
**[⬆ back to top](#table-of-contents)**

---

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
