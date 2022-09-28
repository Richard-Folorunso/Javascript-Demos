drop table if exists users;
drop table if exists accounts;

create table users (
	user_id serial primary key,
	user_data varchar(256) not null
);

create table accounts (
	user_id serial primary key,
	user_data varchar(256) not null
);

insert into users values (
	default,
	'Data'
);

insert into accounts values (
	default,
	'Data2'
);

SELECT * FROM users
FULL OUTER JOIN accounts on users.user_id = accounts.user_id;