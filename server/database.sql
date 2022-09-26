CREATE TABLE Registration(
    id SERIAL PRIMARY KEY,
    name VARCHAR(20),
    email VARCHAR(30),
    password TEXT
)
CREATE TABLE Students(
    id SERIAL PRIMARY KEY,
    teachers_id VARCHAR(30),
    name VARCHAR(20),
    roll_no INT,
    date_of_birth VARCHAR(20),
    class TEXT,
    division TEXT
)