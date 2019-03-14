DROP DATABASE IF EXISTS bracketdb;

CREATE DATABASE bracketdb;

USE bracketdb;

CREATE TABLE competitor (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(45) NOT NULL,
  last_name VARCHAR(45) NOT NULL,
  belt_color VARCHAR(45),
  weight VARCHAR(45), 
  zipcode INT NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO competitor (first_name, last_name, belt_color, weight, zipcode)
VALUES ("Lydia", "Werewolf", "purple", 160, 11211);

INSERT INTO competitor (first_name, last_name, belt_color, weight, zipcode)
VALUES ("Audrey", "Alf", "brown", 130, 23601);

INSERT INTO competitor (first_name, last_name, belt_color, weight, zipcode)
VALUES ("Liz", "Sussan", "black", 115, 23220);

INSERT INTO competitor (first_name, last_name, belt_color, weight, zipcode)
VALUES ("Mimi", "Minx", "brown", 170, 90210);

INSERT INTO competitor (first_name, last_name, belt_color, weight, zipcode)
VALUES ("Amber", "Mughal", "white", 140, 23601);

INSERT INTO competitor (first_name, last_name, belt_color, weight, zipcode)
VALUES ("Bixy", "Leroy", "white", 145, 23224);

INSERT INTO competitor (first_name, last_name, belt_color, weight, zipcode)
VALUES ("Miki", "Nakano", "black", 110, 05354);

INSERT INTO competitor (first_name, last_name, belt_color, weight, zipcode)
VALUES ("Cailtin", "Saffron", "white", 105, 05355);

INSERT INTO competitor (first_name, last_name, belt_color, weight, zipcode)
VALUES ("Urooj", "Mughal", "purple", 115, 90210);

INSERT INTO competitor (first_name, last_name, belt_color, weight, zipcode)
VALUES ("Yuki", "Sugimoto", "brown", 137, 90712);

INSERT INTO competitor (first_name, last_name, belt_color, weight, zipcode)
VALUES ("Amber", "Rose", "white", 170, 90713);

INSERT INTO competitor (first_name, last_name, belt_color, weight, zipcode)
VALUES ("Yuri", "Nabata", "blue", 115, 90713);

INSERT INTO competitor (first_name, last_name, belt_color, weight, zipcode)
VALUES ("Janna", "Hall", "blue", 160, 23224);

INSERT INTO competitor (first_name, last_name, belt_color, weight, zipcode)
VALUES ("Quincy", "Cutberth", "white", 120, 23220);

INSERT INTO competitor (first_name, last_name, belt_color, weight, zipcode)
VALUES ("Mia", "Taupe", "blue", 185, 23601);

INSERT INTO competitor (first_name, last_name, belt_color, weight, zipcode)
VALUES ("Sandy", "Hall", "white", 205, 11211);

INSERT INTO competitor (first_name, last_name, belt_color, weight, zipcode)
VALUES ("Vanessa", "Tiggins", "purple", 235, 11211);

INSERT INTO competitor (first_name, last_name, belt_color, weight, zipcode)
VALUES ("Goblinda", "Halla", "black", 175, 23601);

INSERT INTO competitor (first_name, last_name, belt_color, weight, zipcode)
VALUES ("Maxista", "Batista", "black", 140, 23220);

INSERT INTO competitor (first_name, last_name, belt_color, weight, zipcode)
VALUES ("Lady", "Bisa", "purple", 110, 23221);

INSERT INTO competitor (first_name, last_name, belt_color, weight, zipcode)
VALUES ("Potatette", "L'Sweet", "brown", 105, 23221);

INSERT INTO competitor (first_name, last_name, belt_color, weight, zipcode)
VALUES ("Ottavia", "Bourdain", "purple", 155, 11211);