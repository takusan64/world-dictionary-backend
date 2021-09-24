from fastapi import APIRouter, HTTPException
from typing import List
import config
from api import countries, countries_detail
from openapi import response as res_model
from openapi import query as query_model
from utils.errors import Error400

router = APIRouter()
def_lang = config.DEFAULT_LANGUAGE

# endpoint /countries
# return 登録されている国名を全て取得 [object]
@router.get(
  '/countries',
  response_model=List[res_model.Country],
  tags=["countries"],
  responses=Error400.openapi_response
)
def get_countries(lang:query_model.Language_Enum=def_lang):
  res = countries.get_countries(lang)
  if not res:
    raise HTTPException(status_code=Error400.status_code, detail=Error400.detail)
  return res

# endpoint /countries/{country_id}
# return 登録されている国名を全て取得 object
@router.get(
  '/countries/{country_id}',
  response_model=res_model.Country,
  tags=["country"],
  responses=Error400.openapi_response
)
def get_country(country_id:int, lang:query_model.Language_Enum=def_lang):
  res = countries.get_country(country_id, lang)
  if not res:
    raise HTTPException(status_code=Error400.status_code, detail=Error400.detail)
  return res

# endpoint /countries_detail
# return 登録されている国の詳細情報を全て取得 [object]
@router.get(
  '/countries_detail',
  response_model=List[res_model.Country_Detail],
  tags=["countries_detail"],
  responses=Error400.openapi_response
)
def get_countries_detail(lang:query_model.Language_Enum=def_lang):
  res = countries_detail.get_countries_detail(lang)
  if not res:
    raise HTTPException(status_code=Error400.status_code, detail=Error400.detail)
  return res

# endpoint /countries_detail/{country_id}
# return 登録されている国の詳細情報を1つ取得 object
@router.get(
  '/countries_detail/{country_id}',
  response_model=res_model.Country_Detail,
  tags=["country_detail"],
  responses=Error400.openapi_response
)
def get_country_detail(country_id:int, lang:query_model.Language_Enum=def_lang):
  res = countries_detail.get_country_detail(country_id, lang)
  if not res:
    raise HTTPException(status_code=Error400.status_code, detail=Error400.detail)
  return res