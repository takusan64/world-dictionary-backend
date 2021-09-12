from os import read
from flask import Flask, jsonify
import json
from api import countries, countries_detail
from middleware import middleware, requestBefore

app = Flask(__name__)
app.config.from_pyfile('pyenv.cfg')
app.wsgi_app = middleware.Middleware(app.wsgi_app)

default_lang = app.config['DEFAULT_LANGUAGE']
json_file_open = open('db.json', 'r')
json_data = json.load(json_file_open)

# request entry point
@app.before_request
def before_request():
  req_before_func = requestBefore.RequestBefore(app)
  req_before_func.check_auth_token()

# endpoint /countries
# return 登録されている国名を全て取得 [object]
@app.route('/countries', methods=['GET'])
def get_countries(lang=default_lang):
  res = countries.get_countries(lang)
  return res

# endpoint /countries/{country_id}
# return 登録されている国名を全て取得 object
@app.route('/countries/<int:country_id>', methods=['GET'])
def get_country(country_id=None, lang=default_lang):
  res = countries.get_country(country_id, lang)
  return res

# endpoint /countries_detail
# return 登録されている国の詳細情報を全て取得 [object]
@app.route('/countries_detail', methods=['GET'])
def get_countries_detail(lang=default_lang):
  res = countries_detail.get_countries_detail(lang)
  return res

# endpoint /countries_detail/{country_id}
# return 登録されている国の詳細情報を1つ取得 object
@app.route('/countries_detail/<int:country_id>', methods=['GET'])
def get_country_detail(country_id=None, lang=default_lang):
  res = countries_detail.get_country_detail(country_id, lang)
  return res

# Wake up Server
if __name__ == '__main__':
  app.run(host='0.0.0.0', port=8080, debug=True)