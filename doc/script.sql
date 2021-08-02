CREATE DATABASE portfolio;

USE portfolio;

CREATE TABLE user(
	id VARCHAR(255) NOT NULL,
    googleID VARCHAR(30) NOT NULL UNIQUE,
    username VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL UNIQUE,
    role VARCHAR(10) NOT NULL,
    PRIMARY KEY(id)
);