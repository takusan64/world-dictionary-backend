from flask import Flask, jsonify, request
import json
import urllib.request
import xmltodict
import utilsFunc

app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False

json_file_open = open('db.json', 'r')
json_data = json.load(json_file_open)

@app.route('/', methods=['GET'])
def index():
  # パラメーター取得
  keyword = request.args.get('keyword')
  # API通信
  req = 'https://news.google.com/rss/search?q=' + urllib.parse.quote_plus(keyword, encoding='utf-8') + '&hl=ja&gl=JP&ceid=JP:ja'
  # 結果取得
  with urllib.request.urlopen(req) as res:
    body = res.read()
  # XML → 辞書に変換
  dict = xmltodict.parse(body)
  # 辞書 → JSONに変換
  data = json.dumps(dict, indent=4, ensure_ascii=False)
  # 結果返却
  return data

# endpoint /countries
# return 登録されている国名を全て取得 [object]
@app.route('/countries', methods=['GET'])
def get_countries():
  return jsonify(json_data['countries'])

# endpoint /countries/{country_id}
# return 登録されている国名を全て取得 object
@app.route('/countries/<int:country_id>', methods=['GET'])
def get_country(country_id=None):
  countries = json_data['countries']
  res_country = utilsFunc.country_filter(countries, country_id)
  return jsonify(res_country)

# endpoint /countries_detail
# return 登録されている国の詳細情報を全て取得 [object]
@app.route('/countries_detail', methods=['GET'])
def get_countries_detail():
  return jsonify(json_data['countries_detail'])

# endpoint /countries_detail/{country_id}
# return 登録されている国の詳細情報を1つ取得 object
@app.route('/countries_detail/<int:country_id>', methods=['GET'])
def get_country_detail(country_id=None):
  countries_detail = json_data['countries_detail']
  res_country_detail = utilsFunc.country_detail_filter(countries_detail, country_id)
  return jsonify(res_country_detail)

# Wake up Server
if __name__ == '__main__':
  app.run(host='0.0.0.0', port=8080, debug=True)