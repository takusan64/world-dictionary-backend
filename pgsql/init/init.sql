/* create table */
create table country_groups_ja
(
  id serial primary key,
  label varchar(2) not null unique,
  created_at timestamp not null default current_timestamp,
  updated_at timestamp not null default current_timestamp
);

create table countries_ja
(
  id serial primary key,
  country_group_id smallint references country_groups_ja(id),
  code varchar(2) not null unique,
  name varchar(64) not null,
  label varchar(64) not null,
  created_at timestamp not null default current_timestamp,
  updated_at timestamp not null default current_timestamp
);

create table country_details_ja
(
  id serial primary key,
  country_id smallint references countries_ja(id),
  overview text not null,
  other text,
  created_at timestamp not null default current_timestamp,
  updated_at timestamp not null default current_timestamp
);

create table country_groups_en
(
  id serial primary key,
  label varchar(2) not null unique,
  created_at timestamp not null default current_timestamp,
  updated_at timestamp not null default current_timestamp
);

create table countries_en
(
  id serial primary key,
  country_group_id smallint references country_groups_en(id),
  code varchar(2) not null unique,
  name varchar(64) not null,
  label varchar(64) not null,
  created_at timestamp not null default current_timestamp,
  updated_at timestamp not null default current_timestamp
);

create table country_details_en
(
  id serial primary key,
  country_id smallint references countries_en(id),
  overview text not null,
  other text,
  created_at timestamp not null default current_timestamp,
  updated_at timestamp not null default current_timestamp
);


/* insert init data */
insert into country_groups_ja(label) values
  ('あ'),
  ('か'),
  ('さ'),
  ('た'),
  ('な'),
  ('は'),
  ('ま'),
  ('や'),
  ('ら'),
  ('わ')
;

insert into countries_ja(country_group_id, code, name, label) values
  (5, 'JP', 'にほん', '日本'),
  (1, 'US', 'あめりか', 'アメリカ'),
  (1, 'IT', 'いたりあ', 'イタリア')
;

insert into country_details_ja(country_id, overview, other) values
  (1, '日本概要', '日本備考'),
  (2, 'アメリカ概要', 'アメリカ概要'),
  (3, 'イタリア概要', 'イタリア概要')
;

insert into country_groups_en(label) values
  ('A'),
  ('B'),
  ('C'),
  ('D'),
  ('E'),
  ('F'),
  ('G'),
  ('H'),
  ('I'),
  ('J'),
  ('K'),
  ('L'),
  ('M'),
  ('N'),
  ('O'),
  ('P'),
  ('Q'),
  ('R'),
  ('S'),
  ('T'),
  ('U'),
  ('V'),
  ('W'),
  ('X'),
  ('Y'),
  ('Z')
;

insert into countries_en(country_group_id, code, name, label) values
  (10, 'JP', 'japan', 'Japan'),
  (21, 'US', 'amterica', 'America'),
  (9, 'IT', 'itaria', 'Itaria')
;

insert into country_details_en(country_id, overview, other) values
  (1, 'japan overview', 'japan other'),
  (2, 'amterica overview', 'amterica other'),
  (3, 'itaria overview', 'itaria other')
;


/* create function */
create function set_update_time() returns trigger as $$
  begin
    new.updated_at := now();
    return new;
  end;
$$ language 'plpgsql';


/* create trigger */
create trigger update_countries_ja before update on countries_ja for each row
  execute procedure set_update_time();

create trigger update_country_details_ja before update on country_details_ja for each row
  execute procedure set_update_time();

create trigger update_country_groups_ja before update on country_groups_ja for each row
  execute procedure set_update_time();

create trigger update_countries_en before update on countries_en for each row
  execute procedure set_update_time();

create trigger update_country_details_en before update on country_details_en for each row
  execute procedure set_update_time();

create trigger update_country_groups_en before update on country_groups_en for each row
  execute procedure set_update_time();