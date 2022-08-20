CREATE TABLE generos (id serial primary key, descricao varchar(45) not null);

CREATE TABLE musicas (id serial primary key, nome varchar(45) not null, artista varchar(45) not null, album varchar(45) not null, generos_id int not null, FOREIGN KEY (generos_id) REFERENCES generos(id);

INSERT INTO generos (descricao) VALUES ('rock');
INSERT INTO generos (descricao) VALUES ('jazz');
INSERT INTO generos (descricao) VALUES ('pop');
INSERT INTO generos (descricao) VALUES ('house');
INSERT INTO generos (descricao) VALUES ('mpb');

INSERT INTO musicas (nome, artista, album, generos_id) VALUES ('Believer', 'Imagine Dragons', 'Evolve', 1);
INSERT INTO musicas (nome, artista, album, generos_id) VALUES ('Bohemian Rhapsody', 'Queen', 'A Night at the Opera', 1);
INSERT INTO musicas (nome, artista, album, generos_id) VALUES ('Du Hast', 'Rammstein', 'Rammstein - Paris', 1);
INSERT INTO musicas (nome, artista, album, generos_id) VALUES ('My Way', 'Frank Sinatra', 'Edição Limitada: Frank Sinatra', 2);
INSERT INTO musicas (nome, artista, album, generos_id) VALUES ('Home', 'Michael Bublé', 'The Essential Michael Bublé', 2);
INSERT INTO musicas (nome, artista, album, generos_id) VALUES ('Shape Of You', 'Ed Sheeran', '÷', 3);
INSERT INTO musicas (nome, artista, album, generos_id) VALUES ('Girls Like You(Feat. Cardi B)', 'Maroon 5', 'Red Pill Blues', 3);
INSERT INTO musicas (nome, artista, album, generos_id) VALUES ('Titanium(feat. Sia)', 'David Guetta', 'Nothing But The Beat 2.0', 4);
INSERT INTO musicas (nome, artista, album, generos_id) VALUES ('The Nights', 'AVICII', 'Stories', 4);

INSERT INTO musicas (nome, artista, album, generos_id) VALUES ('Eu Nasci Há Dez Mil Anos Atrás', 'Raul Seixas', 'Maluco Beleza', 5);
