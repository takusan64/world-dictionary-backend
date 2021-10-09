from database.countries import DataBase_Countries
from openapi import request as req_model

db_countries = DataBase_Countries()

def get_countries(lang:req_model.Language_Enum):
  countries = db_countries.get_countries(lang)
  if countries:
    keys=["country_id", "country_code", "name", "name_label", "name_group_id", "name_group_label"]
    return list(map(lambda values: dict(zip(keys, values)), countries))
  else:
    return None

def get_country(country_id:int, lang:req_model.Language_Enum):
  country = db_countries.get_country(country_id, lang)
  if country:
    keys=["country_id", "country_code", "name", "name_label", "name_group_id", "name_group_label"]
    values=country[0]
    return dict(zip(keys, values))
  else:
    return None