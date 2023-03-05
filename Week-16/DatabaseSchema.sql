show databases;
create database Warehouse;
use warehouse;

-- EVERY Table have id colume with PRIMARY KEY and auto increment 
-- Some common SQL queries
-- drop database warehouse;
-- SET SQL_SAFE_UPDATES = 0;
-- delete from cities;
-- drop table cities;


-- (1) CITY TABLE CREATION
create table CITIES(
    id int NOT NULL AUTO_INCREMENT, 
    name CHAR(20), 
    state CHAR(20),
    PRIMARY KEY (id)
);

-- (2) Warehouse table creation
create table WAREHOUSES(
    id int NOT NULL AUTO_INCREMENT,
    name CHAR(30),
    city_id int,
    EXTRACONTEXT json,
	PRIMARY KEY (id),
    FOREIGN KEY (city_id) REFERENCES cities(id)
);

-- (3) Store Table creation  
create table STORES(
    id int NOT NULL AUTO_INCREMENT,
    name CHAR(20), 
    warehouse_id int,
    city_id int,
    PRIMARY KEY (id),
    FOREIGN KEY (city_id) REFERENCES cities(id),
    FOREIGN KEY (warehouse_id) REFERENCES warehouses(id)
);

-- (4) Customer table Creation
create table CUSTOMER(
    id int NOT NULL AUTO_INCREMENT,
    name CHAR(50),
    address VARCHAR(50),
    city_id int,
    PRIMARY KEY (id),
    FOREIGN KEY (city_id) REFERENCES cities(id)
);

-- (5) Order table creation
create table ORDERS(
    id int NOT NULL AUTO_INCREMENT,
    order_date DATE,
    customer_id int,
    PRIMARY KEY (id),
    FOREIGN KEY (customer_id) REFERENCES CUSTOMER(id)
);

-- (6) Items/Product table creation 
create table ITEMS(
    id int NOT NULL AUTO_INCREMENT,
    name char(50),
    sku char(20),
    DESCRIPTION TEXT,
    WEIGHT DECIMAL(5,2), 
    COST DECIMAL(7,2),
    PRIMARY KEY (id)
);

-- (7) Order Items table craete to maintain Many 2 many relation between order and items/product table
create table ORDER_ITEMS(
    id int NOT NULL AUTO_INCREMENT,
    order_date DATE,
    order_id int,
    item_id int,
    Quantity DECIMAL(5,2),
    PRIMARY KEY (id),
    FOREIGN KEY (order_id) REFERENCES ORDERS(id),
    FOREIGN KEY (item_id) REFERENCES ITEMS(id)
);




 
 







