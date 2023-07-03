DROP DATABASE IF EXISTS dbColegio;
CREATE DATABASE dbColegio;

USE dbColegio;
CREATE TABLE infoPer
(
	IDPER int auto_increment,
    NAMEPER varchar(80),
    LASTNMPER varchar(80),
    CELUSPER  char(9),
    DIRECPER varchar(80),
    EMAILPER varchar(80),
    MSGPER varchar(500),
    PRIMARY KEY(IDPER)
);

INSERT INTO infoPer
(NAMEPER, LASTNMPER, CELUSPER, DIRECPER, EMAILPER, MSGPER)
values 
('Lizbet Iris','Arias Tinco' ,'930548547','Nuevo Imperial','lizbet.arias@outlook.com','Deseo saber cuando con las incripciones del plantes para primaria'), 
('Andrea Luciana','Aguirre Meneses' ,'930566011','Imperial','andrea.meneses@outlook.com','Deseo saber las vacantes de la I.E.P');

SELECT * FROM infoPer;

/*CALENDARIO*/

CREATE TABLE calendario
(	IDCAL int auto_increment,
    NAMECAL	varchar(100),
    DESCCAL	varchar(500),
    DATECAL date,
    PRIMARY KEY (IDCAL)
);

/*DIAS CIVICOS ESCOLARES*/
INSERT INTO calendario (NAMECAL, DESCCAL, DATECAL) VALUES ('Día de la Canción Andina', 'descripción', STR_TO_DATE('2023/06/15', '%Y/%m/%d'));
INSERT INTO calendario (NAMECAL, DESCCAL, DATECAL) VALUES ('Día de la Canción Andina', 'descripción', STR_TO_DATE('2023/06/17', '%Y/%m/%d'));
INSERT INTO calendario (NAMECAL, DESCCAL, DATECAL) VALUES("Día Mundial de Lucha Contra la Desertificación y la Sequía", "descripción", STR_TO_DATE('2023/06/18', '%Y/%m/%d'));
SELECT * FROM calendario;


SELECT NAMECAL, DESCCAL, DATE_FORMAT(DATECAL, '%Y/%m/%d') AS DATECAL 
FROM calendario 
WHERE DATECAL = '2023-06-15';


SELECT * FROM calendario WHERE DATECAL = CURDATE();

