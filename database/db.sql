CREATE DATABASE densitydb

-- CREATE TABLE test(
--     id SERIAL PRIMARY KEY,
--     email VARCHAR(255) UNIQUE,
--     comment VARCHAR(255)
-- )

CREATE TABLE stack(
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE,
    comment VARCHAR(255)
)