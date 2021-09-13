from os import read
from fastapi import FastAPI, Request
from api import countries, countries_detail
from middleware import middleware
import config
from api import errors

app = FastAPI()

default_lang = config.DEFAULT_LANGUAGE

# request entry point
@app.middleware("http")
async def entry_point(request: Request, call_next):
  response = await call_next(request)
  middleware.check_auth_token()
  return response

# endpoint /countries
# return 登録されている国名を全て取得 [object]
@app.get('/countries')
def get_countries(lang=default_lang):
  res = countries.get_countries(lang)
  return res

# endpoint /countries/{country_id}
# return 登録されている国名を全て取得 object
@app.get('/countries/{country_id}')
def get_country(country_id:int, lang:str=default_lang):
  res = countries.get_country(country_id, lang)
  return res

# endpoint /countries_detail
# return 登録されている国の詳細情報を全て取得 [object]
@app.get('/countries_detail')
def get_countries_detail(lang=default_lang):
  res = countries_detail.get_countries_detail(lang)
  return res

# endpoint /countries_detail/{country_id}
# return 登録されている国の詳細情報を1つ取得 object
@app.get('/countries_detail/{country_id}')
def get_country_detail(country_id:int, lang:str=default_lang):
  res = countries_detail.get_country_detail(country_id, lang)
  return res