CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE employee  (
	id uuid NOT NULL DEFAULT uuid_generate_v4(),
	email varchar NOT NULL,
	password varchar NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE aircraft  (
	id uuid NOT NULL DEFAULT uuid_generate_v4(),
	seats int2 NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE country  (
	name varchar NOT NULL,
	PRIMARY KEY (name)
);

CREATE TABLE passenger (
	id uuid NOT NULL DEFAULT uuid_generate_v4(),
	fist_name varchar NOT NULL,
	last_name varchar NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE city (
	id uuid NOT NULL DEFAULT uuid_generate_v4(),
	name varchar NOT NULL,
	country_name varchar NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (country_name) 
        REFERENCES country(name)
        ON DELETE CASCADE
);

CREATE TABLE airport (
	name varchar NOT NULL,
	city_id uuid NULL,
	country_name varchar NULL,
	PRIMARY KEY (name),
	FOREIGN KEY (country_name) REFERENCES country(name),
	FOREIGN KEY (city_id) REFERENCES city(id)
);

CREATE TABLE terminal (
	id uuid NOT NULL DEFAULT uuid_generate_v4(),
	name varchar NOT NULL,
	airport_name varchar NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (airport_name) 
        REFERENCES airport(name)
        ON DELETE CASCADE
);

CREATE TABLE gate (
	id uuid NOT NULL DEFAULT uuid_generate_v4(),
	terminal_id uuid NULL,
	number varchar NOT NULL,
	airport_name varchar NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (airport_name) REFERENCES airport(name),
	FOREIGN KEY (terminal_id) REFERENCES terminal(id)
);

CREATE TABLE flight_details (
	id uuid NOT NULL DEFAULT uuid_generate_v4(),
	scheduled varchar NOT NULL,
	airport_name varchar NULL,
	gate_id uuid NULL,
	terminal_id uuid NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (terminal_id) REFERENCES terminal(id),
	FOREIGN KEY (gate_id) REFERENCES gate(id),
	FOREIGN KEY (airport_name) REFERENCES airport(name)
);

CREATE TABLE flight (
	id uuid NOT NULL DEFAULT uuid_generate_v4(),
	date varchar NOT NULL,
	arrival_details_id uuid NULL,
	departure_details_id uuid NULL,
	aircraft_id uuid NULL,
	PRIMARY KEY (id),
	UNIQUE (arrival_details_id),
	UNIQUE (departure_details_id),
	FOREIGN KEY (arrival_details_id) REFERENCES flight_details(id),
	FOREIGN KEY (departure_details_id) REFERENCES flight_details(id),
	FOREIGN KEY (aircraft_id) REFERENCES aircraft(id)
);

CREATE TABLE flight_passengers_passenger (
	flight_id uuid NOT NULL,
	passenger_id uuid NOT NULL,
	PRIMARY KEY (flight_id, passenger_id),
	FOREIGN KEY (passenger_id) REFERENCES passenger(id) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (flight_id) REFERENCES flight(id) ON DELETE CASCADE ON UPDATE CASCADE
);
