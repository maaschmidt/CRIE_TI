CREATE TABLE estado (
    uf character(2) PRIMARY KEY NOT NULL,
    nome character varying(200) NOT NULL
);

CREATE TABLE cidade (
    codigo integer PRIMARY KEY NOT NULL,
    nome character varying(200) NOT NULL,
    estado_uf character(2) NOT NULL,
    FOREIGN KEY (estado_uf) REFERENCES estado (uf)
);

CREATE TABLE locadora (
  codigo integer primary key NOT NULL,
  nome_fantasia VARCHAR(200),
  razao_social VARCHAR(200) NOT NULL
);

CREATE TABLE filial (
  codigo INT PRIMARY KEY NOT NULL,
  cnpj CHAR(18) NOT NULL,
  inscricao_estadual VARCHAR(15) NOT NULL,
  telefone VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  rua VARCHAR(200) NOT NULL,
  numero INT NOT NULL,
  complemento VARCHAR(255),
  cep CHAR(9) NOT NULL,
  bairro VARCHAR(200) NOT NULL,
  cidade_codigo INT NOT NULL,
  locadora_codigo INT NOT NULL,
  FOREIGN KEY (cidade_codigo) REFERENCES cidade(codigo),
  FOREIGN KEY (locadora_codigo) REFERENCES locadora(codigo)
);

CREATE TABLE funcionario (
  codigo INT primary key NOT NULL,
  nome VARCHAR(200) NOT NULL,
  email VARCHAR(255),
  sexo CHAR(1) NOT NULL,
  rg VARCHAR(15),
  cpf CHAR(14),
  numero_pis CHAR(14),
  rua VARCHAR(255) NOT NULL,
  numero INT NOT NULL,
  bairro VARCHAR(200) NOT NULL,
  complemento VARCHAR(255),
  cep CHAR(9) NOT NULL,
  data_nascimento DATE NOT NULL,
  filial_codigo INT NOT NULL,
  cidade_codigo INT NOT NULL,
  FOREIGN KEY (filial_codigo) REFERENCES filial(codigo),
  FOREIGN KEY (cidade_codigo) REFERENCES cidade(codigo)
);

CREATE TABLE cliente (
  codigo INT primary key NOT NULL,
  nome VARCHAR(200) NOT NULL,
  email VARCHAR(255),
  sexo CHAR(1) NOT NULL,
  rg VARCHAR(15),
  cpf CHAR(14),
  rua VARCHAR(255) NOT NULL,
  numero INT NOT NULL,
  bairro VARCHAR(200) NOT NULL,
  complemento VARCHAR(255),
  cep CHAR(9) NOT NULL,
  data_nascimento DATE NOT NULL,
  cidade_codigo INT NOT NULL,
  FOREIGN KEY (cidade_codigo) REFERENCES cidade(codigo)
);

CREATE TABLE tipo_carro (
  codigo INT primary key NOT NULL,
  nome VARCHAR(45) NOT NULL
);

CREATE TABLE opcionais (
  codigo INT primary key NOT NULL,
  nome VARCHAR(200) NOT NULL
);

CREATE TABLE veiculo (
  codigo INT primary key NOT NULL,
  marca VARCHAR(100) NOT NULL,
  modelo VARCHAR(100) NOT NULL,
  placa CHAR(7) NOT NULL,
  renavam CHAR(11) NOT NULL,
  capacidade_pessoas SMALLINT,
  capacidade_carga DECIMAL(5,2),
  capacidade_tanque DECIMAL(5,2),
  cor VARCHAR(100),
  blindado boolean,
  tipo_carro_codigo INT NOT NULL,
  valor_diaria DECIMAL(10,2) NOT NULL,
  filial_codigo INT NOT NULL,
  cambio VARCHAR(45),
  FOREIGN KEY (tipo_carro_codigo) REFERENCES tipo_carro(codigo),
  FOREIGN KEY (filial_codigo) REFERENCES filial(codigo)
);

CREATE TABLE veiculo_opcionais (
  veiculo_codigo INT NOT NULL,
  opcionais_codigo INT NOT NULL,
  PRIMARY KEY (veiculo_codigo, opcionais_codigo),
  FOREIGN KEY (veiculo_codigo) REFERENCES veiculo(codigo),
  FOREIGN KEY (opcionais_codigo) REFERENCES opcionais(codigo)
);

CREATE TABLE locacao (
  codigo INT PRIMARY KEY NOT NULL,
  situacao CHAR(1) NOT NULL,
  datahora timestamp NOT NULL,
  datahora_locacao timestamp,
  datahora_devolucao timestamp,
  data_prevista_devolucao date,
  valor_total numeric(10,2),
  veiculo_codigo INT NOT NULL,
  locacao_funcionario_codigo INT NULL,
  devolucao_funcionario_codigo INT NULL,
  cliente_codigo INT NOT NULL,
  FOREIGN KEY (veiculo_codigo) REFERENCES veiculo(codigo),
  FOREIGN KEY (locacao_funcionario_codigo) REFERENCES funcionario(codigo),
  FOREIGN KEY (devolucao_funcionario_codigo) REFERENCES funcionario(codigo),
  FOREIGN KEY (cliente_codigo) REFERENCES cliente(codigo)
);
