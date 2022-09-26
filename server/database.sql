CREATE TABLE Registration(
    id SERIAL PRIMARY KEY,
    name VARCHAR(20),
    email VARCHAR(30),
    password TEXT
)
CREATE TABLE Students(
    id SERIAL,
    teachers_id int,
    name VARCHAR(20),
    roll_no int PRIMARY KEY,
    date_of_birth VARCHAR(20),
    class TEXT,
    division TEXT
)
CREATE TABLE subjects(
    id SERIAL PRIMARY KEY,
    roll_no int,
    FOREIGN KEY (roll_no) REFERENCES Students(roll_no) on delete cascade,
    FA int,
    FA_ORAL int,
    SA int,
    SA_ORAL int
)
CREATE TABLE skills(
    id SERIAL PRIMARY KEY,
    roll_no int,
    FOREIGN KEY (roll_no) REFERENCES Students(roll_no) on delete cascade,
    development VARCHAR(2),
    attitude VARCHAR(2),
    responsibility VARCHAR(2),
    music VARCHAR(2),
    hardwork VARCHAR(2)
)