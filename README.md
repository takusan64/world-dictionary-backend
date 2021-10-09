# world-dictionary-backend
「世界辞書」のバックエンドサーバー &amp; DBサーバー

## Easy Start Command
This App uses Docker & Docker-Compose

- start api server
```sh
# init
docker-compose up --build
# after that
docker-compose up
```

- start doc server
```sh
docker-compose up doc
```

## My Task
- [x] response language is changed to query param
- [ ] Adding request token feature
- [x] Store Data change json file to DB Server
- Document build to gh-pages
  - [x] Create RestAPI Document
  - [x] Create ERD Document
- [x] fixed open api (country_id start value)