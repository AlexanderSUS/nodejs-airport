# nodejs-airport

## Table of contents

1. [Installation](#installation)
2. [Run](#run)
3. [API](#api)
  - [Test route](#test-route)
  - [Authentication](#authentication)
    - [Register](#register)
    - [Log in](#log-in)
    - [Refresh](#refresh)
    - [Log out](#log-out)
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

Run with rebuild
```sh
docker compose up --build
```

Run application in detached mode
```sh
docker compose up -d
```


Stop application
```sh
docker compose down
```

**Server will started on 0.0.0.0:5000**

**Test URL** <http://localhost:5000/api/v1>

**You can check redis on** <http://localhost:8081>


## Swagger
While app is running you can find swagger documentation at <http://localhost:5000/doc>


## Database

You can find database description in DB.md file.

After the app is started database **automatically will be seeded with
aircraft, airport, flight, terminal, gate, person data**.

To see data in the database you can use pgAdmin, after an app is started it will be
available on http://localhost:8080.

For login use
- mail:  `admin@admin.com`
- password - `pgadmin`

After login 
- click `Add new server`
- type any `name`
- pick `Connections`
- Host name/address - `db`
- Maintenance database - `airport`
- username - `admin`
- password - `admin`
- click - `save`

To see tables
- in left up conner unwrap connection 
- -> Servers -> Databases -> airport -> Schemas -> Public -> Tables

Too see table data
- -> Right click on table -> View/Edit data


**[⬆ back to top](#table-of-contents)**

## API 

### Test route
| `GET`  **api/v1**     | Return test string |
| :---             | :---- |
| Code             | 200 |
| Media type | text/html |
| Parameters | |
| Response         | 'Hello world' |

| Code             | 404 |
| :---             | :---- |
| Media type | application/json |
Response body
```javascript
  { 
    statusCode: 400,
    message: 'Cannot GET /api/users',
    error: "Not found"
  }
```


**[⬆ back to top](#table-of-contents)**

---

### Authentication

#### Register 

| `POST`  api/v1/auth/register    | Return tokens for authentication |
| :---             | :---- |
| Code             | 200 |
| Parameters |    |
| Media type | application/json |

Request body:
```javascript
  {
    firstName: "John",
    lastName: "Doe", 
    email: "test@test.test",
    password: "test1234",
  }

```

Response body:
```javascript
  {
    id: "fbe2d91b-8405-42ee-b0e4-9439a43abc8e",
    firstName: "John",
    lastName: "Doe", 
    email: "test@test.test",
  }
```

| Code             | 400 |
| :---             | :---- |
| Media type | application/json |
Response body:
```javascript
  { 
    statusCode: 400,
    message: "Key (email)=(test@test.test) already exists.",
    error: "Bad request"
  }
```

#### Log in 

| `POST`  api/v1/auth/login     | Return tokens for authentication |
| :---             | :---- |
| Code             | 200 |
| Parameters |    |
| Media type | application/json |

Request body:
```javascript
  {
    email: "test@test.test",
    password: "test1234",
  }

```

Response body:
```javascript
  {
    accessToken: "1679749058874834919680",
    refreshToken: "1679749058874679835672",
  }
```

| Code             | 400 |
| :---             | :---- |
| Media type | application/json |
Response body:
```javascript
  { 
    statusCode: 400,
    message: "Invalid credentials",
  }
```

#### Refresh 
| `POST`  api/v1/auth/refresh | Return new pair of authentication tokens |
| :---             | :---- |
| Code             | 200 |
| Parameters |    |
| Media type | application/json |

Request body:
```javascript
  {
    refreshToken: "1679749058874679835672",
  }

```

Response body:
```javascript
  {
    accessToken: "1679749058874834919680",
    refreshToken: "1679749058874679835673",
  }
```


| Code             | 401 |
| :---             | :---- |
| Media type | application/json |
Response body:
```javascript
  { 
    statusCode: 401,
    message: "Unauthorized",
  }
```

**[⬆ back to top](#table-of-contents)**

#### Log out 
| `POST`  api/v1/auth/logout | logout user |
| :---             | :---- |
| Code             | 204 |
| Parameters |    |
| Media type | application/json |

Request body:
```javascript
  {
    accessToken: "1679749058874834919680",
    refreshToken: "1679749058874679835673",
  }

```

Response body:

| Code             | 401 |
| :---             | :---- |
| Media type | application/json |
Response body:
```javascript
  { 
    statusCode: 401,
    message: "Unauthorized",
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
