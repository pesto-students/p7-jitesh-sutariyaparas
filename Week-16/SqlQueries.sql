show databases;
use warehouse;

-- City Record Instert
insert into cities (name,state) values ('Surat', 'Gujarat'),('Pune','Maharastra'),('Udaypur','Rajasthan');
select * from cities;

-- Warehouses Record Insert
insert into warehouses (name,city_id) values ('Surat WH1',1),('Surat WH2',1),('Pune WH1',2),('Pune WH2',2), ('Udaypur WH1',3);
select * from warehouses;

-- Store Record Insert
insert into stores (name,warehouse_id,city_id) values ('Store 1 Surat',1,1), ('Store 2 Surat',1,1);
insert into stores (name,warehouse_id,city_id) values ('Store 1 Pune',2,2),('Store 2 Pune',2,2);
insert into stores (name,warehouse_id,city_id) values ('Store 1 Udaypur',5,3), ('Store 2 Udaypur',5,3),('Store 3 Udaypur',5,3),('Store 4 Udaypur',5,3);
select * from stores;

-- Customer Record Insert
insert into customer (name,address,city_id) values ('Paras Sutariya','Surat Gujarat',1), ('Jitesh Sharma','Pune Maharastra',2);
insert into customer (name,address,city_id) values ('Mr. Patil','Pune Maharastra',2);
select * from customer;


-- Order Record Insert
insert into orders (order_date,customer_id) values ('2023-03-05',1),('2023-03-06',2);
insert into orders (order_date,customer_id) values('2023-03-07',1),('2023-03-08',3);
select * from orders;

-- Items/Product Recod Insert
insert into items (name,sku,description,weight,cost) value
	('Red Shirt','Red-S','Full sleeve red shirt',200.00,1200.00),
    ('Blue Shirt','Blue-S','Full sleeve Blue shirt',300.00,1500.00),
    ('1 TB SSD','SSD-1TB','1 TB samsung SSD with 1 year warranty',300.25,10000.00),
    ('500 GB SSD','SSD-500GB','500GB samsung SSD with 3 year warranty',150.25,9000.00);
select * from items;

-- Order Items Record craete for maintain Many 2 many relation between order and items/product table
insert into order_items (order_date,order_id,item_id,quantity) values ('2023-03-05',1,1,3.00),('2023-03-06',2,2,5.00),('2023-03-07',3,3,6.00),('2023-03-08',4,4,8.00);
select * from order_items;

-- ---------------------------------------------
-- Assignemnt Problems 
-- (1) Find the item that has minimum weight.
select * from items where weight=(select max(weight) from items);

-- (2) Find the different warehouses in “Pune”.
select * from warehouses where city_id=(select id from cities where name='Pune');

-- (3) Find the details of items ordered by a customer “Mr. Patil”
select * from order_items where order_id=(select id from orders where customer_id=(select id from customer where name='Mr. Patil'));

-- (4) Find a Warehouse which has maximum stores
select * from stores;
select	count(*), warehouse_id from STORES group by warehouse_id;
select * from warehouses;
select	count(*) as store_count, s.warehouse_id, w.name as WarehouseName from STORES as s left join warehouses as w on s.warehouse_id= w.id  group by warehouse_id order by store_count desc limit 1;

-- (5) Find an item which is ordered for a minimum number of times
select sum(Quantity), items.id,items.name from order_items left join items on order_items.item_id=items.id group by items.id limit 1 ;

-- (6) Find the detailed orders given by each customer
select * from
order_items as oi
left join orders as o
on	oi.order_id=o.id
left join items as i
on oi.item_id=i.id
left join CUSTOMER as c
on o.customer_id=c.id
 -- where c.name='Mr. Patil';
    





 
 







