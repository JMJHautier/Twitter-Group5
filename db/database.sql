
--! users table
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


CREATE TABLE message (
id SERIAL PRIMARY KEY,
body text,
date TIMESTAMP DEFAULT now(),
id_user INT
)

--! message table
CREATE TABLE message (
id SERIAL PRIMARY KEY,
body text,
date TIMESTAMP DEFAULT now(),
id_user INT
)

   --! messages of user 1
INSERT INTO message
VALUES (default, 'We cannot all do great things. But we can do small things with great love. - Mother Teresa #quotes #upliftingquotes', default, 1); 
(default, 'Keep your eyes on the stars and your feet on the ground. - Theodore Roosevelt #quotes #upliftingquotes', default, 1),
(default, 'Whatever we expect with confidence becomes our own self-fulfilling prophecy. - Brian Tracy #quotes #upliftingquotes', default, 1),
(default, 'A loving heart is the truest wisdom. ~ Charles Dickens #quotes #upliftingquotes #quotes', default, 1)

   --! messages of user 2
INSERT INTO message
VALUES (default, 'Remember before Twitter when you took a photo of food, got the film developed, then drove around showing everyone the pic? No? Me neither.', default, 2),
(default, 'sorry I hurt your feelings when I called you stupid. I honestly thought you already knew.', default, 2),
(default, 'I think the "People you may know" section on Facebook should be changed to People I am deliberately not friends with.', default, 2),
(default, 'Hurting you is the last thing I want to do, but its definitely on my list.', default, 2),
(default, 'New rule: You have to at least follow me before sending me spam on Twitter.', default, 2)

   --! messages of user 3
INSERT INTO message
VALUES (default, 'You cant spell A-W-E-S-O-M-E without ME.', default, 3),
(default, 'I like school. I just dont like the learning part.', default, 3),
(default, 'That annoying moment to bite the exact same spot again before I finish my meal.', default, 3),
(default, 'friend: Are you going to eat the whole pizza? me: Hold my empty pizza box.', default, 3),
(default, 'Love means sharing your thoughts, your fears, your dreams, your hopes and your food.', default, 3)

   --! messages of user 4
INSERT INTO message
VALUES (default, 'France urges citizens to leave Pakistan amid anti-French protests', default, 4),
(default, 'Facebook urged to scrap Instagram for children plans', default, 4),
(default, 'Texas students disciplined over slave trade game that assigned prices to their black peers', default, 4),
(default, 'How does the Oxford-AstraZeneca Covid vaccine work?', default, 4),
(default, 'Mystery tree beast turns out to be pastry', default, 4)