CREATE TABLE users (
   id  SERIAL PRIMARY KEY,
   name VARCHAR(255),
   email VARCHAR(255),
   imgurl VARCHAR(255)
);

INSERT INTO users (name, email, imgurl) VALUES ('Max Mustermann', 'Max.Mustermann@web.de', 'https://randomuser.me/api/portraits/men/21.jpg');
INSERT INTO users (name, email, imgurl) VALUES ('Erika Musterfrau', 'Erika.Musterfrau@gmx.de', 'https://randomuser.me/api/portraits/women/58.jpg');
INSERT INTO users (name, email, imgurl) VALUES ('John Doe', 'John.Doe@gmail.com', 'https://randomuser.me/api/portraits/men/59.jpg');
INSERT INTO users (name, email, imgurl) VALUES ('Jane Doe', 'Jane.Doe@gmail.com', 'https://randomuser.me/api/portraits/women/51.jpg');
INSERT INTO users (name, email, imgurl) VALUES ('Monsieur Tout-le-monde', 'monsieur@virois.com', 'https://randomuser.me/api/portraits/men/22.jpg');
INSERT INTO users (name, email, imgurl) VALUES ('Fred Bloggs', 'fred@gmail.com', 'https://randomuser.me/api/portraits/men/90.jpg');
