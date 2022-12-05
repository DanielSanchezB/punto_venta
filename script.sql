-- PRIMERA VERSIÓN DE SCRIPT DE BASE DE DATOS
-- Por implementar el resto de tablas

CREATE DATABASE punto_venta;

CREATE TABLE punto_venta.productos(
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    precio FLOAT, 
    cantidad INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE punto_venta.clientes(
    idCliente INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(250) NOT NULL,
    apellidoPat VARCHAR(250) NOT NULL,
    apellidoMat VARCHAR(250) NOT NULL,
    telefono VARCHAR(10) NOT NULL,
    correo VARCHAR(250) NOT NULL,
    psw VARCHAR(250) NOT NULL,
    PRIMARY KEY (idCliente)
);