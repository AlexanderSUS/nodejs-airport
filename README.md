# nodejs-airport

## Table of contents

1. [Installation](#installation)
2. [Run](#run)
3. [API](#api)
	- [Test route](#test-route)
	- [Flights](#flights)
	- [Terminals](#terminals)
	- [Employee](#employee)

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

### API

#### Test route
| `GET`  **/**     | Return test string |
| :---             | :---- |
| Code             | 200 |
| Media type | |
| Parameters | |
| Response         | 'Hello world' |

---

#### Flights

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

| `POST`  /flights     | Create flight |
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


| `PATCH`  /flights/{flightId}     | Update flight |
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

| `DELETE`  /flights/{flightId}     | Update flight |
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
---

#### Terminals

| `GET`  /terminals     | Get all terminals |
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

| `GET`  /terminals/{terminalId}     | Get terminal by id|
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

| `POST`  /terminals/{terminalId}     | Create terminal | 
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

| `PATCH`  /terminal/{terminalId}     | Update terminal |
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

| `DELETE`  /terminal/{terminalId}     | Delete terminal |
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
---

#### Employee

| `GET`  /employee | Get all employee |
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

| `GET`  /employee/{employeeId}     | Get employee  by id |
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

| `POST`  /employee/{employeeId}     | Create employee | 
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

| `PATCH`  /employee/{employeeId}     | Update employee |
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

| `DELETE`  /employee/{employeeId}     | Delete employee|
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
---
