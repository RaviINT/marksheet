 
CREATE TABLE data(
    id SERIAL PRIMARY KEY,
    email VARCHAR(30),
    password VARCHAR(20)
)
CREATE TABLE Registration(
    id SERIAL PRIMARY KEY,
    name VARCHAR(20),
    email VARCHAR(30),
    password TEXT
)