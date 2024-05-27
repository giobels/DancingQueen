create database DancingQueen;
use DancingQueen;

-- drop database dancingqueen;

create table Usuario(
idUsuario int auto_increment,
nome varchar(20) not null,
email varchar(45) not null,
senha varchar(6) not null,

constraint pkUsuario primary key (idUsuario),
constraint uniEmail unique key (email));

create table Coreografia(
idCoreografia int auto_increment,
coreografia varchar (20) not null,
categoria varchar(13) not null,
fkUsuario int,

constraint pkCoreografia primary key (idCoreografia),
-- constraint chkCategoria check  (categoria in('Flexibilidade','Força','Técnica','Expressão')),
constraint fkUsuarioCoreografia foreign key (fkUsuario) references Usuario (idUsuario));

create table Festival(
idFestival int auto_increment,
nome varchar(45) not null,
data date not null,
nota decimal(10,2) not null,
fkCoreografia int,

constraint pkFestival primary key (idFestival),
constraint fkCoreografiaFestival foreign key (fkCoreografia) references Coreografia(idCoreografia));

select*from usuario;
select*from Coreografia;





