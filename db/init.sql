DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS seeds;
DROP TABLE IF EXISTS users;



CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR (200),
    first_name VARCHAR (100),
    last_name VARCHAR (100),
    about_me VARCHAR (2000),  
    hash VARCHAR (2000),
    profile_pic VARCHAR (2000)
);

CREATE TABLE seeds (
    seed_id SERIAL PRIMARY KEY,
    type VARCHAR(255),
    variety VARCHAR(255),
    description VARCHAR (2000),
    image_url VARCHAR (2000),
    user_id INT REFERENCES users,
    quantity INT
);

CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    seed_id INT REFERENCES seeds,
    requestor_ID INT REFERENCES users(user_id),
    owner_ID INT REFERENCES users(user_id),
    request_quantity INT,
    status VARCHAR (10)
);

