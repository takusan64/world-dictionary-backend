from fastapi.encoders import jsonable_encoder
import json

json_file_open = open('db.json', 'r')
json_data = json.load(json_file_open)

def get_countries_detail(lang):
  res = json_data['countries_detail'].get(lang, None)
  return jsonable_encoder(res)

def get_country_detail(country_id, lang):
  countries_detail = json_data['countries_detail'].get(lang, None)
  res = None
  if not countries_detail:
    return res
  else:
    for country_detail in countries_detail:
      if country_detail["country_id"] == country_id:
        res = country_detail
        return res