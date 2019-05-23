CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE menu (
  id INT(10) AUTO_INCREMENT,
  burger_name VARCHAR(255) NOT NULL,
  devoured BOOLEAN,
  PRIMARY KEY(id) 
);