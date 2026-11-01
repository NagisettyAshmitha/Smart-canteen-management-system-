USE canteen_db;

INSERT INTO foods (name, price, stock)
SELECT 'Mutton Biryani', 220, 15 WHERE NOT EXISTS (SELECT 1 FROM foods WHERE name = 'Mutton Biryani');
INSERT INTO foods (name, price, stock)
SELECT 'Veg Biryani', 120, 20 WHERE NOT EXISTS (SELECT 1 FROM foods WHERE name = 'Veg Biryani');
INSERT INTO foods (name, price, stock)
SELECT 'Paneer Biryani', 160, 15 WHERE NOT EXISTS (SELECT 1 FROM foods WHERE name = 'Paneer Biryani');

INSERT INTO foods (name, price, stock)
SELECT 'Chicken Fried Rice', 130, 20 WHERE NOT EXISTS (SELECT 1 FROM foods WHERE name = 'Chicken Fried Rice');
INSERT INTO foods (name, price, stock)
SELECT 'Egg Fried Rice', 100, 20 WHERE NOT EXISTS (SELECT 1 FROM foods WHERE name = 'Egg Fried Rice');
INSERT INTO foods (name, price, stock)
SELECT 'Schezwan Rice', 110, 20 WHERE NOT EXISTS (SELECT 1 FROM foods WHERE name = 'Schezwan Rice');
INSERT INTO foods (name, price, stock)
SELECT 'Veg Pulao', 100, 20 WHERE NOT EXISTS (SELECT 1 FROM foods WHERE name = 'Veg Pulao');

INSERT INTO foods (name, price, stock)
SELECT 'Vanilla Ice Cream', 50, 25 WHERE NOT EXISTS (SELECT 1 FROM foods WHERE name = 'Vanilla Ice Cream');
INSERT INTO foods (name, price, stock)
SELECT 'Chocolate Ice Cream', 60, 25 WHERE NOT EXISTS (SELECT 1 FROM foods WHERE name = 'Chocolate Ice Cream');
INSERT INTO foods (name, price, stock)
SELECT 'Strawberry Ice Cream', 60, 25 WHERE NOT EXISTS (SELECT 1 FROM foods WHERE name = 'Strawberry Ice Cream');
INSERT INTO foods (name, price, stock)
SELECT 'Butterscotch Ice Cream', 70, 25 WHERE NOT EXISTS (SELECT 1 FROM foods WHERE name = 'Butterscotch Ice Cream');

INSERT INTO foods (name, price, stock)
SELECT 'Margherita Pizza', 150, 12 WHERE NOT EXISTS (SELECT 1 FROM foods WHERE name = 'Margherita Pizza');
INSERT INTO foods (name, price, stock)
SELECT 'Farmhouse Pizza', 190, 12 WHERE NOT EXISTS (SELECT 1 FROM foods WHERE name = 'Farmhouse Pizza');
INSERT INTO foods (name, price, stock)
SELECT 'Paneer Pizza', 180, 12 WHERE NOT EXISTS (SELECT 1 FROM foods WHERE name = 'Paneer Pizza');
INSERT INTO foods (name, price, stock)
SELECT 'Chicken Pizza', 220, 12 WHERE NOT EXISTS (SELECT 1 FROM foods WHERE name = 'Chicken Pizza');

INSERT INTO foods (name, price, stock)
SELECT 'Veg Burger', 70, 20 WHERE NOT EXISTS (SELECT 1 FROM foods WHERE name = 'Veg Burger');
INSERT INTO foods (name, price, stock)
SELECT 'Cheese Burger', 90, 20 WHERE NOT EXISTS (SELECT 1 FROM foods WHERE name = 'Cheese Burger');
INSERT INTO foods (name, price, stock)
SELECT 'Chicken Burger', 120, 15 WHERE NOT EXISTS (SELECT 1 FROM foods WHERE name = 'Chicken Burger');
INSERT INTO foods (name, price, stock)
SELECT 'Double Patty Burger', 140, 12 WHERE NOT EXISTS (SELECT 1 FROM foods WHERE name = 'Double Patty Burger');

INSERT INTO foods (name, price, stock)
SELECT 'Veg Sandwich', 50, 20 WHERE NOT EXISTS (SELECT 1 FROM foods WHERE name = 'Veg Sandwich');
INSERT INTO foods (name, price, stock)
SELECT 'Cheese Sandwich', 70, 20 WHERE NOT EXISTS (SELECT 1 FROM foods WHERE name = 'Cheese Sandwich');
INSERT INTO foods (name, price, stock)
SELECT 'Grilled Sandwich', 80, 20 WHERE NOT EXISTS (SELECT 1 FROM foods WHERE name = 'Grilled Sandwich');
INSERT INTO foods (name, price, stock)
SELECT 'Chicken Sandwich', 110, 15 WHERE NOT EXISTS (SELECT 1 FROM foods WHERE name = 'Chicken Sandwich');

INSERT INTO foods (name, price, stock)
SELECT 'Plain Dosa', 40, 25 WHERE NOT EXISTS (SELECT 1 FROM foods WHERE name = 'Plain Dosa');
INSERT INTO foods (name, price, stock)
SELECT 'Idli', 35, 30 WHERE NOT EXISTS (SELECT 1 FROM foods WHERE name = 'Idli');
INSERT INTO foods (name, price, stock)
SELECT 'Medu Vada', 40, 25 WHERE NOT EXISTS (SELECT 1 FROM foods WHERE name = 'Medu Vada');

INSERT INTO foods (name, price, stock)
SELECT 'Veg Noodles', 80, 20 WHERE NOT EXISTS (SELECT 1 FROM foods WHERE name = 'Veg Noodles');
INSERT INTO foods (name, price, stock)
SELECT 'Egg Noodles', 100, 20 WHERE NOT EXISTS (SELECT 1 FROM foods WHERE name = 'Egg Noodles');
INSERT INTO foods (name, price, stock)
SELECT 'Chicken Noodles', 130, 15 WHERE NOT EXISTS (SELECT 1 FROM foods WHERE name = 'Chicken Noodles');
INSERT INTO foods (name, price, stock)
SELECT 'Schezwan Noodles', 110, 20 WHERE NOT EXISTS (SELECT 1 FROM foods WHERE name = 'Schezwan Noodles');

INSERT INTO foods (name, price, stock)
SELECT 'French Fries', 60, 25 WHERE NOT EXISTS (SELECT 1 FROM foods WHERE name = 'French Fries');
INSERT INTO foods (name, price, stock)
SELECT 'Chicken Nuggets', 100, 15 WHERE NOT EXISTS (SELECT 1 FROM foods WHERE name = 'Chicken Nuggets');
INSERT INTO foods (name, price, stock)
SELECT 'Samosa', 20, 30 WHERE NOT EXISTS (SELECT 1 FROM foods WHERE name = 'Samosa');
INSERT INTO foods (name, price, stock)
SELECT 'Spring Rolls', 70, 20 WHERE NOT EXISTS (SELECT 1 FROM foods WHERE name = 'Spring Rolls');

INSERT INTO foods (name, price, stock)
SELECT 'Coke', 30, 40 WHERE NOT EXISTS (SELECT 1 FROM foods WHERE name = 'Coke');
INSERT INTO foods (name, price, stock)
SELECT 'Sprite', 30, 40 WHERE NOT EXISTS (SELECT 1 FROM foods WHERE name = 'Sprite');
INSERT INTO foods (name, price, stock)
SELECT 'Thums Up', 30, 40 WHERE NOT EXISTS (SELECT 1 FROM foods WHERE name = 'Thums Up');
INSERT INTO foods (name, price, stock)
SELECT 'Fanta', 30, 40 WHERE NOT EXISTS (SELECT 1 FROM foods WHERE name = 'Fanta');

INSERT INTO foods (name, price, stock)
SELECT 'Chocolate Milkshake', 90, 15 WHERE NOT EXISTS (SELECT 1 FROM foods WHERE name = 'Chocolate Milkshake');
INSERT INTO foods (name, price, stock)
SELECT 'Oreo Milkshake', 110, 15 WHERE NOT EXISTS (SELECT 1 FROM foods WHERE name = 'Oreo Milkshake');
INSERT INTO foods (name, price, stock)
SELECT 'Strawberry Milkshake', 90, 15 WHERE NOT EXISTS (SELECT 1 FROM foods WHERE name = 'Strawberry Milkshake');
INSERT INTO foods (name, price, stock)
SELECT 'Mango Milkshake', 90, 15 WHERE NOT EXISTS (SELECT 1 FROM foods WHERE name = 'Mango Milkshake');

INSERT INTO foods (name, price, stock)
SELECT 'Tea', 15, 50 WHERE NOT EXISTS (SELECT 1 FROM foods WHERE name = 'Tea');
INSERT INTO foods (name, price, stock)
SELECT 'Coffee', 25, 40 WHERE NOT EXISTS (SELECT 1 FROM foods WHERE name = 'Coffee');
INSERT INTO foods (name, price, stock)
SELECT 'Badam Milk', 40, 20 WHERE NOT EXISTS (SELECT 1 FROM foods WHERE name = 'Badam Milk');
INSERT INTO foods (name, price, stock)
SELECT 'Hot Chocolate', 70, 15 WHERE NOT EXISTS (SELECT 1 FROM foods WHERE name = 'Hot Chocolate');
