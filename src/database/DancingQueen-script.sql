create database DancingQueen;
use DancingQueen;

-- drop database DancingQueen;

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
festival varchar(45) not null,
dataFestival date not null,
nota decimal(10,2) not null,
fkCoreografia int,

constraint pkFestival primary key (idFestival),
constraint fkCoreografiaFestival foreign key (fkCoreografia) references Coreografia(idCoreografia));

select*from Usuario;
select*from Coreografia;
select*from Festival;

insert into Usuario(nome,email,senha)
values('Giovanna','giovanna@gmail.com','1giobe');

insert into Coreografia(coreografia, categoria, fkUsuario)
values
('Gisele','Força',1),
('Kitri','Técnica',1),
('Cisne','Expressão',1);

insert into Festival(festival,dataFestival,nota,fkCoreografia)
values('A','2024-01-01',5,1),
('A','2024-03-03',8,1),
('A','2024-02-02',10,1),
('B','2024-01-01',7,2),
('B','2024-02-02',4,2),
('B','2024-03-03',10,2),
('C','2024-01-01',7,3),
('C','2024-02-02',6,3),
('C','2024-03-03',9,3);

SELECT  
nota,
dataFestival,
DATE_FORMAT(dataFestival,'%d/%m/%Y') as data_grafico
FROM festival
WHERE fkCoreografia = 1
ORDER BY fkCoreografia DESC LIMIT 4;


select coreografia,
round(avg(nota),1) as media
from festival
inner join coreografia on fkCoreografia = idCoreografia
where fkUsuario = 1
group by coreografia;

select categoria,
round(avg(nota),2) as media
from coreografia
inner join festival on fkCoreografia = idCoreografia
where fkUsuario = 1
group by categoria;

insert into Coreografia(coreografia, categoria, fkUsuario)
values('Copélia','Flexibilidade',1);


insert into Festival(festival,dataFestival,nota,fkCoreografia)
values('A','2024-01-01',5,4),
('A','2024-03-03',8,4),
('A','2024-02-02',10,4);

insert into Festival(festival,dataFestival,nota,fkCoreografia)
values('A','2024-01-01',10,3);

delete from festival
where fkCoreografia = 1;
delete from coreografia 
where idCoreografia = 1;

DELETE FROM festival, coreografia 
using festival, coreografia
where festival.fkCoreografia = 1 AND 
coreografia.idCoreografia =1;