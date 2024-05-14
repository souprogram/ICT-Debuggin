--DROP TABLE users;
--DROP TABLE publishers;
--DROP TABLE chatbots;
--DROP TABLE chatbots_users;


CREATE TABLE publishers(
    publisherId int,
    name varchar(15),
    country_of_origin varchar(15),
    PRIMARY KEY (publisherId)
);

CREATE TABLE chatbots(
    chatbotId int,
    name varchar(25),
    version varchar(15),
    publisherId int,
    rating float(2,1) CHECK (rating >= 1.0 AND rating <= 5.0),
    PRIMARY KEY (chatbotId),
    FOREIGN KEY (publisherId) REFERENCES publishers(publisherId)
);


CREATE TABLE users(
    userId int,
    name varchar(15),
    surname varchar(15),
    age int,
    sex char(1),
    chatbotId int,
    PRIMARY KEY (userId),
    CONSTRAINT user_chk CHECK (age >= 18 AND (sex = 'M' OR sex = 'F')) 
);

CREATE TABLE chatbots_users(
    chatbotId int,
    userId int,
    FOREIGN KEY (chatbotId) REFERENCES chatbots(chatbotId),
    FOREIGN KEY (userId) REFERENCES users(userId)
);