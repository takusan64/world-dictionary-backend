from fastapi.encoders import jsonable_encoder
import json

json_file_open = open('db.json', 'r')
json_data = json.load(json_file_open)

def get_countries(lang):
  res = json_data['countries'].get(lang, {})
  return jsonable_encoder(res)

def get_country(country_id, lang):
  countries = json_data['countries'].get(lang, {})
  res = {}
  if not countries:
    return res
  else:
    for country in countries:
      if country["country_id"] == country_id:
        res = country
        break
    return res