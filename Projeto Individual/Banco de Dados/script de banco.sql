CREATE DATABASE valorant;

USE valorant;

CREATE TABLE elo (
idElo int primary key auto_increment,
elo varchar(45))auto_increment = 100;


select * from jogador;

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

CREATE TABLE pontuacao (
idPontuacao int,
pontuacao int,
fkJogador int,
	foreign key (fkJogador) references jogador (idJogador),
    primary key (idPontuacao,fkJogador))auto_increment = 200;
    
    
    select * from pontuacao;
    
    


select * from jogador;
select * from elo;

INSERT INTO elo values
    (null,"Bronze"),
    (null,"Prata"),
    (null,"Ouro"),
    (null,"Platina"),
    (null,"Diamante"),
    (null,"Ascendente"),
    (null,"Imortal");
    
    INSERT INTO elo values
    (null,"Radiante");
    
    INSERT INTO jogador VALUES
    (null,"Gabriel","biel#2002", 'vava2023',100);