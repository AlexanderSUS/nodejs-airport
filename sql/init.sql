CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE employee  (
	id uuid NOT NULL DEFAULT uuid_generate_v4(),
	first_name varchar(50) NOT NULL,
	last_name varchar(50) NOT NULL,
	email varchar(50) NOT NULL,
	password varchar(30) NOT NULL,
	PRIMARY KEY (id)
);

COMMENT ON TABLE employee IS 'Store data of employee of airport';

COMMENT ON COLUMN  employee.id IS 'Unique identifier';
COMMENT ON COLUMN  employee.first_name IS 'First name of employee';
COMMENT ON COLUMN  employee.last_name IS 'Last name of employee';
COMMENT ON COLUMN  employee.email IS 'Email of employee';
COMMENT ON COLUMN  employee.password IS 'Password for access';


CREATE TABLE aircraft  (
	id uuid NOT NULL DEFAULT uuid_generate_v4(),
	make varchar(255) NOT NULL,
	model varchar(255) NOT NULL,
	seats int2 NOT NULL,
	PRIMARY KEY (id)
);


COMMENT ON TABLE aircraft IS 'Store data of aircraft';

COMMENT ON COLUMN  aircraft.id IS 'Unique identifier';
COMMENT ON COLUMN  aircraft.make IS 'Make of aircraft';
COMMENT ON COLUMN  aircraft.model IS 'Model of aircraft';
COMMENT ON COLUMN  aircraft.seats IS 'Total amount of seats available for passengers';


CREATE TABLE person (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  first_name varchar(50) NOT NULL,
  last_name varchar(50) NOT NULL,
  PRIMARY KEY (id)
);

COMMENT ON TABLE person IS 'Store persons data that use our company';

COMMENT ON COLUMN person.id IS 'Unique identifier';
COMMENT ON COLUMN person.first_name IS 'First name of person';
COMMENT ON COLUMN person.last_name IS 'Last name of person';


CREATE TYPE document_type AS ENUM ('passport', 'visa', 'driver_licence');

CREATE TABLE document (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  type document_type,
  person_id uuid NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (person_id) REFERENCES person (id)
);

COMMENT ON TABLE document IS 'Store documents of persons';

COMMENT ON COLUMN document.id IS 'Unique identifier';
COMMENT ON COLUMN document.type IS 'Type of document: passport, visa, driver_licence';
COMMENT ON COLUMN document.person_id IS 'Unique identifier of person who onw this document';


CREATE TABLE airport (
	id uuid NOT NULL DEFAULT uuid_generate_v4(),
	iata varchar(3) NOT NULL,
	name varchar(255) NOT NULL,
	city varchar(100) NOT NULL,
	country varchar(100) NOT NULL,
	PRIMARY KEY (id)
);

COMMENT ON TABLE airport IS 'Store airports data';

COMMENT ON COLUMN airport.id IS 'Unique identifier';
COMMENT ON COLUMN airport.iata IS 'The International Air Transport Association''s (IATA) Location Identifier is a unique 3-letter code';
COMMENT ON COLUMN airport.name IS 'Airport name';
COMMENT ON COLUMN airport.city IS 'City name where airport located';
COMMENT ON COLUMN airport.country IS 'Country name where airport located';


CREATE TABLE terminal (
	id uuid NOT NULL DEFAULT uuid_generate_v4(),
	name varchar(6) NOT NULL,
	airport_id uuid NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (airport_id) 
        REFERENCES airport(id)
        ON DELETE CASCADE
);


COMMENT ON TABLE terminal IS 'Store terminals data';

COMMENT ON COLUMN terminal.id IS 'Unique identifier';
COMMENT ON COLUMN terminal.name IS 'Alphabetical name of terminal';
COMMENT ON COLUMN terminal.airport_id IS 'Airport identifier where terminal located';


CREATE TABLE gate (
	id uuid NOT NULL DEFAULT uuid_generate_v4(),
	terminal_id uuid NULL,
	number varchar(6) NOT NULL,
	airport_id uuid NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (airport_id) REFERENCES airport(id),
	FOREIGN KEY (terminal_id) REFERENCES terminal(id)
);


COMMENT ON TABLE gate IS 'Store gates data';

COMMENT ON COLUMN gate.id IS 'Unique identifier';
COMMENT ON COLUMN gate.terminal_id IS 'Identifier of terminal where gate located';
COMMENT ON COLUMN gate.number IS 'Alphabetical name of gate';
COMMENT ON COLUMN gate.airport_id IS 'Airport identifier where gate located';


CREATE TABLE flight (
	id uuid NOT NULL DEFAULT uuid_generate_v4(),
	date DATE NOT NULL,
	aircraft_id uuid NULL,
	departure_time varchar NOT NULL,
	arrival_time varchar NOT NULL,

	departure_airport_id uuid NULL,
	departure_gate_id uuid NULL,
	departure_terminal_id uuid NULL,
	arrival_airport_id uuid NULL,
	arrival_gate_id uuid NULL,
	arrival_terminal_id uuid NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (departure_airport_id) REFERENCES airport(id),
	FOREIGN KEY (departure_gate_id) REFERENCES gate(id),
	FOREIGN KEY (departure_terminal_id) REFERENCES terminal(id),
	FOREIGN KEY (arrival_airport_id) REFERENCES airport(id),
	FOREIGN KEY (arrival_gate_id) REFERENCES gate(id),
	FOREIGN KEY (arrival_terminal_id) REFERENCES terminal(id),
	FOREIGN KEY (aircraft_id) REFERENCES aircraft(id)
);


COMMENT ON TABLE flight IS 'Store flights data';

COMMENT ON COLUMN flight.id IS 'Unique identifier';
COMMENT ON COLUMN flight.date IS 'Date of departure';
COMMENT ON COLUMN flight.aircraft_id IS 'Identifier of plane perform flight';
COMMENT ON COLUMN flight.departure_time IS 'Time of departure';
COMMENT ON COLUMN flight.arrival_time IS 'Time of arrival';

COMMENT ON COLUMN flight.departure_airport_id IS 'Identifier of departure airport';
COMMENT ON COLUMN flight.departure_terminal_id IS 'Identifier of departure terminal';
COMMENT ON COLUMN flight.departure_gate_id IS 'Identifier of departure gate';

COMMENT ON COLUMN flight.arrival_airport_id IS 'Identifier of arrival airport';
COMMENT ON COLUMN flight.arrival_terminal_id IS 'Identifier of arrival terminal';
COMMENT ON COLUMN flight.arrival_gate_id IS 'Identifier of arrival gate';


CREATE TABLE flight_document (
	flight_id uuid NOT NULL,
	document_id uuid NOT NULL,
	PRIMARY KEY (flight_id, document_id),
	FOREIGN KEY (document_id) REFERENCES document (id) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (flight_id) REFERENCES flight(id) ON DELETE CASCADE ON UPDATE CASCADE
);


COMMENT ON TABLE flight_document IS 'Store relations between documents and flights';

COMMENT ON COLUMN flight_document.flight_id IS 'Flight identifier';
COMMENT ON COLUMN flight_document.document_id IS 'Document identifier which used by person for booking';
