create database perfer_product_data;
use perfer_product_data;
create table User(
	UserID varchar(30),
    UserName varchar(60),
    Email varchar(60),
    Account varchar(255)
);
create table Product(
	No varchar(30),
    ProductName varchar(60),
    Price int,
    FeeRate double
);
create table LikeList(
	SN varchar(60),
    OrderName int,
    Account varchar(255),
    TotalFee double,
    TotalAmount varchar(255)
);