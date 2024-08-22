DROP TABLE IF EXISTS pokemon;

CREATE TABLE pokemon (
    id INT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(50) NOT NULL,
    type VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO pokemon (name, type)
VALUES
    ('Pikachu', 'Electric'),
    ('Bulbasor', 'Grass'),
    ('Squirtle', 'Water'),
    ('Charmander', 'Fire');