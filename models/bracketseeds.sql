DROP DATABASE IF EXISTS bracketdb;

CREATE DATABASE bracketdb;

USE bracketdb;

CREATE TABLE competitor (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(45) NOT NULL,
  last_name VARCHAR(45) NOT NULL,
  belt_color VARCHAR(45),
  weight INT NOT NULL, 
  zipcode INT NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO competitor (first_name, last_name, belt_color, weight, zipcode)
VALUES ("Lydia", "Werewolf", "purple", 160, 11211);

INSERT INTO competitor (first_name, last_name, belt_color, weight, zipcode)
VALUES ("Audrey", "Alf", "brown", 130, 23601);