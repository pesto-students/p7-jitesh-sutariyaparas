show databases;
create database warehouse;
use warehouse;

-- EVERY Table have id colume with PRIMARY KEY and auto increment 
-- Some common SQL queries
-- drop database warehouse;
-- SET SQL_SAFE_UPDATES = 0;
-- delete from cities;
-- drop table cities;


-- (1) CITY TABLE CREATION
create table city(
    city_id int NOT NULL AUTO_INCREMENT, 
    name CHAR(20), 
    state CHAR(20),
    PRIMARY KEY (city_id)
);

-- (2) Warehouse table creation
create table warehouse(
    warehouse_id int NOT NULL AUTO_INCREMENT,
    name CHAR(30),
    city_id int,
	PRIMARY KEY (warehouse_id),
    FOREIGN KEY (city_id) REFERENCES city(city_id)
);

-- (3) Store Table creation  
create table store(
    store_id int NOT NULL AUTO_INCREMENT,
    name CHAR(20), 
    warehouse_id int,
    city_id int,
    PRIMARY KEY (store_id),
    FOREIGN KEY (city_id) REFERENCES city(city_id),
    FOREIGN KEY (warehouse_id) REFERENCES warehouse(warehouse_id)
);

-- (4) Customer table Creation
create table customer(
    customer_id int NOT NULL AUTO_INCREMENT,
    name CHAR(50),
    address VARCHAR(50),
    city_id int,
    PRIMARY KEY (customer_id),
    FOREIGN KEY (city_id) REFERENCES city(city_id)
);

-- (5) Order table creation
create table sale_order(
    order_id int NOT NULL AUTO_INCREMENT,
    order_date DATE,
    customer_id int,
    PRIMARY KEY (order_id),
    FOREIGN KEY (customer_id) REFERENCES customer(customer_id)
);

-- (6) Items/Product table creation 
create table item(
    item_id int NOT NULL AUTO_INCREMENT,
    name char(50),
    sku char(20),
    DESCRIPTION TEXT,
    WEIGHT DECIMAL(5,2), 
    COST DECIMAL(7,2),
    PRIMARY KEY (item_id)
);

-- (7) Order Items table craete to maintain Many 2 many relation between order and items/product table
create table sale_order_item(
    sale_order_item_id int NOT NULL AUTO_INCREMENT,
    order_date DATE,
    order_id int,
    item_id int,
    Quantity DECIMAL(5,2),
    PRIMARY KEY (sale_order_item_id),
    FOREIGN KEY (order_id) REFERENCES sale_order(order_id),
    FOREIGN KEY (item_id) REFERENCES item(item_id)
);