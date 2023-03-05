show databases;
use warehouse;

-- City Record Instert
insert into city (name,state) values ('Surat', 'Gujarat'),('Pune','Maharastra'),('Udaypur','Rajasthan');
select * from city;

-- Warehouse Record Insert
insert into warehouse (name,city_id) values ('Surat WH1',1),('Surat WH2',1),('Pune WH1',2),('Pune WH2',2), ('Udaypur WH1',3);
select * from warehouse;

-- Store Record Insert
insert into store (name,warehouse_id,city_id) values ('Store 1 Surat',1,1), ('Store 2 Surat',1,1);
insert into store (name,warehouse_id,city_id) values ('Store 1 Pune',2,2),('Store 2 Pune',2,2);
insert into store (name,warehouse_id,city_id) values ('Store 1 Udaypur',5,3), ('Store 2 Udaypur',5,3),('Store 3 Udaypur',5,3),('Store 4 Udaypur',5,3);
select * from store;

-- Customer Record Insert
insert into customer (name,address,city_id) values ('Paras Sutariya','Surat Gujarat',1), ('Jitesh Sharma','Pune Maharastra',2);
insert into customer (name,address,city_id) values ('Mr. Patil','Pune Maharastra',2);
select * from customer;

-- Order Record Insert
insert into sale_order (order_date,customer_id) values ('2023-03-05',1),('2023-03-06',2);
insert into orders (order_date,customer_id) values('2023-03-07',1),('2023-03-08',3);
select * from sale_order;

-- Items/Product Recod Insert
insert into item (name,sku,description,weight,cost) value
	('Red Shirt','Red-S','Full sleeve red shirt',200.00,1200.00),
    ('Blue Shirt','Blue-S','Full sleeve Blue shirt',300.00,1500.00),
    ('1 TB SSD','SSD-1TB','1 TB samsung SSD with 1 year warranty',300.25,10000.00),
    ('500 GB SSD','SSD-500GB','500GB samsung SSD with 3 year warranty',150.25,9000.00);
select * from item;

-- Order Items Record craete for maintain Many 2 many relation between order and items/product table
insert into sale_order_item (order_date,order_id,item_id,quantity) values ('2023-03-05',1,1,3.00),('2023-03-06',2,2,5.00),('2023-03-07',3,3,6.00),('2023-03-08',4,4,8.00);
select * from sale_order_item;

-- ---------------------------------------------
-- Assignemnt Problems 
-- (1) Find the item that has minimum weight.
select * from item where weight=(select max(weight) from item);

-- (2) Find the different warehouses in “Pune”.
select * from warehouse where city_id=(select city_id from city where name='Pune');

-- (3) Find the details of items ordered by a customer “Mr. Patil”
select * from sale_order_item where order_id=(select id from sale_order where customer_id=(select customer_id from customer where name='Mr. Patil'));

-- (4) Find a Warehouse which has maximum stores
select * from store;
select	count(*), warehouse_id from store group by warehouse_id;
select * from warehouse;
select	count(*) as store_count, s.warehouse_id, w.name as WarehouseName from store as s left join warehouse as w on s.warehouse_id= w.id  group by warehouse_id order by store_count desc limit 1;

-- (5) Find an item which is ordered for a minimum number of times
select sum(quantity), items.item_id, items.name from sale_order_item left join items on sale_order_item.item_id=item.item_id group by item.id limit 1 ;

-- (6) Find the detailed orders given by each customer
select * from
sale_order_item as oi
left join sale_order as o
on	oi.order_id=o.order_id
left join item as i
on oi.item_id=i.item_id
left join customer as c
on o.customer_id=c.customer_id
 -- where c.name='Mr. Patil';



 
 







