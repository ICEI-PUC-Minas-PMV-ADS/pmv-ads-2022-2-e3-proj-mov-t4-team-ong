--
-- File generated with SQLiteStudio v3.3.3 on sáb out 8 20:38:19 2022
--
-- Text encoding used: System
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Table: Cadastro
CREATE TABLE Cadastro (
    IdDoador              VARCHAR (10)  PRIMARY KEY,
    Nome                  VARCHAR (20),
    Sobrenome             VARCHAR (100),
    Email                 VARCHAR (100),
    CPF                   CHAR (11),
    CategoriasDeInteresse CHAR (10) 
);


-- Table: CadastroONG
CREATE TABLE CadastroONG (
    IdFuncionario      VARCHAR (10)  PRIMARY KEY,
    Nome               VARCHAR (20),
    Sobrenome          VARCHAR (100),
    EmailInstitucional VARCHAR (100) 
);


-- Table: Comprovante
CREATE TABLE Comprovante (
    IdDoacao                    VARCHAR (20) REFERENCES DoacoesFinanceiras (IdDoacao),
    Montante                    CHAR (10),
    Destino                     VARCHAR (50),
    InstituicaoFinanceiraOrigem VARCHAR (20),
    IdDoador                    VARCHAR (10) REFERENCES Cadastro (IdDoador) 
);


-- Table: DoacoesFinanceiras
CREATE TABLE DoacoesFinanceiras (
    IdDoacao                     VARCHAR (20) PRIMARY KEY,
    Montante                     CHAR (10),
    Destino                      VARCHAR (50) REFERENCES ONG (IdOng),
    InstituicaoFinanceiraOrigem  VARCHAR (50),
    InstituicaoFinanceiraDestino VARCHAR (50),
    TipoDePagamento              VARCHAR (20) 
);


-- Table: DoacoesNaoFinanceiras
CREATE TABLE DoacoesNaoFinanceiras (
    Donativo  VARCHAR (50),
    Catagoria CHAR (10),
    Destino   VARCHAR (50) 
);


-- Table: ONG
CREATE TABLE ONG (
    IdOng    VARCHAR (10)  PRIMARY KEY,
    Nome     VARCHAR (50),
    Setor    CHAR (10),
    Endereco VARCHAR (100),
    CNPJ     CHAR (14) 
);


COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
