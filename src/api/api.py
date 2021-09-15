from fastapi import APIRouter
from typing import List
import config
from api import countries, countries_detail
from openapi import response_example as res_exa
from openapi import query_example as query_exa

router = APIRouter()
def_lang = config.DEFAULT_LANGUAGE

# endpoint /countries
# return 登録されている国名を全て取得 [object]
@router.get('/countries', response_model=List[res_exa.country], tags=["countries"])
def get_countries(lang:query_exa.language_enum=def_lang):
  res = countries.get_countries(lang)
  return res

# endpoint /countries/{country_id}
# return 登録されている国名を全て取得 object
@router.get('/countries/{country_id}', response_model=res_exa.country, tags=["country"])
def get_country(country_id:int, lang:query_exa.language_enum=def_lang):
  res = countries.get_country(country_id, lang)
  return res

# endpoint /countries_detail
# return 登録されている国の詳細情報を全て取得 [object]
@router.get('/countries_detail', response_model=List[res_exa.country_detail], tags=["countries_detail"])
def get_countries_detail(lang:query_exa.language_enum=def_lang):
  res = countries_detail.get_countries_detail(lang)
  return res

# endpoint /countries_detail/{country_id}
# return 登録されている国の詳細情報を1つ取得 object
@router.get('/countries_detail/{country_id}', response_model=res_exa.country_detail, tags=["country_detail"])
def get_country_detail(country_id:int, lang:query_exa.language_enum=def_lang):
  res = countries_detail.get_country_detail(country_id, lang)
  return res