from flask import jsonify
import json

json_file_open = open('db.json', 'r')
json_data = json.load(json_file_open)

def get_countries(lang):
  return jsonify(json_data['countries'][lang])

def get_country(country_id, lang):
  countries = json_data['countries'][lang]
  res_country = {}
  for country in countries:
    if country["country_id"] == country_id:
      res_country = country
      break
  return res_country