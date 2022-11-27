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