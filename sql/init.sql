CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE employee  (
	id uuid NOT NULL DEFAULT uuid_generate_v4(),
	first_name varchar NOT NULL,
	last_name varchar NOT NULL,
	email varchar NOT NULL,
	password varchar NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE aircraft  (
	id uuid NOT NULL DEFAULT uuid_generate_v4(),
	make varchar NOT NULL,
	model varchar NOT NULL,
	seats int2 NOT NULL,
	PRIMARY KEY (id)
);


CREATE TABLE person (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  first_name varchar NOT NULL,
  last_name varchar NOT NULL,
  PRIMARY KEY (id)
);

CREATE TYPE document_type AS ENUM ('passport', 'visa', 'driver_licence');

CREATE TABLE document (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  type document_type,
  person_id uuid NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (person_id) REFERENCES person (id)
);

CREATE TABLE airport (
	id uuid NOT NULL DEFAULT uuid_generate_v4(),
	iata varchar(3) NOT NULL,
	name varchar NOT NULL,
	city varchar NOT NULL,
	country varchar NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE terminal (
	id uuid NOT NULL DEFAULT uuid_generate_v4(),
	name varchar NOT NULL,
	airport_id uuid NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (airport_id) 
        REFERENCES airport(id)
        ON DELETE CASCADE
);

CREATE TABLE gate (
	id uuid NOT NULL DEFAULT uuid_generate_v4(),
	terminal_id uuid NULL,
	number varchar NOT NULL,
	airport_id uuid NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (airport_id) REFERENCES airport(id),
	FOREIGN KEY (terminal_id) REFERENCES terminal(id)
);

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

CREATE TABLE flight_document (
	flight_id uuid NOT NULL,
	document_id uuid NOT NULL,
	PRIMARY KEY (flight_id, document_id),
	FOREIGN KEY (document_id) REFERENCES document (id) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (flight_id) REFERENCES flight(id) ON DELETE CASCADE ON UPDATE CASCADE
);
