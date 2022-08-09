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
-- Name: atendente; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.atendente (
    codigo integer NOT NULL,
    nome character varying(200) NOT NULL,
    telefone character varying(255),
    rua character varying(255) NOT NULL,
    numero integer NOT NULL,
    complemento character varying(255),
    cidade character varying(255) NOT NULL,
    estado character(2) NOT NULL,
    data_nascimento date,
    cpf character(14),
    rg character varying(15),
    numero_pis character(14)
);


ALTER TABLE public.atendente OWNER TO postgres;

--
-- Name: mercado; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.mercado (
    cnpj character(18) NOT NULL,
    razao_social character varying(255) NOT NULL,
    rua character varying(255) NOT NULL,
    numero integer NOT NULL,
    complemento character varying(255),
    cep character(9) NOT NULL,
    cidade character varying(255) NOT NULL,
    estado character(2) NOT NULL,
    telefone character varying(255)
);


ALTER TABLE public.mercado OWNER TO postgres;

--
-- Name: produto; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.produto (
    codigo integer NOT NULL,
    nome character varying(255) NOT NULL,
    nome_compacto character varying(24) NOT NULL,
    unidade_de_medida character varying(3) NOT NULL,
    valor_unitario numeric(10,2) NOT NULL,
    cor character varying(255) NOT NULL,
    altura numeric(10,2),
    largura numeric(10,2),
    peso_bruto numeric(10,2),
    peso_liquido numeric(10,2),
    fornecedor character varying(255) NOT NULL,
    ultima_venda date,
    ultima_compra date NOT NULL,
    estoque numeric(11,2),
    tipo character varying(100) NOT NULL
);


ALTER TABLE public.produto OWNER TO postgres;

--
-- Data for Name: atendente; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.atendente (codigo, nome, telefone, rua, numero, complemento, cidade, estado, data_nascimento, cpf, rg, numero_pis) VALUES (1, 'Jader Fiegenbaum', NULL, 'Rua X', 100, NULL, 'Lajeado', 'RS', '1990-03-09', '111.111.111-11', '1111111111', NULL);


--
-- Data for Name: mercado; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.mercado (cnpj, razao_social, rua, numero, complemento, cep, cidade, estado, telefone) VALUES ('91.156.471/0030-83', 'Importadora e Exportadora de Cereais SA', 'Avenida Benjamin Constant', 1758, 'Florestal', '95900-000', 'Lajeado', 'RS', '(51) 3714-6296');


--
-- Data for Name: produto; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.produto (codigo, nome, nome_compacto, unidade_de_medida, valor_unitario, cor, altura, largura, peso_bruto, peso_liquido, fornecedor, ultima_venda, ultima_compra, estoque, tipo) VALUES (1, 'Batata Inglesa', 'Batat Ing', 'Kg', 5.99, '-', 0.00, 0.00, 0.00, 0.00, 'Zé HortiFruti', '2022-06-15', '2022-06-18', 150.00, 'Hortifruti');
INSERT INTO public.produto (codigo, nome, nome_compacto, unidade_de_medida, valor_unitario, cor, altura, largura, peso_bruto, peso_liquido, fornecedor, ultima_venda, ultima_compra, estoque, tipo) VALUES (2, 'Batata doce', 'Batat doc', 'Kg', 3.99, '-', 0.00, 0.00, 0.00, 0.00, 'Zé HortiFruti', '2022-06-16', '2022-06-18', 100.00, 'Hortifruti');
INSERT INTO public.produto (codigo, nome, nome_compacto, unidade_de_medida, valor_unitario, cor, altura, largura, peso_bruto, peso_liquido, fornecedor, ultima_venda, ultima_compra, estoque, tipo) VALUES (3, 'Banana prata', 'Banan prata', 'Kg', 6.99, '-', 0.00, 0.00, 0.00, 0.00, 'João Frutas', '2022-06-18', '2022-06-17', 200.00, 'Hortifruti');
INSERT INTO public.produto (codigo, nome, nome_compacto, unidade_de_medida, valor_unitario, cor, altura, largura, peso_bruto, peso_liquido, fornecedor, ultima_venda, ultima_compra, estoque, tipo) VALUES (4, 'Banana caturra', 'Banan cat', 'Kg', 4.99, '-', 0.00, 0.00, 0.00, 0.00, 'João Frutas', '2022-06-18', '2022-06-17', 150.00, 'Hortifruti');
INSERT INTO public.produto (codigo, nome, nome_compacto, unidade_de_medida, valor_unitario, cor, altura, largura, peso_bruto, peso_liquido, fornecedor, ultima_venda, ultima_compra, estoque, tipo) VALUES (5, 'Maça gala', 'Maca gal', 'Kg', 7.99, '-', 0.00, 0.00, 0.00, 0.00, 'João Frutas', '2022-06-18', '2022-06-17', 150.00, 'Hortifruti');
INSERT INTO public.produto (codigo, nome, nome_compacto, unidade_de_medida, valor_unitario, cor, altura, largura, peso_bruto, peso_liquido, fornecedor, ultima_venda, ultima_compra, estoque, tipo) VALUES (6, 'Maça fugi', 'Maca fug', 'Kg', 8.99, '-', 0.00, 0.00, 0.00, 0.00, 'João Frutas', '2022-06-18', '2022-06-17', 100.00, 'Hortifruti');
INSERT INTO public.produto (codigo, nome, nome_compacto, unidade_de_medida, valor_unitario, cor, altura, largura, peso_bruto, peso_liquido, fornecedor, ultima_venda, ultima_compra, estoque, tipo) VALUES (7, 'Laranja suco', 'Laran suc', 'Kg', 3.99, '-', 0.00, 0.00, 0.00, 0.00, 'João Frutas', '2022-06-17', '2022-06-15', 300.00, 'Hortifruti');
INSERT INTO public.produto (codigo, nome, nome_compacto, unidade_de_medida, valor_unitario, cor, altura, largura, peso_bruto, peso_liquido, fornecedor, ultima_venda, ultima_compra, estoque, tipo) VALUES (8, 'Laranja umbigo', 'Laran umb', 'Kg', 4.99, '-', 0.00, 0.00, 0.00, 0.00, 'João Frutas', '2022-06-16', '2022-06-14', 299.00, 'Hortifruti');
INSERT INTO public.produto (codigo, nome, nome_compacto, unidade_de_medida, valor_unitario, cor, altura, largura, peso_bruto, peso_liquido, fornecedor, ultima_venda, ultima_compra, estoque, tipo) VALUES (9, 'Mamão papaia', 'Mam papa', 'Kg', 10.90, '-', 0.00, 0.00, 0.00, 0.00, 'Frutaria do Sul', '2022-06-13', '2022-06-14', 100.00, 'Hortifruti');
INSERT INTO public.produto (codigo, nome, nome_compacto, unidade_de_medida, valor_unitario, cor, altura, largura, peso_bruto, peso_liquido, fornecedor, ultima_venda, ultima_compra, estoque, tipo) VALUES (10, 'Limão Galego', 'Limao gal', 'Kg', 1.99, '-', 0.00, 0.00, 0.00, 0.00, 'Frutaria do Sul', '2022-06-18', '2022-06-15', 50.00, 'Hortifruti');
INSERT INTO public.produto (codigo, nome, nome_compacto, unidade_de_medida, valor_unitario, cor, altura, largura, peso_bruto, peso_liquido, fornecedor, ultima_venda, ultima_compra, estoque, tipo) VALUES (11, 'Carne moída 1º', 'Carn moi 1', 'Kg', 40.00, '-', 0.00, 0.00, 0.00, 0.00, 'Carnes do RS', '2022-06-18', '2022-06-12', 400.00, 'Carnes');
INSERT INTO public.produto (codigo, nome, nome_compacto, unidade_de_medida, valor_unitario, cor, altura, largura, peso_bruto, peso_liquido, fornecedor, ultima_venda, ultima_compra, estoque, tipo) VALUES (12, 'Carne moída 2º', 'Carn moi 2', 'Kg', 35.00, '-', 0.00, 0.00, 0.00, 0.00, 'Carnes do RS', '2022-06-18', '2022-06-14', 500.00, 'Carnes');
INSERT INTO public.produto (codigo, nome, nome_compacto, unidade_de_medida, valor_unitario, cor, altura, largura, peso_bruto, peso_liquido, fornecedor, ultima_venda, ultima_compra, estoque, tipo) VALUES (13, 'Costela suína', 'Cost suin', 'Kg', 20.00, '-', 0.00, 0.00, 0.00, 0.00, 'JBS', '2022-06-17', '2022-06-15', 300.00, 'Carnes');
INSERT INTO public.produto (codigo, nome, nome_compacto, unidade_de_medida, valor_unitario, cor, altura, largura, peso_bruto, peso_liquido, fornecedor, ultima_venda, ultima_compra, estoque, tipo) VALUES (14, 'Costela rês', 'Cost res', 'Kg', 30.00, '-', 0.00, 0.00, 0.00, 0.00, 'Carnes do RS', '2022-06-18', '2022-06-15', 300.00, 'Carnes');
INSERT INTO public.produto (codigo, nome, nome_compacto, unidade_de_medida, valor_unitario, cor, altura, largura, peso_bruto, peso_liquido, fornecedor, ultima_venda, ultima_compra, estoque, tipo) VALUES (15, 'Massa tipo 1', 'Massa 1', 'Un', 6.00, '-', 20.00, 15.00, 500.00, 500.00, 'Maria massas', '2022-06-17', '2022-06-10', 100.00, 'Massas');
INSERT INTO public.produto (codigo, nome, nome_compacto, unidade_de_medida, valor_unitario, cor, altura, largura, peso_bruto, peso_liquido, fornecedor, ultima_venda, ultima_compra, estoque, tipo) VALUES (16, 'Massa tipo 2', 'Massa 2', 'Un', 6.00, '-', 20.00, 15.00, 500.00, 500.00, 'Maria massas', '2022-06-16', '2022-06-16', 99.00, 'Massas');
INSERT INTO public.produto (codigo, nome, nome_compacto, unidade_de_medida, valor_unitario, cor, altura, largura, peso_bruto, peso_liquido, fornecedor, ultima_venda, ultima_compra, estoque, tipo) VALUES (17, 'Massa tipo 3', 'Massa 2', 'Un', 6.00, '-', 20.00, 15.00, 500.00, 500.00, 'Maria massas', '2022-06-16', '2022-06-16', 120.00, 'Massas');
INSERT INTO public.produto (codigo, nome, nome_compacto, unidade_de_medida, valor_unitario, cor, altura, largura, peso_bruto, peso_liquido, fornecedor, ultima_venda, ultima_compra, estoque, tipo) VALUES (18, 'Arroz Branco', 'Arroz bra', 'Un', 7.00, '-', 15.00, 15.00, 1000.00, 1000.00, 'Gãos&Grãos', '2022-06-18', '2022-06-01', 150.00, 'Grãos');
INSERT INTO public.produto (codigo, nome, nome_compacto, unidade_de_medida, valor_unitario, cor, altura, largura, peso_bruto, peso_liquido, fornecedor, ultima_venda, ultima_compra, estoque, tipo) VALUES (19, 'Feijão marrom', 'Feijao mar', 'Un', 10.00, '-', 15.00, 15.00, 500.00, 500.00, 'Gãos&Grãos', '2022-06-18', '2022-06-05', 200.00, 'Grãos');
INSERT INTO public.produto (codigo, nome, nome_compacto, unidade_de_medida, valor_unitario, cor, altura, largura, peso_bruto, peso_liquido, fornecedor, ultima_venda, ultima_compra, estoque, tipo) VALUES (20, 'Papel higiênico 1', 'Papel hig', 'Un', 15.00, '-', 25.00, 25.00, 100.00, 100.00, 'Higiênicos da Laura', '2022-06-16', '2022-06-05', 50.00, 'Higiene pessoal');
INSERT INTO public.produto (codigo, nome, nome_compacto, unidade_de_medida, valor_unitario, cor, altura, largura, peso_bruto, peso_liquido, fornecedor, ultima_venda, ultima_compra, estoque, tipo) VALUES (21, 'Pasta de dente', 'Pasta dent', 'Un', 7.99, '-', 4.00, 15.00, 90.00, 90.00, 'Higiênicos da Laura', '2022-06-18', '2022-06-16', 15.00, 'Higiene pessoal');
INSERT INTO public.produto (codigo, nome, nome_compacto, unidade_de_medida, valor_unitario, cor, altura, largura, peso_bruto, peso_liquido, fornecedor, ultima_venda, ultima_compra, estoque, tipo) VALUES (22, 'Escova de dente', 'Escov den', 'Un', 12.99, '-', 0.00, 0.00, 0.00, 0.00, 'Higiênicos da Laura', '2022-06-09', '2022-05-30', 20.00, 'Higiene pessoal');
INSERT INTO public.produto (codigo, nome, nome_compacto, unidade_de_medida, valor_unitario, cor, altura, largura, peso_bruto, peso_liquido, fornecedor, ultima_venda, ultima_compra, estoque, tipo) VALUES (23, 'Fita dental', 'Fita den', 'Un', 20.00, '-', 0.00, 0.00, 0.00, 0.00, 'Higiênicos da Laura', '2022-05-25', '2022-05-01', 10.00, 'Higiene pessoal');
INSERT INTO public.produto (codigo, nome, nome_compacto, unidade_de_medida, valor_unitario, cor, altura, largura, peso_bruto, peso_liquido, fornecedor, ultima_venda, ultima_compra, estoque, tipo) VALUES (24, 'Sabonete', 'Sabonete', 'Un', 3.50, '-', 0.00, 0.00, 0.00, 0.00, 'Higiênicos do Carlos', '2022-06-18', '2022-05-30', 0.00, 'Higiene pessoal');
INSERT INTO public.produto (codigo, nome, nome_compacto, unidade_de_medida, valor_unitario, cor, altura, largura, peso_bruto, peso_liquido, fornecedor, ultima_venda, ultima_compra, estoque, tipo) VALUES (25, 'Xampoo', 'Xampoo', 'Un', 19.45, '-', 0.00, 0.00, 0.00, 0.00, 'Higiênicos do Carlos', '2022-06-18', '2022-06-15', 10.00, 'Higiene pessoal');
INSERT INTO public.produto (codigo, nome, nome_compacto, unidade_de_medida, valor_unitario, cor, altura, largura, peso_bruto, peso_liquido, fornecedor, ultima_venda, ultima_compra, estoque, tipo) VALUES (26, 'Hastes flexíveis', 'Hast flex', 'Un', 12.30, '-', 0.00, 0.00, 0.00, 0.00, 'Higiênicos do Carlos', '2022-06-16', '2022-06-14', 30.00, 'Higiene pessoal');
INSERT INTO public.produto (codigo, nome, nome_compacto, unidade_de_medida, valor_unitario, cor, altura, largura, peso_bruto, peso_liquido, fornecedor, ultima_venda, ultima_compra, estoque, tipo) VALUES (27, 'Bolacha salgada', 'Bolac salg', 'Un', 5.98, '-', 0.00, 0.00, 0.00, 0.00, 'Izabel biscoitos', '2022-06-10', '2022-06-16', 15.00, 'Biscoitos');
INSERT INTO public.produto (codigo, nome, nome_compacto, unidade_de_medida, valor_unitario, cor, altura, largura, peso_bruto, peso_liquido, fornecedor, ultima_venda, ultima_compra, estoque, tipo) VALUES (28, 'Bolacha de chocolate', 'Bolac choc', 'Un', 6.50, '-', 0.00, 0.00, 0.00, 0.00, 'Izabel biscoitos', '2022-06-14', '2022-06-18', 20.00, 'Biscoitos');
INSERT INTO public.produto (codigo, nome, nome_compacto, unidade_de_medida, valor_unitario, cor, altura, largura, peso_bruto, peso_liquido, fornecedor, ultima_venda, ultima_compra, estoque, tipo) VALUES (29, 'Vinho', 'Vinho tinto', 'Un', 65.00, '-', 0.00, 0.00, 0.00, 0.00, 'Vinho do Sul', '2022-06-17', '2022-06-18', 30.00, 'Bebida alcoolica');
INSERT INTO public.produto (codigo, nome, nome_compacto, unidade_de_medida, valor_unitario, cor, altura, largura, peso_bruto, peso_liquido, fornecedor, ultima_venda, ultima_compra, estoque, tipo) VALUES (30, 'Iogurte', 'Iogurte', 'Un', 8.79, '-', 0.00, 0.00, 0.00, 0.00, 'Iogurteria', '2022-06-15', '2022-06-14', 50.00, 'Bebidas');
INSERT INTO public.produto (codigo, nome, nome_compacto, unidade_de_medida, valor_unitario, cor, altura, largura, peso_bruto, peso_liquido, fornecedor, ultima_venda, ultima_compra, estoque, tipo) VALUES (31, 'Panos de copa', 'Pano copa', 'Un', 6.99, '-', 0.00, 0.00, 0.00, 0.00, 'Pano Sul', '2022-06-10', '2022-05-10', 80.00, 'Limpeza');
INSERT INTO public.produto (codigo, nome, nome_compacto, unidade_de_medida, valor_unitario, cor, altura, largura, peso_bruto, peso_liquido, fornecedor, ultima_venda, ultima_compra, estoque, tipo) VALUES (32, 'Farofa temperada', 'Farofa', 'Un', 5.49, '-', 0.00, 0.00, 0.00, 0.00, 'Foki', '2022-06-09', '2022-06-05', 20.00, 'Temperos');
INSERT INTO public.produto (codigo, nome, nome_compacto, unidade_de_medida, valor_unitario, cor, altura, largura, peso_bruto, peso_liquido, fornecedor, ultima_venda, ultima_compra, estoque, tipo) VALUES (33, 'Aveia', 'Aveia', 'Un', 9.80, '-', 0.00, 0.00, 0.00, 0.00, 'Natures', '2022-06-17', '2022-06-05', 30.00, 'Grãos');
INSERT INTO public.produto (codigo, nome, nome_compacto, unidade_de_medida, valor_unitario, cor, altura, largura, peso_bruto, peso_liquido, fornecedor, ultima_venda, ultima_compra, estoque, tipo) VALUES (34, 'Granola', 'Granol', 'Un', 19.90, '-', 0.00, 0.00, 0.00, 0.00, 'Natures', '2022-06-17', '2022-06-04', 30.00, 'Grãos');
INSERT INTO public.produto (codigo, nome, nome_compacto, unidade_de_medida, valor_unitario, cor, altura, largura, peso_bruto, peso_liquido, fornecedor, ultima_venda, ultima_compra, estoque, tipo) VALUES (35, 'Pão de queijo congelado', 'Pão Queijo', 'Un', 9.98, '-', 0.00, 0.00, 0.00, 0.00, 'Campo de minas', '2022-06-14', '2022-06-09', 20.00, 'Congelados');
INSERT INTO public.produto (codigo, nome, nome_compacto, unidade_de_medida, valor_unitario, cor, altura, largura, peso_bruto, peso_liquido, fornecedor, ultima_venda, ultima_compra, estoque, tipo) VALUES (36, 'Xicara café', 'Xicara', 'Un', 8.50, '-', 0.00, 0.00, 0.00, 0.00, 'Nadia', '2022-06-09', '2022-05-31', 14.00, 'Artigos de casa');
INSERT INTO public.produto (codigo, nome, nome_compacto, unidade_de_medida, valor_unitario, cor, altura, largura, peso_bruto, peso_liquido, fornecedor, ultima_venda, ultima_compra, estoque, tipo) VALUES (37, 'Chinelo de lã', 'Chinelo lã', 'Un', 29.90, '-', 0.00, 0.00, 0.00, 0.00, 'Lã Sul', '2022-06-13', '2022-05-31', 20.00, 'Vestuário');
INSERT INTO public.produto (codigo, nome, nome_compacto, unidade_de_medida, valor_unitario, cor, altura, largura, peso_bruto, peso_liquido, fornecedor, ultima_venda, ultima_compra, estoque, tipo) VALUES (38, 'Escova de cabelo', 'Escova cabe', 'Un', 32.00, '-', 0.00, 0.00, 0.00, 0.00, 'Risca', '2022-06-07', '2022-05-15', 8.00, 'Beleza');
INSERT INTO public.produto (codigo, nome, nome_compacto, unidade_de_medida, valor_unitario, cor, altura, largura, peso_bruto, peso_liquido, fornecedor, ultima_venda, ultima_compra, estoque, tipo) VALUES (39, 'Esmalte', 'Esmalte', 'Un', 6.79, '-', 0.00, 0.00, 0.00, 0.00, 'Risca', '2022-06-09', '2022-05-15', 35.00, 'Beleza');
INSERT INTO public.produto (codigo, nome, nome_compacto, unidade_de_medida, valor_unitario, cor, altura, largura, peso_bruto, peso_liquido, fornecedor, ultima_venda, ultima_compra, estoque, tipo) VALUES (40, 'Fraldas', 'Fralda', 'Un', 49.90, '-', 0.00, 0.00, 0.00, 0.00, 'For baby', '2022-06-08', '2022-06-18', 40.00, 'Higiene pessoal');


--
-- PostgreSQL database dump complete
--

