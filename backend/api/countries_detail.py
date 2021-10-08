from database.countries_detail import DataBase_Countries_Detail
from openapi import query as query_model

db_countries_detail = DataBase_Countries_Detail()

def get_countries_detail(lang:query_model.Language_Enum):
  countries_detail = db_countries_detail.get_countries_detail(lang)
  if countries_detail:
    keys=["country_id", "overview", "other"]
    return list(map(lambda values: dict(zip(keys, values)), countries_detail))
  else:
    return None

def get_country_detail(country_id:int, lang:query_model.Language_Enum):
  country_detail = db_countries_detail.get_country_detail(country_id, lang)
  if country_detail:
    keys=["country_id", "overview", "other"]
    values=country_detail[0]
    return dict(zip(keys, values))
  else:
    return None