from fastapi.encoders import jsonable_encoder
import json

json_file_open = open('db.json', 'r')
json_data = json.load(json_file_open)

def get_countries(lang):
  res = json_data['countries'].get(lang, None)
  return jsonable_encoder(res)

def get_country(country_id, lang):
  countries = json_data['countries'].get(lang, None)
  res = None
  if not countries:
    return res
  else:
    for country in countries:
      if country["country_id"] == country_id:
        res = country
        return res