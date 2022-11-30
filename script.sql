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
    nombre varchar(250) NOT NULL,           -- Principal
    apellidoPat varchar(250) NOT NULL,
    apellidoMat varchar(250) NOT NULL,
    telefono varchar(10) NOT NULL,
    correo varchar(250) NOT NULL,            -- Principal
    psw varchar(250) NOT NULL,               -- Principal
    PRIMARY KEY (idCliente)
)