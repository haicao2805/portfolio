CREATE DATABASE portfolio;

USE portfolio;

CREATE TABLE user(
	id VARCHAR(255) NOT NULL,
    googleID VARCHAR(30) NOT NULL,
    username VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);