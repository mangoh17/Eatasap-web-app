DROP TABLE IF EXISTS recipes;

CREATE TABLE recipes (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    ingredients VARCHAR(255) NOT NULL
);

INSERT INTO recipes (title, ingredients)
   VALUES ('Beans on toast'), ('1. Beans, 2. Bread, 3. Brown sauce')