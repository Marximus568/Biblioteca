CREATE DATABASE biblioteca;
use biblioteca;

DROP TABLE IF EXISTS usuarios;
CREATE TABLE usuarios(
id_usuario INT PRIMARY KEY AUTO_INCREMENT,
nombre_completo VARCHAR(225),
identificacion INT UNIQUE,
correo VARCHAR(225),
telefono VARCHAR(225),
created_at TIMESTAMP,
update_at TIMESTAMP);


DROP TABLE IF EXISTS autores;
CREATE TABLE autores(
id_autor INT PRIMARY KEY AUTO_INCREMENT,
nombre_completo VARCHAR(225),
created_at TIMESTAMP,
update_at TIMESTAMP);


DROP TABLE IF EXISTS libros;
CREATE TABLE libros(
isbn VARCHAR(50) NOT NULL PRIMARY KEY,
nombre VARCHAR(225),
año_publicacion INT,
id_autor INT NULL,
created_at TIMESTAMP,
update_at TIMESTAMP,

FOREIGN KEY libros(id_autor) REFERENCES autores(id_autor) ON DELETE SET NULL ON UPDATE CASCADE
);

DROP TABLE IF EXISTS estados;
CREATE TABLE estados(
id_estado INT PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(225),
created_at TIMESTAMP,
update_at TIMESTAMP
);

DROP TABLE IF EXISTS prestamos;
CREATE TABLE prestamos(
id_prestamo INT PRIMARY KEY AUTO_INCREMENT,
fecha_prestamo DATE NULL,
fecha_devolucion DATE NULL,
id_estado INT NULL,
created_at TIMESTAMP,
update_at TIMESTAMP,

FOREIGN KEY (id_estado) REFERENCES estados(id_estado) ON DELETE SET NULL ON UPDATE CASCADE
);

