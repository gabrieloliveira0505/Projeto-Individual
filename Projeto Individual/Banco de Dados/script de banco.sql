CREATE DATABASE valorant;

USE valorant;

CREATE TABLE elo (
idElo int primary key auto_increment,
elo varchar(45))auto_increment = 100;

CREATE TABLE jogador (
idJogador int primary key auto_increment,
nome varchar(45),
username varchar(45) unique,
agente varchar(45),
classe varchar(45),
senha varchar(45),
fkElo int,
	foreign key (fkElo) references elo (idElo)
);



    INSERT INTO elo values
    (null,"Radiante");
    
    INSERT INTO jogador VALUES
    (null,"Gabriel","biel#2002", 'vava2023',100);
    
    

