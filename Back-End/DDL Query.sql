
CREATE TABLE Users(
	[user_id] NVARCHAR(8),
	username NVARCHAR(20) UNIQUE NOT NULL,
	[password] NVARCHAR(100) NOT NULL,
	created_date DATE NOT NULL,
	modified_datetime DATETIME2,
	is_blacklisted CHAR(1) NOT NULL, --0/1
	user_type NVARCHAR(6) NOT NULL, --Buyer/Seller/Admin

	CONSTRAINT PK_Users PRIMARY KEY([user_id])
)

CREATE TABLE Products(
	product_id NVARCHAR(8),
	[user_id] NVARCHAR(8),
	product_name NVARCHAR(50) NOT NULL,
	product_price MONEY NOT NULL,
	product_description NVARCHAR(1000),
	created_date DATE NOT NULL,
	modified_datetime DATETIME2,

	CONSTRAINT PK_Products PRIMARY KEY(product_id),
	CONSTRAINT FK_Products_user_id FOREIGN KEY ([user_id]) REFERENCES Users([user_id]) ON UPDATE CASCADE ON DELETE CASCADE
)

CREATE TABLE Carts(
	product_id NVARCHAR(8),
	[user_id] NVARCHAR(8),
	order_amount INT NOT NULL,
	created_date DATE NOT NULL,
	modified_datetime DATETIME2,

	CONSTRAINT PK_Carts PRIMARY KEY (product_id, [user_id]),
	CONSTRAINT FK_Carts_product_id FOREIGN KEY (product_id) REFERENCES Products(product_id),
	CONSTRAINT FK_Carts_user_id FOREIGN KEY ([user_id]) REFERENCES Users([user_id])
)