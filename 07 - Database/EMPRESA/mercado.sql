--
-- PostgreSQL database dump
--

-- Dumped from database version 11.11 (Ubuntu 11.11-1.pgdg18.04+1)
-- Dumped by pg_dump version 11.6 (Ubuntu 11.6-1.pgdg18.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = off;
SELECT pg_catalog.set_config('search_path', 'public', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET escape_string_warning = off;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: cargo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cargo (
    codigo integer NOT NULL,
    nome character varying(200) NOT NULL,
    salario_base numeric(10,2),
    total_descontos numeric(10,2),
    total_bonificacao numeric(10,2),
    carga_horaria numeric(4,2)
);


ALTER TABLE public.cargo OWNER TO postgres;

--
-- Name: cidade; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cidade (
    codigo integer NOT NULL,
    nome character varying(200) NOT NULL,
    estado_uf character(2) NOT NULL
);


ALTER TABLE public.cidade OWNER TO postgres;

--
-- Name: empresa; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.empresa (
    codigo integer NOT NULL,
    nome_fantasia character varying(200),
    razao_social character varying(200) NOT NULL
);


ALTER TABLE public.empresa OWNER TO postgres;

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
    empresa_codigo integer NOT NULL,
    cidade_codigo integer NOT NULL
);


ALTER TABLE public.filial OWNER TO postgres;

--
-- Name: fornecedor; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.fornecedor (
    codigo integer NOT NULL,
    nome character varying(200) NOT NULL,
    cidade_codigo integer NOT NULL,
    rua character varying(200) NOT NULL,
    numero integer NOT NULL,
    complemento character varying(255),
    cep character(9) NOT NULL,
    bairro character varying(200),
    telefone character(14),
    email character varying(255)
);


ALTER TABLE public.fornecedor OWNER TO postgres;

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
    cargo_codigo integer NOT NULL,
    cidade_codigo integer NOT NULL
);


ALTER TABLE public.funcionario OWNER TO postgres;

--
-- Name: prateleira; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.prateleira (
    codigo integer NOT NULL,
    numero integer NOT NULL,
    setor character varying(200) NOT NULL
);


ALTER TABLE public.prateleira OWNER TO postgres;

--
-- Name: produto; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.produto (
    codigo integer NOT NULL,
    nome character varying(200) NOT NULL,
    prateleira_codigo integer NOT NULL,
    unidade_medida_unidade_medida character(3) NOT NULL,
    tipo_produto_codigo integer NOT NULL,
    fornecedor_codigo integer NOT NULL,
    nome_compacto character varying(24) NOT NULL,
    valor_unitario numeric(10,2) NOT NULL,
    altura numeric(10,2),
    largura numeric(10,2),
    peso_bruto numeric(10,2) NOT NULL,
    peso_liquido numeric(10,2) NOT NULL,
    estoque numeric(11,2)
);


ALTER TABLE public.produto OWNER TO postgres;

--
-- Name: produto_filial; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.produto_filial (
    produto_codigo integer NOT NULL,
    filial_codigo integer NOT NULL
);


ALTER TABLE public.produto_filial OWNER TO postgres;

--
-- Name: produto_venda; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.produto_venda (
    produto_codigo integer NOT NULL,
    venda_codigo integer NOT NULL,
    quantidade numeric(11,2) NOT NULL
);


ALTER TABLE public.produto_venda OWNER TO postgres;

--
-- Name: telefone_funcionario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.telefone_funcionario (
    telefone character varying(15) NOT NULL,
    funcionario_codigo integer NOT NULL
);


ALTER TABLE public.telefone_funcionario OWNER TO postgres;

--
-- Name: tipo_produto; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tipo_produto (
    codigo integer NOT NULL,
    nome character varying(200) NOT NULL
);


ALTER TABLE public.tipo_produto OWNER TO postgres;

--
-- Name: unidade_medida; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.unidade_medida (
    unidade_medida character(3) NOT NULL,
    descricao character varying(200) NOT NULL
);


ALTER TABLE public.unidade_medida OWNER TO postgres;

--
-- Name: venda; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.venda (
    codigo integer NOT NULL,
    datahora timestamp without time zone NOT NULL,
    funcionario_codigo integer NOT NULL
);


ALTER TABLE public.venda OWNER TO postgres;

--
-- Data for Name: cargo; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cargo (codigo, nome, salario_base, total_descontos, total_bonificacao, carga_horaria) FROM stdin;
1	Atendente	1600.00	\N	\N	8.75
2	Repositor	1600.00	\N	\N	8.75
3	Gerente de loja	5000.00	\N	\N	8.75
\.


--
-- Data for Name: cidade; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cidade (codigo, nome, estado_uf) FROM stdin;
1	Lajeado	RS
2	Estrela	RS
3	Teutônia	RS
4	Taquari	RS
5	Roca Sales	RS
6	Tubarão	SC
\.


--
-- Data for Name: empresa; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.empresa (codigo, nome_fantasia, razao_social) FROM stdin;
1	Mercadão CRIE TI	CRIE TI LTDA
\.


--
-- Data for Name: estado; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.estado (uf, nome) FROM stdin;
RS	Rio Grande do Sul
SC	Santa Catarina
\.


--
-- Data for Name: filial; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.filial (codigo, cnpj, inscricao_estadual, telefone, email, rua, numero, complemento, cep, bairro, empresa_codigo, cidade_codigo) FROM stdin;
1	11.111.111/0001-11	111.111.111.111	(51) 3748-9090	filial1@crieti.com.br	Rua A	100		95900-000	Universitário	1	1
2	11.111.111/0002-11	222.222.222.22	(51) 3720-9090	filial2@crieti.com.br	Rua B	348		95800-000	BI	1	2
3	11.111.111/0003-11	333.333.333.33	(51) 3762-9090	filial3@crieti.com.br	Rua C	83		95890-000	Languiru	1	3
\.


--
-- Data for Name: fornecedor; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.fornecedor (codigo, nome, cidade_codigo, rua, numero, complemento, cep, bairro, telefone, email) FROM stdin;
1	Campo de minas	1	Rua dos Tigres	15		95800-000	Alto da Bronze	(51) 3712-9091	camposminas@gmail.com
2	Carnes do RS	1	Emilio COnrado	120		95900-000	Moinhos	(51) 3714-3030	carnesrs@gmail.com
3	Foki	3	Chuchu	400		95878-000	Moinhos	(51) 3700-4030	foki@gmail.com
4	For baby	3	João Brito	560		95878-000	Florestal	(51) 3700-4030	forbaby@forbaby.com
5	Frutaria do Sul	2	Maria Dutra	15		95800-000	Centro	(51) 3712-9091	frutariadosul@gmail.com
6	Gãos&Grãos	2	Mariana Gal	123		95800-000	Centro	(51) 3712-7654	graosgraos@gmail.com
7	Higiênicos da Laura	2	Dom Pedro	123		95800-000	Alto da Bronze	(51) 3712-1234	higlaura@gmail.com
8	Higiênicos do Carlos	1	Benjamin Constant	1100		95900-000	Montanha	(51) 3714-8932	carloshigienicos@gmail.com
9	Iogurteria	1	Benjamin Constant	1600		95900-000	Moinhos D' Água	(51) 3714-5051	iogurteria@iogurteria.com
10	Izabel biscoitos	1	Alberto Pasqualini	1568		95900-000	Americano	(51) 3714-5090	izabelbiscoitos@iogurteria.com
11	JBS	3	Carlos Arnt	120		95700-000	Canabarro	(51) 3762-5030	jbsteutonia@jbs.com
12	João Frutas	3	Carlos Arnt	400		95700-000	Canabarro	(51) 3762-7821	joaofrutas@gmail.com
13	Lã Sul	3	Josué Silveira	100		95700-000	Canabarro	(51) 3762-1253	lasul@gmail.com
15	Nadia	1	Tereza Cristina	500		95900-000	Florestal	(51) 3714-1200	nadianadia@gmail.com
16	Natures	1	João Gaspar	500		95900-000	Florestal	(51) 3714-1250	naturesecia@gmail.com
17	Pano Sul	2	Setembrino Jesus	490		95800-000	Bairro das Industrias	(51) 3712-2020	panosul@gmail.com
18	Risca	2	Josué Feliz	200		95800-000	Bairro das Industrias	(51) 3712-3020	riscarisca@gmail.com
19	Vinho do Sul	2	Carla Gaz	320		95800-000	Centro	(51) 3712-0020	vinhodosul@gmail.com
20	Zé HortiFruti	1	Alberto Pasqualini	2800		95900-000	Centro	(51) 3714-1873	hortifrutize@gmail.com
14	Maria massas	1	Alberto Pasqualini	1200		95900-000	Americano	(51) 3714-8912	mariamassas@gmail.com
\.


--
-- Data for Name: funcionario; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.funcionario (codigo, nome, email, sexo, rg, cpf, numero_pis, rua, numero, bairro, complemento, cep, data_nascimento, filial_codigo, cargo_codigo, cidade_codigo) FROM stdin;
1	João de Deus		F	0000000000	000.000.000-00	\N	Joaquina Silva	1001	Americano		95900-000	1986-09-12	1	1	1
2	Maria de Jesus		M	2222222222	111.111.000-00	\N	Duque de Caxias	390	Florestal		95900-000	1992-01-05	1	1	1
3	Fabiano Fernanandes		M	3333333333	222.111.000-00	\N	Alvaro Tavares	120	Centro		95900-000	1988-04-23	1	2	1
4	Joice Maria		F	44444444	343.111.000-00	\N	Marcelino Dickel	700	Centro		95800-000	1987-02-18	2	1	2
5	Pedro Mallmann		M	55555555	444.111.000-00	\N	Emilio Conrado	98	Canarias		95800-000	1990-03-10	2	1	1
6	Gabriela Kick		F	6666666666	555.111.000-00	\N	Rio Branco	400	Canarias		95800-000	1991-06-10	2	2	2
\.


--
-- Data for Name: prateleira; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.prateleira (codigo, numero, setor) FROM stdin;
1	1	Casa
2	2	Bebidas
4	4	Produtos higiêne
5	5	Bolachas
6	6	Frutass
7	7	Produtos de limpeza
8	8	Massas
9	9	Produtos naturais
10	10	Vestuário
3	3	Congelados
\.


--
-- Data for Name: produto; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.produto (codigo, nome, prateleira_codigo, unidade_medida_unidade_medida, tipo_produto_codigo, fornecedor_codigo, nome_compacto, valor_unitario, altura, largura, peso_bruto, peso_liquido, estoque) FROM stdin;
36	Xicara café	1	Un 	1	15	Xicara	8.50	0.00	0.00	0.00	0.00	14.00
29	Vinho	2	Un 	2	19	Vinho tinto	65.00	0.00	0.00	0.00	0.00	30.00
30	Iogurte	2	Un 	3	9	Iogurte	8.79	0.00	0.00	0.00	0.00	50.00
38	Escova de cabelo	4	Un 	4	18	Escova cabe	32.00	0.00	0.00	0.00	0.00	8.00
39	Esmalte	4	Un 	4	18	Esmalte	6.79	0.00	0.00	0.00	0.00	35.00
27	Bolacha salgada	5	Un 	5	10	Bolac salg	5.98	0.00	0.00	0.00	0.00	15.00
28	Bolacha de chocolate	5	Un 	5	10	Bolac choc	6.50	0.00	0.00	0.00	0.00	20.00
11	Carne moída 1º	3	Kg 	6	2	Carn moi 1	40.00	0.00	0.00	0.00	0.00	400.00
12	Carne moída 2º	3	Kg 	6	2	Carn moi 2	35.00	0.00	0.00	0.00	0.00	500.00
13	Costela suína	3	Kg 	6	11	Cost suin	20.00	0.00	0.00	0.00	0.00	300.00
14	Costela rês	3	Kg 	6	2	Cost res	30.00	0.00	0.00	0.00	0.00	300.00
35	Pão de queijo congelado	3	Un 	7	1	Pão Queijo	9.98	0.00	0.00	0.00	0.00	20.00
18	Arroz Branco	9	Un 	8	6	Arroz bra	7.00	15.00	15.00	1000.00	1000.00	150.00
19	Feijão marrom	9	Un 	8	6	Feijao mar	10.00	15.00	15.00	500.00	500.00	200.00
33	Aveia	9	Un 	8	16	Aveia	9.80	0.00	0.00	0.00	0.00	30.00
34	Granola	9	Un 	8	16	Granol	19.90	0.00	0.00	0.00	0.00	30.00
20	Papel higiênico 1	4	Un 	9	7	Papel hig	15.00	25.00	25.00	100.00	100.00	50.00
21	Pasta de dente	4	Un 	9	7	Pasta dent	7.99	4.00	15.00	90.00	90.00	15.00
22	Escova de dente	4	Un 	9	7	Escov den	12.99	0.00	0.00	0.00	0.00	20.00
23	Fita dental	4	Un 	9	7	Fita den	20.00	0.00	0.00	0.00	0.00	10.00
24	Sabonete	4	Un 	9	8	Sabonete	3.50	0.00	0.00	0.00	0.00	0.00
25	Xampoo	4	Un 	9	8	Xampoo	19.45	0.00	0.00	0.00	0.00	10.00
26	Hastes flexíveis	4	Un 	9	8	Hast flex	12.30	0.00	0.00	0.00	0.00	30.00
40	Fraldas	4	Un 	9	4	Fralda	49.90	0.00	0.00	0.00	0.00	40.00
31	Panos de copa	7	Un 	11	17	Pano copa	6.99	0.00	0.00	0.00	0.00	80.00
15	Massa tipo 1	8	Un 	12	14	Massa 1	6.00	20.00	15.00	500.00	500.00	100.00
16	Massa tipo 2	8	Un 	12	14	Massa 2	6.00	20.00	15.00	500.00	500.00	99.00
17	Massa tipo 3	8	Un 	12	14	Massa 2	6.00	20.00	15.00	500.00	500.00	120.00
32	Farofa temperada	9	Un 	13	3	Farofa	5.49	0.00	0.00	0.00	0.00	20.00
37	Chinelo de lã	10	Un 	14	13	Chinelo lã	29.90	0.00	0.00	0.00	0.00	20.00
1	Batata Inglesa	6	Kg 	10	20	Batat Ing	5.99	0.00	0.00	0.00	0.00	150.00
2	Batata doce	6	Kg 	10	20	Batat doc	3.99	0.00	0.00	0.00	0.00	100.00
3	Banana prata	6	Kg 	10	12	Banan prata	6.99	0.00	0.00	0.00	0.00	200.00
4	Banana caturra	6	Kg 	10	12	Banan cat	4.99	0.00	0.00	0.00	0.00	150.00
5	Maça gala	6	Kg 	10	12	Maca gal	7.99	0.00	0.00	0.00	0.00	150.00
6	Maça fugi	6	Kg 	10	12	Maca fug	8.99	0.00	0.00	0.00	0.00	100.00
7	Laranja suco	6	Kg 	10	12	Laran suc	3.99	0.00	0.00	0.00	0.00	300.00
8	Laranja umbigo	6	Kg 	10	12	Laran umb	4.99	0.00	0.00	0.00	0.00	299.00
9	Mamão papaia	6	Kg 	10	5	Mam papa	10.90	0.00	0.00	0.00	0.00	100.00
10	Limão Galego	6	Kg 	10	5	Limao gal	1.99	0.00	0.00	0.00	0.00	50.00
\.


--
-- Data for Name: produto_filial; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.produto_filial (produto_codigo, filial_codigo) FROM stdin;
36	1
36	2
36	3
29	1
29	2
29	3
30	1
30	2
30	3
38	1
38	2
38	3
39	1
39	2
39	3
27	1
27	2
27	3
28	1
28	2
28	3
11	1
11	2
11	3
12	1
12	2
12	3
13	1
13	2
13	3
14	1
14	2
14	3
35	1
35	2
35	3
18	1
18	2
18	3
19	1
19	2
19	3
33	1
33	2
33	3
34	1
34	2
34	3
20	1
20	2
20	3
21	1
21	2
21	3
22	1
22	2
22	3
23	1
23	2
23	3
24	1
24	2
24	3
25	1
25	2
25	3
26	1
26	2
26	3
40	1
40	2
40	3
31	1
31	2
31	3
15	1
15	2
15	3
16	1
16	2
16	3
17	1
17	2
17	3
32	1
32	2
32	3
37	1
37	2
37	3
1	1
1	2
1	3
2	1
2	2
2	3
3	1
3	2
3	3
4	1
4	2
4	3
5	1
5	2
5	3
6	1
6	2
6	3
7	1
7	2
7	3
8	1
8	2
8	3
9	1
9	2
9	3
10	1
10	2
10	3
\.


--
-- Data for Name: produto_venda; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.produto_venda (produto_codigo, venda_codigo, quantidade) FROM stdin;
1	1	1.00
2	1	1.00
3	1	2.00
4	1	3.00
1	2	1.00
5	2	2.00
6	2	4.00
7	2	6.00
20	3	1.00
30	3	2.00
33	3	4.00
1	4	6.00
4	4	8.00
6	4	1.00
7	4	2.00
15	4	4.00
25	4	5.00
40	4	1.00
10	5	2.00
11	5	4.00
15	5	1.00
19	5	6.00
33	5	7.00
21	6	8.00
25	6	1.00
28	6	2.00
38	6	4.00
2	7	6.00
7	7	4.00
14	7	3.00
18	7	1.00
22	7	2.00
29	7	4.00
9	8	6.00
10	8	1.00
12	8	3.00
36	8	4.00
40	9	6.00
1	9	1.00
7	9	2.00
31	9	3.00
21	9	1.00
26	9	3.00
6	9	4.00
6	10	7.00
9	10	1.00
11	10	2.00
7	11	5.00
9	11	1.00
17	11	1.00
36	11	2.00
8	12	4.00
38	12	5.00
34	12	1.00
25	12	2.00
2	12	4.00
7	12	1.00
6	13	6.00
8	13	1.00
12	13	4.00
16	13	1.00
22	13	2.00
27	13	3.00
5	14	1.00
9	14	3.00
26	14	1.00
29	14	3.00
30	14	4.00
34	14	5.00
8	15	1.00
9	15	3.00
12	15	4.00
20	15	5.00
30	15	6.00
9	16	1.00
6	16	1.00
40	16	3.00
34	16	1.00
4	16	2.00
7	16	1.00
8	17	2.00
5	17	4.00
14	17	5.00
11	17	1.00
37	17	3.00
4	18	4.00
8	18	1.00
12	18	3.00
17	18	3.00
6	19	1.00
12	19	2.00
18	19	1.00
30	19	4.00
38	20	1.00
35	20	1.00
24	20	4.00
21	20	1.00
\.


--
-- Data for Name: telefone_funcionario; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.telefone_funcionario (telefone, funcionario_codigo) FROM stdin;
(51) 00000-0000	1
(51) 11111-0000	1
(51) 22222-2221	2
(51) 33333-2222	3
(51) 44444-2222	4
(51) 55555-2222	5
(51) 22222-2222	2
\.


--
-- Data for Name: tipo_produto; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tipo_produto (codigo, nome) FROM stdin;
1	Artigos de casa
2	Bebida alcoolica
3	Bebidas
4	Beleza
5	Biscoitos
6	Carnes
7	Congelados
8	Grãos
9	Higiene pessoal
10	Hortifruti
11	Limpeza
12	Massas
13	Temperos
14	Vestuário
\.


--
-- Data for Name: unidade_medida; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.unidade_medida (unidade_medida, descricao) FROM stdin;
Kg 	Quilograma
Un 	Unitário
L  	Litro
g  	Grama
\.


--
-- Data for Name: venda; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.venda (codigo, datahora, funcionario_codigo) FROM stdin;
1	2022-06-01 08:00:00	1
2	2022-06-02 09:00:01	2
3	2022-06-03 10:00:02	1
4	2022-06-06 11:00:03	2
5	2022-06-05 08:00:04	2
6	2022-06-06 14:00:05	1
7	2022-06-07 15:00:06	1
8	2022-06-08 08:00:07	2
9	2022-06-09 09:00:08	4
10	2022-06-10 19:00:09	4
11	2022-06-11 18:00:10	5
12	2022-06-12 08:00:11	1
13	2022-06-13 12:00:12	2
14	2022-06-14 13:00:13	5
15	2022-06-15 14:00:14	6
16	2022-06-16 08:00:15	1
17	2022-06-17 09:00:16	5
18	2022-06-18 10:00:17	4
19	2022-06-19 11:00:18	1
20	2022-06-20 12:00:19	2
\.


--
-- Name: cargo cargo_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cargo
    ADD CONSTRAINT cargo_pkey PRIMARY KEY (codigo);


--
-- Name: cidade cidade_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cidade
    ADD CONSTRAINT cidade_pkey PRIMARY KEY (codigo);


--
-- Name: empresa empresa_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.empresa
    ADD CONSTRAINT empresa_pkey PRIMARY KEY (codigo);


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
-- Name: fornecedor fornecedor_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.fornecedor
    ADD CONSTRAINT fornecedor_pkey PRIMARY KEY (codigo);


--
-- Name: funcionario funcionario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.funcionario
    ADD CONSTRAINT funcionario_pkey PRIMARY KEY (codigo);


--
-- Name: prateleira prateleira_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.prateleira
    ADD CONSTRAINT prateleira_pkey PRIMARY KEY (codigo);


--
-- Name: produto produto_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produto
    ADD CONSTRAINT produto_pkey PRIMARY KEY (codigo);


--
-- Name: tipo_produto tipo_produto_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipo_produto
    ADD CONSTRAINT tipo_produto_pkey PRIMARY KEY (codigo);


--
-- Name: unidade_medida unidade_medida_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.unidade_medida
    ADD CONSTRAINT unidade_medida_pkey PRIMARY KEY (unidade_medida);


--
-- Name: venda venda_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.venda
    ADD CONSTRAINT venda_pkey PRIMARY KEY (codigo);


--
-- Name: cidade cidade_estado_uf_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cidade
    ADD CONSTRAINT cidade_estado_uf_fkey FOREIGN KEY (estado_uf) REFERENCES public.estado(uf);


--
-- Name: filial filial_cidade_codigo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.filial
    ADD CONSTRAINT filial_cidade_codigo_fkey FOREIGN KEY (cidade_codigo) REFERENCES public.cidade(codigo);


--
-- Name: filial filial_empresa_codigo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.filial
    ADD CONSTRAINT filial_empresa_codigo_fkey FOREIGN KEY (empresa_codigo) REFERENCES public.empresa(codigo);


--
-- Name: fornecedor fornecedor_cidade_codigo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.fornecedor
    ADD CONSTRAINT fornecedor_cidade_codigo_fkey FOREIGN KEY (cidade_codigo) REFERENCES public.cidade(codigo);


--
-- Name: funcionario funcionario_cargo_codigo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.funcionario
    ADD CONSTRAINT funcionario_cargo_codigo_fkey FOREIGN KEY (cargo_codigo) REFERENCES public.cargo(codigo);


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
-- Name: produto_filial produto_filial_filial_codigo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produto_filial
    ADD CONSTRAINT produto_filial_filial_codigo_fkey FOREIGN KEY (filial_codigo) REFERENCES public.filial(codigo);


--
-- Name: produto_filial produto_filial_produto_codigo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produto_filial
    ADD CONSTRAINT produto_filial_produto_codigo_fkey FOREIGN KEY (produto_codigo) REFERENCES public.produto(codigo);


--
-- Name: produto produto_fornecedor_codigo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produto
    ADD CONSTRAINT produto_fornecedor_codigo_fkey FOREIGN KEY (fornecedor_codigo) REFERENCES public.fornecedor(codigo);


--
-- Name: produto produto_prateleira_codigo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produto
    ADD CONSTRAINT produto_prateleira_codigo_fkey FOREIGN KEY (prateleira_codigo) REFERENCES public.prateleira(codigo);


--
-- Name: produto produto_tipo_produto_codigo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produto
    ADD CONSTRAINT produto_tipo_produto_codigo_fkey FOREIGN KEY (tipo_produto_codigo) REFERENCES public.tipo_produto(codigo);


--
-- Name: produto produto_unidade_medida_unidade_medida_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produto
    ADD CONSTRAINT produto_unidade_medida_unidade_medida_fkey FOREIGN KEY (unidade_medida_unidade_medida) REFERENCES public.unidade_medida(unidade_medida);


--
-- Name: produto_venda produto_venda_produto_codigo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produto_venda
    ADD CONSTRAINT produto_venda_produto_codigo_fkey FOREIGN KEY (produto_codigo) REFERENCES public.produto(codigo);


--
-- Name: produto_venda produto_venda_venda_codigo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produto_venda
    ADD CONSTRAINT produto_venda_venda_codigo_fkey FOREIGN KEY (venda_codigo) REFERENCES public.venda(codigo);


--
-- Name: telefone_funcionario telefone_funcionario_funcionario_codigo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.telefone_funcionario
    ADD CONSTRAINT telefone_funcionario_funcionario_codigo_fkey FOREIGN KEY (funcionario_codigo) REFERENCES public.funcionario(codigo);


--
-- Name: venda venda_funcionario_codigo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.venda
    ADD CONSTRAINT venda_funcionario_codigo_fkey FOREIGN KEY (funcionario_codigo) REFERENCES public.funcionario(codigo);


--
-- PostgreSQL database dump complete
--

