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


CREATE TABLE questionario (
idQuestionario int auto_increment,
qtdQuestoes int,
fkJogador int,
	foreign key (fkJogador) references jogador (idJogador),
    primary key (idQuestionario,fkJogador));
    
    
CREATE TABLE pontuacao (
idPontuacao int auto_increment,
pontuacao int,
fkJogador int,
	foreign key (fkJogador) references jogador (idJogador),
    primary key (idPontuacao,fkJogador));
    
    INSERT INTO pontuacao values
    (null, 0, 1),
    (null, 1, 1),
    (null, 2, 1),
    (null, 3, 1),
    (null, 4, 1),
    (null, 5, 1),
    (null, 6, 1),
    (null, 7, 1),
    (null, 8, 1),
    (null, 9, 1),
    (null, 10, 1),
    (null, 11, 1),
    (null, 12, 1),
    (null, 13, 1),
    (null, 14, 1),
    (null, 15, 1);
    
    
    
    INSERT INTO elo values
    (null,"Bronze"),
    (null,"Prata"),
    (null,"Ouro"),
    (null,"Platina"),
    (null,"Diamante"),
    (null,"Ascendente"),
    (null,"Imortal"),
    (null,"Radiante");
   
    INSERT INTO jogador VALUES
    (null,"Gabriel","biel#2002",'Reyna','Duelista', 'vava2023',100);
    
    select * from pontuacao;
    
    
    select * from pontuacao where fkJogador = 1;
    
    
    
    
 
    
SELECT pontuacao as Pontuação FROM pontuacao join jogador  on 
fkJogador = idJogador;


select * from jogador;
select * from elo;

