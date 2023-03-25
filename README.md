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

**URL** <http://localhost:4000/api/v1>

## API 

### Test route
| `GET`  **api/v1**     | Return test string |
| :---             | :---- |
| Code             | 200 |
| Media type | text/plain |
| Parameters | |
| Response         | 'Hello world' |

| Code             | 404 |
| :---             | :---- |
| Media type | application/json |
Response body
```javascript
  { 
    message: 'Could not GET /api/users'
  }
```


**[⬆ back to top](#table-of-contents)**

---

### Flights

#### Get all flights
| `GET`  api/v1/flights     | Return all flight |
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
| `GET`  api/v1/flights/{flightId}     | Return flight by id |
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

| `POST`  api/v1/flights | return newly created flight |
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


| `PATCH`  api/v1/flights/{flightId}     | Return updated flight |
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

| `DELETE`  api/v1/flights/{flightId}     |  |
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
| `GET`  api/v1/terminals     | Return all terminals |
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

| `GET`  api/v1/terminals/{terminalId}     | Return terminal by id |
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

| `POST`  api/v1/terminals/{terminalId}     | Return newly created terminal | 
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

| `PATCH`  api/v1/terminal/{terminalId}     | Return updated terminal |
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
| `DELETE`  api/v1/terminal/{terminalId}     | Return no data |
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
| `GET`  api/v1/employee | Return all employees |
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

| `GET`  api/v1/employee/{employeeId}     | Return employee by id |
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

| `POST`  api/v1/employee/{employeeId}     | Return newly created employee | 
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

| `PATCH`  api/v1/employee/{employeeId}     | Return updated employee |
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

| `DELETE`  api/v1/employee/{employeeId}     | Return no data |
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
