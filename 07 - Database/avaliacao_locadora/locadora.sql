CREATE TABLE public.cidade (
    codigo integer NOT NULL,
    nome character varying(200) NOT NULL,
    estado_uf character(2) NOT NULL
);


ALTER TABLE public.cidade OWNER TO postgres;

--
-- Name: cliente; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cliente (
    codigo integer NOT NULL,
    nome character varying(200) NOT NULL,
    email character varying(255),
    sexo character(1) NOT NULL,
    rg character varying(15),
    cpf character(14),
    rua character varying(255) NOT NULL,
    numero integer NOT NULL,
    bairro character varying(200) NOT NULL,
    complemento character varying(255),
    cep character(9) NOT NULL,
    data_nascimento date NOT NULL,
    cidade_codigo integer NOT NULL
);


ALTER TABLE public.cliente OWNER TO postgres;

--
-- Name: cor; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cor (
    codigo integer NOT NULL,
    nome character varying(100) NOT NULL
);


ALTER TABLE public.cor OWNER TO postgres;

--
-- Name: estado; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.estado (
    uf character(2) NOT NULL,
    nome character varying(200) NOT NULL
);


ALTER TABLE public.estado OWNER TO postgres;

--
-- Name: filial; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.filial (
    codigo integer NOT NULL,
    cnpj character(18) NOT NULL,
    inscricao_estadual character varying(15) NOT NULL,
    telefone character varying(255) NOT NULL,
    email character varying(255),
    rua character varying(200) NOT NULL,
    numero integer NOT NULL,
    complemento character varying(255),
    cep character(9) NOT NULL,
    bairro character varying(200) NOT NULL,
    cidade_codigo integer NOT NULL,
    locadora_codigo integer NOT NULL
);


ALTER TABLE public.filial OWNER TO postgres;

--
-- Name: funcionario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.funcionario (
    codigo integer NOT NULL,
    nome character varying(200) NOT NULL,
    email character varying(255),
    sexo character(1) NOT NULL,
    rg character varying(15),
    cpf character(14),
    numero_pis character(14),
    rua character varying(255) NOT NULL,
    numero integer NOT NULL,
    bairro character varying(200) NOT NULL,
    complemento character varying(255),
    cep character(9) NOT NULL,
    data_nascimento date NOT NULL,
    filial_codigo integer NOT NULL,
    cidade_codigo integer NOT NULL
);


ALTER TABLE public.funcionario OWNER TO postgres;

--
-- Name: locacao; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.locacao (
    codigo integer NOT NULL,
    situacao character(1) NOT NULL,
    datahora timestamp without time zone NOT NULL,
    datahora_locacao timestamp without time zone,
    datahora_devolucao timestamp without time zone,
    data_prevista_devolucao date,
    valor_total numeric(10,2),
    veiculo_codigo integer NOT NULL,
    locacao_funcionario_codigo integer,
    devolucao_funcionario_codigo integer,
    cliente_codigo integer NOT NULL,
    atrasado boolean DEFAULT false NOT NULL
);


ALTER TABLE public.locacao OWNER TO postgres;

--
-- Name: locadora; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.locadora (
    codigo integer NOT NULL,
    nome_fantasia character varying(200),
    razao_social character varying(200) NOT NULL
);


ALTER TABLE public.locadora OWNER TO postgres;

--
-- Name: opcionais; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.opcionais (
    codigo integer NOT NULL,
    nome character varying(200) NOT NULL
);


ALTER TABLE public.opcionais OWNER TO postgres;

--
-- Name: tipo_carro; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tipo_carro (
    codigo integer NOT NULL,
    nome character varying(45) NOT NULL
);


ALTER TABLE public.tipo_carro OWNER TO postgres;

--
-- Name: veiculo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.veiculo (
    codigo integer NOT NULL,
    marca character varying(100) NOT NULL,
    modelo character varying(100) NOT NULL,
    placa character(7) NOT NULL,
    renavam character(11) NOT NULL,
    capacidade_pessoas smallint,
    capacidade_carga numeric(5,2),
    capacidade_tanque numeric(5,2),
    blindado boolean,
    tipo_carro_codigo integer NOT NULL,
    valor_diaria numeric(10,2) NOT NULL,
    filial_codigo integer NOT NULL,
    cambio character varying(45),
    cor_codigo integer NOT NULL
);


ALTER TABLE public.veiculo OWNER TO postgres;

--
-- Name: veiculo_opcionais; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.veiculo_opcionais (
    veiculo_codigo integer NOT NULL,
    opcionais_codigo integer NOT NULL
);


ALTER TABLE public.veiculo_opcionais OWNER TO postgres;

--
-- Data for Name: cidade; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.cidade (codigo, nome, estado_uf) VALUES (1, 'Lajeado', 'RS');
INSERT INTO public.cidade (codigo, nome, estado_uf) VALUES (2, 'Estrela', 'RS');
INSERT INTO public.cidade (codigo, nome, estado_uf) VALUES (3, 'Arroio do Meio', 'RS');
INSERT INTO public.cidade (codigo, nome, estado_uf) VALUES (4, 'Teutônia', 'RS');
INSERT INTO public.cidade (codigo, nome, estado_uf) VALUES (5, 'Tubarão', 'SC');


--
-- Data for Name: cliente; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.cliente (codigo, nome, email, sexo, rg, cpf, rua, numero, bairro, complemento, cep, data_nascimento, cidade_codigo) VALUES (1, 'Cliente 1', 'E-mail 1', 'M', '', '              ', 'Rua 1', 1, 'Bairro 1', '', '00000-000', '1980-01-01', 1);
INSERT INTO public.cliente (codigo, nome, email, sexo, rg, cpf, rua, numero, bairro, complemento, cep, data_nascimento, cidade_codigo) VALUES (2, 'Cliente 2', 'E-mail 2', 'F', '', '              ', 'Rua 2', 2, 'Bairro 2', '', '00000-000', '1981-01-01', 2);
INSERT INTO public.cliente (codigo, nome, email, sexo, rg, cpf, rua, numero, bairro, complemento, cep, data_nascimento, cidade_codigo) VALUES (3, 'Cliente 3', 'E-mail 3', 'M', '', '              ', 'Rua 3', 3, 'Bairro 3', '', '00000-000', '1982-01-01', 3);
INSERT INTO public.cliente (codigo, nome, email, sexo, rg, cpf, rua, numero, bairro, complemento, cep, data_nascimento, cidade_codigo) VALUES (4, 'Cliente 4', 'E-mail 4', 'F', '', '              ', 'Rua 4', 4, 'Bairro 4', '', '00000-000', '1983-01-01', 1);
INSERT INTO public.cliente (codigo, nome, email, sexo, rg, cpf, rua, numero, bairro, complemento, cep, data_nascimento, cidade_codigo) VALUES (5, 'Cliente 5', 'E-mail 5', 'M', '', '              ', 'Rua 5', 5, 'Bairro 5', '', '00000-000', '1984-01-01', 2);
INSERT INTO public.cliente (codigo, nome, email, sexo, rg, cpf, rua, numero, bairro, complemento, cep, data_nascimento, cidade_codigo) VALUES (6, 'Cliente 6', 'E-mail 6', 'F', '', '              ', 'Rua 6', 6, 'Bairro 6', '', '00000-000', '1985-01-01', 3);
INSERT INTO public.cliente (codigo, nome, email, sexo, rg, cpf, rua, numero, bairro, complemento, cep, data_nascimento, cidade_codigo) VALUES (7, 'Cliente 7', 'E-mail 7', 'M', '', '              ', 'Rua 7', 7, 'Bairro 7', '', '00000-000', '1986-01-01', 1);
INSERT INTO public.cliente (codigo, nome, email, sexo, rg, cpf, rua, numero, bairro, complemento, cep, data_nascimento, cidade_codigo) VALUES (8, 'Cliente 8', 'E-mail 8', 'F', '', '              ', 'Rua 8', 8, 'Bairro 8', '', '00000-000', '1987-01-01', 1);
INSERT INTO public.cliente (codigo, nome, email, sexo, rg, cpf, rua, numero, bairro, complemento, cep, data_nascimento, cidade_codigo) VALUES (9, 'Cliente 9', 'E-mail 9', 'M', '', '              ', 'Rua 9', 9, 'Bairro 9', '', '00000-000', '1988-01-01', 2);
INSERT INTO public.cliente (codigo, nome, email, sexo, rg, cpf, rua, numero, bairro, complemento, cep, data_nascimento, cidade_codigo) VALUES (10, 'Cliente 10', 'E-mail 10', 'F', '', '              ', 'Rua 10', 10, 'Bairro 10', '', '00000-000', '1989-01-01', 3);


--
-- Data for Name: cor; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.cor (codigo, nome) VALUES (1, 'Prata');
INSERT INTO public.cor (codigo, nome) VALUES (2, 'Branco');
INSERT INTO public.cor (codigo, nome) VALUES (3, 'Preto');
INSERT INTO public.cor (codigo, nome) VALUES (4, 'Vermelho');


--
-- Data for Name: estado; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.estado (uf, nome) VALUES ('RS', 'Rio Grande do Sul');
INSERT INTO public.estado (uf, nome) VALUES ('SC', 'Santa Catarina');


--
-- Data for Name: filial; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.filial (codigo, cnpj, inscricao_estadual, telefone, email, rua, numero, complemento, cep, bairro, cidade_codigo, locadora_codigo) VALUES (1, '11.111.111/0001-11', '111.111.111.111', '(51) 3748-9090', 'crietilajeado@univates.br', 'Rua 1', 100, '', '95900-000', 'Florestal', 1, 1);
INSERT INTO public.filial (codigo, cnpj, inscricao_estadual, telefone, email, rua, numero, complemento, cep, bairro, cidade_codigo, locadora_codigo) VALUES (2, '11.111.111/0002-11', '222.222.222.22', '(51) 00000-0000', 'crietilajeado@univates.brestrela', 'Rua 2', 1000, '', '95980-000', 'Centro', 2, 1);


--
-- Data for Name: funcionario; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.funcionario (codigo, nome, email, sexo, rg, cpf, numero_pis, rua, numero, bairro, complemento, cep, data_nascimento, filial_codigo, cidade_codigo) VALUES (1, 'Funcionário 1', 'func1@crieti.com.br', 'M', '1231111111', '000.000.000-00', '1234567       ', 'Rua 1', 123, 'Bairro 1', '', '00000-000', '1980-01-01', 1, 1);
INSERT INTO public.funcionario (codigo, nome, email, sexo, rg, cpf, numero_pis, rua, numero, bairro, complemento, cep, data_nascimento, filial_codigo, cidade_codigo) VALUES (2, 'Funcionário 2', 'func2@crieti.com.br', 'F', '1234111111', '100.000.000-00', '1231          ', 'Rua 2', 16, 'Bairro 2', '', '00000-001', '1981-01-01', 1, 2);
INSERT INTO public.funcionario (codigo, nome, email, sexo, rg, cpf, numero_pis, rua, numero, bairro, complemento, cep, data_nascimento, filial_codigo, cidade_codigo) VALUES (3, 'Funcionário 3', 'func3@crieti.com.br', 'M', '12345611111', '200.000.000-00', '1312312312    ', 'Rua 3', 454, 'Bairro 3', '', '00000-002', '1982-01-01', 1, 1);
INSERT INTO public.funcionario (codigo, nome, email, sexo, rg, cpf, numero_pis, rua, numero, bairro, complemento, cep, data_nascimento, filial_codigo, cidade_codigo) VALUES (4, 'Funcionário 4', 'func4@crieti.com.br', 'F', '12345671111', '300.000.000-00', '123123123     ', 'Rua 4', 654, 'Bairro 4', '', '00000-003', '1983-01-01', 2, 1);
INSERT INTO public.funcionario (codigo, nome, email, sexo, rg, cpf, numero_pis, rua, numero, bairro, complemento, cep, data_nascimento, filial_codigo, cidade_codigo) VALUES (5, 'Funcionario 5', 'func5@crieti.com.br', 'M', '111111111', '              ', '123123123     ', 'Rua 5', 23, 'Bairro 5', '', '00000-004', '1984-01-01', 2, 2);
INSERT INTO public.funcionario (codigo, nome, email, sexo, rg, cpf, numero_pis, rua, numero, bairro, complemento, cep, data_nascimento, filial_codigo, cidade_codigo) VALUES (6, 'Funcionário 6', 'func6@crieti.com.br', 'F', '2222222222', '              ', '123213123     ', 'Rua 6', 56, 'Bairro 6', '', '00000-005', '1985-01-01', 2, 2);
INSERT INTO public.funcionario (codigo, nome, email, sexo, rg, cpf, numero_pis, rua, numero, bairro, complemento, cep, data_nascimento, filial_codigo, cidade_codigo) VALUES (7, 'Funcionario 7', 'func7@crieti.com.br', 'M', '3333333333', '              ', '123123123     ', 'Rua 7', 331, 'Bairro 7', '', '00000-006', '1986-01-01', 2, 5);
INSERT INTO public.funcionario (codigo, nome, email, sexo, rg, cpf, numero_pis, rua, numero, bairro, complemento, cep, data_nascimento, filial_codigo, cidade_codigo) VALUES (9, 'Funcionário 9', 'func9@crieti.com.br', 'M', '55555555555', '600.000.000-00', '123123123     ', 'Rua 9', 23, 'Bairro 9', '', '00000-008', '1988-01-01', 2, 5);


--
-- Data for Name: locacao; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.locacao (codigo, situacao, datahora, datahora_locacao, datahora_devolucao, data_prevista_devolucao, valor_total, veiculo_codigo, locacao_funcionario_codigo, devolucao_funcionario_codigo, cliente_codigo, atrasado) VALUES (12, 'E', '2022-06-01 09:11:00', '2022-06-02 09:11:00', NULL, '2022-07-14', NULL, 2, 2, NULL, 2, true);
INSERT INTO public.locacao (codigo, situacao, datahora, datahora_locacao, datahora_devolucao, data_prevista_devolucao, valor_total, veiculo_codigo, locacao_funcionario_codigo, devolucao_funcionario_codigo, cliente_codigo, atrasado) VALUES (15, 'E', '2022-06-01 09:14:00', '2022-06-02 09:14:00', NULL, '2022-07-14', NULL, 5, 5, NULL, 5, true);
INSERT INTO public.locacao (codigo, situacao, datahora, datahora_locacao, datahora_devolucao, data_prevista_devolucao, valor_total, veiculo_codigo, locacao_funcionario_codigo, devolucao_funcionario_codigo, cliente_codigo, atrasado) VALUES (19, 'E', '2022-06-01 09:18:00', '2022-06-02 09:18:00', NULL, '2022-07-14', NULL, 9, 9, NULL, 9, true);
INSERT INTO public.locacao (codigo, situacao, datahora, datahora_locacao, datahora_devolucao, data_prevista_devolucao, valor_total, veiculo_codigo, locacao_funcionario_codigo, devolucao_funcionario_codigo, cliente_codigo, atrasado) VALUES (11, 'E', '2022-06-01 09:10:00', '2022-06-02 09:10:00', NULL, '2022-07-15', NULL, 1, 1, NULL, 1, false);
INSERT INTO public.locacao (codigo, situacao, datahora, datahora_locacao, datahora_devolucao, data_prevista_devolucao, valor_total, veiculo_codigo, locacao_funcionario_codigo, devolucao_funcionario_codigo, cliente_codigo, atrasado) VALUES (13, 'E', '2022-06-01 09:12:00', '2022-06-02 09:12:00', NULL, '2022-07-15', NULL, 3, 3, NULL, 3, false);
INSERT INTO public.locacao (codigo, situacao, datahora, datahora_locacao, datahora_devolucao, data_prevista_devolucao, valor_total, veiculo_codigo, locacao_funcionario_codigo, devolucao_funcionario_codigo, cliente_codigo, atrasado) VALUES (14, 'E', '2022-06-01 09:13:00', '2022-06-02 09:13:00', NULL, '2022-07-15', NULL, 4, 4, NULL, 4, false);
INSERT INTO public.locacao (codigo, situacao, datahora, datahora_locacao, datahora_devolucao, data_prevista_devolucao, valor_total, veiculo_codigo, locacao_funcionario_codigo, devolucao_funcionario_codigo, cliente_codigo, atrasado) VALUES (16, 'E', '2022-06-01 09:15:00', '2022-06-02 09:15:00', NULL, '2022-07-15', NULL, 6, 6, NULL, 6, false);
INSERT INTO public.locacao (codigo, situacao, datahora, datahora_locacao, datahora_devolucao, data_prevista_devolucao, valor_total, veiculo_codigo, locacao_funcionario_codigo, devolucao_funcionario_codigo, cliente_codigo, atrasado) VALUES (17, 'E', '2022-06-01 09:16:00', '2022-06-02 09:16:00', NULL, '2022-07-15', NULL, 7, 7, NULL, 7, false);
INSERT INTO public.locacao (codigo, situacao, datahora, datahora_locacao, datahora_devolucao, data_prevista_devolucao, valor_total, veiculo_codigo, locacao_funcionario_codigo, devolucao_funcionario_codigo, cliente_codigo, atrasado) VALUES (20, 'E', '2022-06-01 09:19:00', '2022-06-02 09:19:00', NULL, '2022-07-15', NULL, 10, 1, NULL, 10, false);
INSERT INTO public.locacao (codigo, situacao, datahora, datahora_locacao, datahora_devolucao, data_prevista_devolucao, valor_total, veiculo_codigo, locacao_funcionario_codigo, devolucao_funcionario_codigo, cliente_codigo, atrasado) VALUES (18, 'E', '2022-06-01 09:17:00', '2022-06-02 09:17:00', NULL, '2022-07-15', NULL, 8, 7, NULL, 8, false);
INSERT INTO public.locacao (codigo, situacao, datahora, datahora_locacao, datahora_devolucao, data_prevista_devolucao, valor_total, veiculo_codigo, locacao_funcionario_codigo, devolucao_funcionario_codigo, cliente_codigo, atrasado) VALUES (8, 'D', '2022-05-01 09:07:00', '2022-05-02 09:07:00', '2022-05-06 09:07:00', '2022-05-07', 1100.00, 8, 7, 7, 8, false);
INSERT INTO public.locacao (codigo, situacao, datahora, datahora_locacao, datahora_devolucao, data_prevista_devolucao, valor_total, veiculo_codigo, locacao_funcionario_codigo, devolucao_funcionario_codigo, cliente_codigo, atrasado) VALUES (1, 'D', '2022-05-01 09:00:00', '2022-05-02 09:00:00', '2022-05-06 09:00:00', '2022-05-07', 605.00, 1, 1, 1, 1, false);
INSERT INTO public.locacao (codigo, situacao, datahora, datahora_locacao, datahora_devolucao, data_prevista_devolucao, valor_total, veiculo_codigo, locacao_funcionario_codigo, devolucao_funcionario_codigo, cliente_codigo, atrasado) VALUES (2, 'D', '2022-05-01 09:01:00', '2022-05-02 09:01:00', '2022-05-06 09:01:00', '2022-05-07', 605.00, 2, 2, 2, 2, false);
INSERT INTO public.locacao (codigo, situacao, datahora, datahora_locacao, datahora_devolucao, data_prevista_devolucao, valor_total, veiculo_codigo, locacao_funcionario_codigo, devolucao_funcionario_codigo, cliente_codigo, atrasado) VALUES (3, 'D', '2022-05-01 09:02:00', '2022-05-02 09:02:00', '2022-05-06 09:02:00', '2022-05-07', 715.00, 3, 3, 3, 3, false);
INSERT INTO public.locacao (codigo, situacao, datahora, datahora_locacao, datahora_devolucao, data_prevista_devolucao, valor_total, veiculo_codigo, locacao_funcionario_codigo, devolucao_funcionario_codigo, cliente_codigo, atrasado) VALUES (4, 'D', '2022-05-01 09:03:00', '2022-05-02 09:03:00', '2022-05-06 09:03:00', '2022-05-07', 715.00, 4, 4, 4, 4, false);
INSERT INTO public.locacao (codigo, situacao, datahora, datahora_locacao, datahora_devolucao, data_prevista_devolucao, valor_total, veiculo_codigo, locacao_funcionario_codigo, devolucao_funcionario_codigo, cliente_codigo, atrasado) VALUES (5, 'D', '2022-05-01 09:04:00', '2022-05-02 09:04:00', '2022-05-06 09:04:00', '2022-05-07', 605.00, 5, 5, 5, 5, false);
INSERT INTO public.locacao (codigo, situacao, datahora, datahora_locacao, datahora_devolucao, data_prevista_devolucao, valor_total, veiculo_codigo, locacao_funcionario_codigo, devolucao_funcionario_codigo, cliente_codigo, atrasado) VALUES (6, 'D', '2022-05-01 09:05:00', '2022-05-02 09:05:00', '2022-05-06 09:05:00', '2022-05-07', 825.00, 6, 6, 6, 6, false);
INSERT INTO public.locacao (codigo, situacao, datahora, datahora_locacao, datahora_devolucao, data_prevista_devolucao, valor_total, veiculo_codigo, locacao_funcionario_codigo, devolucao_funcionario_codigo, cliente_codigo, atrasado) VALUES (7, 'D', '2022-05-01 09:06:00', '2022-05-02 09:06:00', '2022-05-06 09:06:00', '2022-05-07', 880.00, 7, 7, 7, 7, false);
INSERT INTO public.locacao (codigo, situacao, datahora, datahora_locacao, datahora_devolucao, data_prevista_devolucao, valor_total, veiculo_codigo, locacao_funcionario_codigo, devolucao_funcionario_codigo, cliente_codigo, atrasado) VALUES (9, 'D', '2022-05-01 09:08:00', '2022-05-02 09:08:00', '2022-05-06 09:08:00', '2022-05-07', 1100.00, 9, 9, 9, 9, false);
INSERT INTO public.locacao (codigo, situacao, datahora, datahora_locacao, datahora_devolucao, data_prevista_devolucao, valor_total, veiculo_codigo, locacao_funcionario_codigo, devolucao_funcionario_codigo, cliente_codigo, atrasado) VALUES (10, 'D', '2022-05-01 09:09:00', '2022-05-02 09:09:00', '2022-05-06 09:09:00', '2022-05-07', 1375.00, 10, 1, 1, 10, false);
INSERT INTO public.locacao (codigo, situacao, datahora, datahora_locacao, datahora_devolucao, data_prevista_devolucao, valor_total, veiculo_codigo, locacao_funcionario_codigo, devolucao_funcionario_codigo, cliente_codigo, atrasado) VALUES (21, 'R', '2022-07-01 09:20:00', NULL, NULL, NULL, NULL, 1, NULL, NULL, 1, false);
INSERT INTO public.locacao (codigo, situacao, datahora, datahora_locacao, datahora_devolucao, data_prevista_devolucao, valor_total, veiculo_codigo, locacao_funcionario_codigo, devolucao_funcionario_codigo, cliente_codigo, atrasado) VALUES (22, 'R', '2022-07-01 09:21:00', NULL, NULL, NULL, NULL, 2, NULL, NULL, 2, false);
INSERT INTO public.locacao (codigo, situacao, datahora, datahora_locacao, datahora_devolucao, data_prevista_devolucao, valor_total, veiculo_codigo, locacao_funcionario_codigo, devolucao_funcionario_codigo, cliente_codigo, atrasado) VALUES (23, 'R', '2022-07-01 09:22:00', NULL, NULL, NULL, NULL, 3, NULL, NULL, 3, false);
INSERT INTO public.locacao (codigo, situacao, datahora, datahora_locacao, datahora_devolucao, data_prevista_devolucao, valor_total, veiculo_codigo, locacao_funcionario_codigo, devolucao_funcionario_codigo, cliente_codigo, atrasado) VALUES (24, 'R', '2022-07-01 09:23:00', NULL, NULL, NULL, NULL, 4, NULL, NULL, 4, false);


--
-- Data for Name: locadora; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.locadora (codigo, nome_fantasia, razao_social) VALUES (1, 'CRIE TI', 'CRIE TI LTDA');


--
-- Data for Name: opcionais; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.opcionais (codigo, nome) VALUES (1, 'Banco em couro');
INSERT INTO public.opcionais (codigo, nome) VALUES (2, 'Direção elétrica');
INSERT INTO public.opcionais (codigo, nome) VALUES (4, 'Sensor de estacionamento');
INSERT INTO public.opcionais (codigo, nome) VALUES (5, 'Rádio');
INSERT INTO public.opcionais (codigo, nome) VALUES (6, 'Controle de estabilidade');
INSERT INTO public.opcionais (codigo, nome) VALUES (7, 'Vidro elétrico');


--
-- Data for Name: tipo_carro; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.tipo_carro (codigo, nome) VALUES (1, 'Hatch');
INSERT INTO public.tipo_carro (codigo, nome) VALUES (2, 'Sedan');
INSERT INTO public.tipo_carro (codigo, nome) VALUES (3, 'SUV');
INSERT INTO public.tipo_carro (codigo, nome) VALUES (4, 'Caminhonete');
INSERT INTO public.tipo_carro (codigo, nome) VALUES (5, 'Camioneta');
INSERT INTO public.tipo_carro (codigo, nome) VALUES (6, 'Utilitário');
INSERT INTO public.tipo_carro (codigo, nome) VALUES (7, 'Pick-up');


--
-- Data for Name: veiculo; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.veiculo (codigo, marca, modelo, placa, renavam, capacidade_pessoas, capacidade_carga, capacidade_tanque, blindado, tipo_carro_codigo, valor_diaria, filial_codigo, cambio, cor_codigo) VALUES (1, 'Marca 1', 'Modelo 1', 'Placa 1', 'Renavam 1  ', 5, 0.00, 0.00, false, 1, 110.00, 1, 'M', 1);
INSERT INTO public.veiculo (codigo, marca, modelo, placa, renavam, capacidade_pessoas, capacidade_carga, capacidade_tanque, blindado, tipo_carro_codigo, valor_diaria, filial_codigo, cambio, cor_codigo) VALUES (2, 'Marca 2', 'Modelo 2', 'Placa 2', 'Renavam 2  ', 5, 0.00, 0.00, false, 1, 110.00, 1, 'A', 1);
INSERT INTO public.veiculo (codigo, marca, modelo, placa, renavam, capacidade_pessoas, capacidade_carga, capacidade_tanque, blindado, tipo_carro_codigo, valor_diaria, filial_codigo, cambio, cor_codigo) VALUES (3, 'Marca 3', 'Modelo 3', 'Placa 3', 'Renavam 3  ', 5, 0.00, 0.00, false, 1, 130.00, 2, 'A', 1);
INSERT INTO public.veiculo (codigo, marca, modelo, placa, renavam, capacidade_pessoas, capacidade_carga, capacidade_tanque, blindado, tipo_carro_codigo, valor_diaria, filial_codigo, cambio, cor_codigo) VALUES (4, 'Marca 4', 'Modelo 4', 'Placa 4', 'Renavam 4  ', 5, 0.00, 0.00, false, 1, 130.00, 2, 'M', 2);
INSERT INTO public.veiculo (codigo, marca, modelo, placa, renavam, capacidade_pessoas, capacidade_carga, capacidade_tanque, blindado, tipo_carro_codigo, valor_diaria, filial_codigo, cambio, cor_codigo) VALUES (7, 'Marca 7', 'Modelo 7', 'Placa 7', 'Renavam 7  ', 5, 0.00, 0.00, false, 2, 160.00, 1, 'A', 3);
INSERT INTO public.veiculo (codigo, marca, modelo, placa, renavam, capacidade_pessoas, capacidade_carga, capacidade_tanque, blindado, tipo_carro_codigo, valor_diaria, filial_codigo, cambio, cor_codigo) VALUES (8, 'Marca 8', 'Modelo 8', 'Placa 8', 'Renavam 8  ', 5, 0.00, 0.00, false, 3, 200.00, 2, 'M', 3);
INSERT INTO public.veiculo (codigo, marca, modelo, placa, renavam, capacidade_pessoas, capacidade_carga, capacidade_tanque, blindado, tipo_carro_codigo, valor_diaria, filial_codigo, cambio, cor_codigo) VALUES (10, 'Marca 10', 'Modelo 10', 'Plac 10', 'Renava 10  ', 5, 0.00, 0.00, false, 4, 250.00, 1, 'M', 4);
INSERT INTO public.veiculo (codigo, marca, modelo, placa, renavam, capacidade_pessoas, capacidade_carga, capacidade_tanque, blindado, tipo_carro_codigo, valor_diaria, filial_codigo, cambio, cor_codigo) VALUES (11, 'Marca 11', 'Modelo 11', 'Plac 11', 'Renava 11  ', 6, 0.00, 0.00, false, 7, 250.00, 1, 'A', 4);
INSERT INTO public.veiculo (codigo, marca, modelo, placa, renavam, capacidade_pessoas, capacidade_carga, capacidade_tanque, blindado, tipo_carro_codigo, valor_diaria, filial_codigo, cambio, cor_codigo) VALUES (5, 'Marca 5', 'Modelo 5', 'Placa 5', 'Renavam 5  ', 5, 0.00, 0.00, false, 1, 110.00, 2, 'A', 2);
INSERT INTO public.veiculo (codigo, marca, modelo, placa, renavam, capacidade_pessoas, capacidade_carga, capacidade_tanque, blindado, tipo_carro_codigo, valor_diaria, filial_codigo, cambio, cor_codigo) VALUES (6, 'Marca 6', 'Modelo 6', 'Placa 6', 'Renavam 6  ', 5, 0.00, 0.00, false, 2, 150.00, 2, 'M', 2);
INSERT INTO public.veiculo (codigo, marca, modelo, placa, renavam, capacidade_pessoas, capacidade_carga, capacidade_tanque, blindado, tipo_carro_codigo, valor_diaria, filial_codigo, cambio, cor_codigo) VALUES (9, 'Marca 9', 'Modelo 9', 'Placa 9', 'Renavam 9  ', 5, 0.00, 0.00, false, 3, 200.00, 2, 'M', 3);
INSERT INTO public.veiculo (codigo, marca, modelo, placa, renavam, capacidade_pessoas, capacidade_carga, capacidade_tanque, blindado, tipo_carro_codigo, valor_diaria, filial_codigo, cambio, cor_codigo) VALUES (12, 'Marca 12', 'Modelo 12', 'Plac 12', 'Renava 12  ', 7, 0.00, 0.00, false, 5, 250.00, 2, '', 4);


--
-- Data for Name: veiculo_opcionais; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.veiculo_opcionais (veiculo_codigo, opcionais_codigo) VALUES (1, 1);
INSERT INTO public.veiculo_opcionais (veiculo_codigo, opcionais_codigo) VALUES (1, 2);
INSERT INTO public.veiculo_opcionais (veiculo_codigo, opcionais_codigo) VALUES (2, 1);
INSERT INTO public.veiculo_opcionais (veiculo_codigo, opcionais_codigo) VALUES (2, 2);
INSERT INTO public.veiculo_opcionais (veiculo_codigo, opcionais_codigo) VALUES (3, 1);
INSERT INTO public.veiculo_opcionais (veiculo_codigo, opcionais_codigo) VALUES (4, 4);
INSERT INTO public.veiculo_opcionais (veiculo_codigo, opcionais_codigo) VALUES (5, 1);
INSERT INTO public.veiculo_opcionais (veiculo_codigo, opcionais_codigo) VALUES (6, 1);
INSERT INTO public.veiculo_opcionais (veiculo_codigo, opcionais_codigo) VALUES (6, 2);
INSERT INTO public.veiculo_opcionais (veiculo_codigo, opcionais_codigo) VALUES (6, 4);
INSERT INTO public.veiculo_opcionais (veiculo_codigo, opcionais_codigo) VALUES (6, 7);
INSERT INTO public.veiculo_opcionais (veiculo_codigo, opcionais_codigo) VALUES (7, 1);
INSERT INTO public.veiculo_opcionais (veiculo_codigo, opcionais_codigo) VALUES (8, 1);
INSERT INTO public.veiculo_opcionais (veiculo_codigo, opcionais_codigo) VALUES (10, 1);
INSERT INTO public.veiculo_opcionais (veiculo_codigo, opcionais_codigo) VALUES (11, 1);
INSERT INTO public.veiculo_opcionais (veiculo_codigo, opcionais_codigo) VALUES (11, 5);
INSERT INTO public.veiculo_opcionais (veiculo_codigo, opcionais_codigo) VALUES (11, 6);
INSERT INTO public.veiculo_opcionais (veiculo_codigo, opcionais_codigo) VALUES (12, 2);


--
-- Name: cidade cidade_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cidade
    ADD CONSTRAINT cidade_pkey PRIMARY KEY (codigo);


--
-- Name: cliente cliente_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT cliente_pkey PRIMARY KEY (codigo);


--
-- Name: cor cor_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cor
    ADD CONSTRAINT cor_pkey PRIMARY KEY (codigo);


--
-- Name: estado estado_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.estado
    ADD CONSTRAINT estado_pkey PRIMARY KEY (uf);


--
-- Name: filial filial_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.filial
    ADD CONSTRAINT filial_pkey PRIMARY KEY (codigo);


--
-- Name: funcionario funcionario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.funcionario
    ADD CONSTRAINT funcionario_pkey PRIMARY KEY (codigo);


--
-- Name: locacao locacao_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.locacao
    ADD CONSTRAINT locacao_pkey PRIMARY KEY (codigo);


--
-- Name: locadora locadora_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.locadora
    ADD CONSTRAINT locadora_pkey PRIMARY KEY (codigo);


--
-- Name: opcionais opcionais_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.opcionais
    ADD CONSTRAINT opcionais_pkey PRIMARY KEY (codigo);


--
-- Name: tipo_carro tipo_carro_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipo_carro
    ADD CONSTRAINT tipo_carro_pkey PRIMARY KEY (codigo);


--
-- Name: veiculo_opcionais veiculo_opcionais_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.veiculo_opcionais
    ADD CONSTRAINT veiculo_opcionais_pkey PRIMARY KEY (veiculo_codigo, opcionais_codigo);


--
-- Name: veiculo veiculo_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.veiculo
    ADD CONSTRAINT veiculo_pkey PRIMARY KEY (codigo);


--
-- Name: cidade cidade_estado_uf_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cidade
    ADD CONSTRAINT cidade_estado_uf_fkey FOREIGN KEY (estado_uf) REFERENCES public.estado(uf);


--
-- Name: cliente cliente_cidade_codigo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT cliente_cidade_codigo_fkey FOREIGN KEY (cidade_codigo) REFERENCES public.cidade(codigo);


--
-- Name: filial filial_cidade_codigo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.filial
    ADD CONSTRAINT filial_cidade_codigo_fkey FOREIGN KEY (cidade_codigo) REFERENCES public.cidade(codigo);


--
-- Name: filial filial_locadora_codigo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.filial
    ADD CONSTRAINT filial_locadora_codigo_fkey FOREIGN KEY (locadora_codigo) REFERENCES public.locadora(codigo);


--
-- Name: funcionario funcionario_cidade_codigo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.funcionario
    ADD CONSTRAINT funcionario_cidade_codigo_fkey FOREIGN KEY (cidade_codigo) REFERENCES public.cidade(codigo);


--
-- Name: funcionario funcionario_filial_codigo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.funcionario
    ADD CONSTRAINT funcionario_filial_codigo_fkey FOREIGN KEY (filial_codigo) REFERENCES public.filial(codigo);


--
-- Name: locacao locacao_cliente_codigo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.locacao
    ADD CONSTRAINT locacao_cliente_codigo_fkey FOREIGN KEY (cliente_codigo) REFERENCES public.cliente(codigo);


--
-- Name: locacao locacao_devolucao_funcionario_codigo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.locacao
    ADD CONSTRAINT locacao_devolucao_funcionario_codigo_fkey FOREIGN KEY (devolucao_funcionario_codigo) REFERENCES public.funcionario(codigo);


--
-- Name: locacao locacao_locacao_funcionario_codigo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.locacao
    ADD CONSTRAINT locacao_locacao_funcionario_codigo_fkey FOREIGN KEY (locacao_funcionario_codigo) REFERENCES public.funcionario(codigo);


--
-- Name: locacao locacao_veiculo_codigo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.locacao
    ADD CONSTRAINT locacao_veiculo_codigo_fkey FOREIGN KEY (veiculo_codigo) REFERENCES public.veiculo(codigo);


--
-- Name: veiculo veiculo_cor_codigo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.veiculo
    ADD CONSTRAINT veiculo_cor_codigo_fkey FOREIGN KEY (cor_codigo) REFERENCES public.cor(codigo);


--
-- Name: veiculo veiculo_filial_codigo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.veiculo
    ADD CONSTRAINT veiculo_filial_codigo_fkey FOREIGN KEY (filial_codigo) REFERENCES public.filial(codigo);


--
-- Name: veiculo_opcionais veiculo_opcionais_opcionais_codigo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.veiculo_opcionais
    ADD CONSTRAINT veiculo_opcionais_opcionais_codigo_fkey FOREIGN KEY (opcionais_codigo) REFERENCES public.opcionais(codigo);


--
-- Name: veiculo_opcionais veiculo_opcionais_veiculo_codigo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.veiculo_opcionais
    ADD CONSTRAINT veiculo_opcionais_veiculo_codigo_fkey FOREIGN KEY (veiculo_codigo) REFERENCES public.veiculo(codigo);


--
-- Name: veiculo veiculo_tipo_carro_codigo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.veiculo
    ADD CONSTRAINT veiculo_tipo_carro_codigo_fkey FOREIGN KEY (tipo_carro_codigo) REFERENCES public.tipo_carro(codigo);


--
-- PostgreSQL database dump complete
--

