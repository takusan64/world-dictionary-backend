def country_filter(countries, country_id):
  res_country = {}
  for country in countries:
    if country["country_id"] == country_id:
      res_country = country
      break
  return res_country

def country_detail_filter(countries_detail, country_id):
  res_country_detail = {}
  for country_detail in countries_detail:
    if country_detail["country_id"] == country_id:
      res_country_detail = country_detail
      break
  return res_country_detail