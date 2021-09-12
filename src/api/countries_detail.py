from flask import jsonify
import json
from . import utilsFunc as util

json_file_open = open('db.json', 'r')
json_data = json.load(json_file_open)

def get_countries_detail(lang):
  res = jsonify(json_data['countries_detail'][lang])
  return res

def get_country_detail(country_id, lang):
  countries_detail = json_data['countries_detail'][lang]
  if not countries_detail:
    return {}
  else:
    for country_detail in countries_detail:
      if country_detail["country_id"] == country_id:
        res_country_detail = country_detail
        break
    return res_country_detail