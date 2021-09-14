import json
import config

def create_openapi_jsonfile(app):
  openapi_data = app.openapi()
  with open('openapi.json', 'w') as f:
    json.dump(openapi_data, f, ensure_ascii=False, indent=2)
  print("Created OpenAPI JSON File")
  return