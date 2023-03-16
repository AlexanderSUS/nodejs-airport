# nodejs-airport

## Table of contents

1. [Installation](#installation)
2. [API](#api)
	- [Test route](#test-route)
	- [Flights](#flights)
	- [Terminals](#terminals)
	- [Employee](#employee)

### Installation
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

### Run in docker container
For running application in Docker container you should have docker installed on your system

Run app
```sh
docker compose up
```

Stop app
```sh
docker compose down
```

### Run as is
Run command
```sh
node index.js
```

**Server will started on 0.0.0.0:4000**

**URL:** <http://localhost:4000>


### API
- airport (terminals, employees, flight tickets, etc.), question: I buy a ticket from point A to point B, how to get there, how much will it cost, if there are no direct flights, then also say about it

#### Test route
| `GET`  **/**     | Return test string |
| :---             | :---- |
| Code             | 200 |
| Parameters | |
| Response         | 'Hello world' |


#### Flights
| `GET`  **/flights**     | Return all flights |
| :---             | :---- |
| Code             | 200 |
| Parameters | 'from', 'to', 'departureTerminal', 'arrivalTerminal'   |
|Response  | 
```javascript
	[{
		id: 742,
		flight: 'B481',
		from: 'Minks-1',
		to: 'Domodedovo',
		departureTime: '16/03/2023 17:44',
		arrivalTime: '16/03/2023 18:42',
		departureTerminal: 'B',
		arrivalTerminal: 'E',
		seats: [{
			seat: 'A23';
			isBusinessClass: false;
			isNearWindow: true;
			cost: 200;
			isAvailable: true;
		}],
	}]
```

| `GET`  **/flights/{flightId}**     | Return flights by id |
| :---             | :---- |
| Code             | 200 |
| Parameters | 'from', 'to', 'departureTerminal', 'arrivalTerminal'   |
|Response  | 
```javascript
	[{
		id: 742,
		flight: 'B481',
		from: 'Minks-1',
		to: 'Domodedovo',
		departureTime: '16/03/2023 17:44',
		arrivalTime: '16/03/2023 18:42',
		departureTerminal: 'B',
		arrivalTerminal: 'E',
		seats: [{
			seat: 'A23';
			isBusinessClass: false;
			isNearWindow: true;
			cost: 200;
			isAvailable: true;
		}],
	}]
```
| Code             | 404 |
| :---             | :---- |
|Response  | 
```javascript
  { 
    message: 'Flight not found',
  }
```


| `PUT`  **/flights/{flightId}**     | Update flight |
| :---             | :---- |
| Code             | 200 |
| Parameters | 'from', 'to', 'departureTerminal', 'arrivalTerminal'   |
|Response  | 
```javascript
	[{
		id: 742,
		flight: 'B481',
		from: 'Minks-1',
		to: 'Domodedovo',
		departureTime: '16/03/2023 17:44',
		arrivalTime: '16/03/2023 18:42',
		departureTerminal: 'B',
		arrivalTerminal: 'E',
		seats: [{
			seat: 'A23';
			isBusinessClass: false;
			isNearWindow: true;
			cost: 200;
			isAvailable: true;
		}],
	}]
```

| Code             | 404 |
| :---             | :---- |
|Response  | 
```javascript
  { 
    message: 'Flight not found',
  }
```
