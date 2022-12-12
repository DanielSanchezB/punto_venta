DROP DATABASE punto_venta;

CREATE DATABASE punto_venta;
USE punto_venta;

CREATE TABLE productos(
	id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    precio FLOAT, 
    cantidad INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE clientes(
	idCliente INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(250) NOT NULL,
    apellidoPat VARCHAR(250) NOT NULL,
    apellidoMat VARCHAR(250) NOT NULL,
    telefono VARCHAR(10) NOT NULL,
    correo VARCHAR(250) NOT NULL,
    psw VARCHAR(250) NOT NULL,
    num_ordenes INT NULL,
    PRIMARY KEY (idCliente)
);

CREATE TABLE orden(
	idOrden INT NOT NULL AUTO_INCREMENT,
    idCliente INT NOT NULL,
    cantidad INT NOT NULL,
    total FLOAT NOT NULL,
    PRIMARY KEY (idOrden),
    FOREIGN KEY (idCliente) REFERENCES clientes(idCliente)
);

CREATE TABLE productos_orden(
	idProdOrden INT NOT NULL AUTO_INCREMENT,
    idOrden INT NOT NULL,
    idProducto INT NOT NULL,
    cantidad INT NOT NULL,
    subtotal FLOAT NOT NULL,
    PRIMARY KEY (idProdOrden),
    FOREIGN KEY (idOrden) REFERENCES orden(idOrden),
    FOREIGN KEY (idProducto) REFERENCES productos(id)
);

INSERT INTO clientes(nombre, apellidoPat, apellidoMat, telefono, correo, psw) VALUES 
('Daniel', 'Sanchez', 'Bautista', 7714262978, 'sbautistadaniel@outlook.com', '12345'),
('Ricardo', 'Ramos', 'Hernandez', 7711778847, 'richar822882@gmail.com', '12345');

INSERT INTO productos(nombre, precio, cantidad) VALUES 
('Chuleta', 50, 19),
('Queso', 40, 27),
('Jabon', 18, 40),
('Salchica', 2, 150),
('Pan', 6, 68),
('Chocolate', 23, 100),
('Pambazo', 25, 16),
('Jicama', 10, 8),
('Paleta', 3, 33),
('Tostada', 30, 8),
('Té', 10, 37),
('Cajeta', 65, 7);

INSERT INTO orden(idCliente, cantidad, total) VALUES 
(1, 0, 0),
(2, 0, 0),
(1, 0, 0),
(2, 0, 0);

INSERT INTO productos_orden(idOrden, idProducto, cantidad, subtotal) VALUES 
(1, 1, 1, 50),
(1, 2, 3, 120),
(1, 3, 3, 54),
(1, 4, 1, 2),
(2, 5, 2, 12),
(2, 6, 1, 23),
(2, 2, 3, 120),
(2, 7, 2, 50),
(3, 8, 1, 10),
(3, 9, 5, 15),
(3, 10, 1, 30),
(4, 10, 5, 150),
(4, 3, 8, 144),
(4, 5, 10, 30);