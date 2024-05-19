create database DancingQueen;
use DancingQueen;
-- drop database sensfit
create table Usuario(
idUsuario int auto_increment,
nome varchar(20) not null,
email varchar(45) not null,
senha varchar(6) not null,

constraint pkUsuario primary key (idUsuario),
constraint uniEmail unique key (email));

select*from usuario;