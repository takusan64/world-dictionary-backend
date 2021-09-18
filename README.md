# world-dictionary-backend
「世界辞書」のバックエンドサーバー &amp; DBサーバー

## init setting

you have to make the `.env` file to `root` & `src dir`.

```sh
# /world-dictionary-backend/.env
POSTGRES_PASSWORD=postgres
POSTGRES_USER=postgres
POSTGRES_DB=postgres
```

## Easy Start Command
This App uses Docker & Docker-Compose

- start dev server
```sh
# init
docker-compose up --build
# after that
docker-compose up
```

## My Task
- [ ] response language is changed to query param
- [ ] Adding request token feature
- [ ] Store Data change json file to DB Server
- Document build to gh-pages
  - [ ] Create RestAPI Document
  - [ ] Create ERD Document