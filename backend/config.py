import os
from os.path import join, dirname
from dotenv import load_dotenv
from urllib.parse import urlparse

# loading .env file
env_path = join(dirname(__file__), '.env')
load_dotenv(env_path)

# use function
def url_path_check(path):
  sample_host = 'http://localhost'
  sample_url = sample_host + path
  if urlparse(sample_url) and urlparse(sample_url).path == path:
    return path
  return None

def number_check(num=None):
  if isinstance(int(num), int):
    return int(num)
  return None

# Register Env Param
try:
  API_AUTH_FEATURE = os.environ.get('API_AUTH_FEATURE', 'False').lower() in ('true') or False
  DEFAULT_LANGUAGE = os.environ.get('DEFAULT_LANGUAGE') or 'ja'
  VERSION = os.environ.get('VERSION') or '1.0.0'
  SHOW_SWAGGER_PATH = url_path_check(os.environ.get('SHOW_SWAGGER_PATH') or "") or None
  SHOW_REDOC_PATH = url_path_check(os.environ.get('SHOW_REDOC_PATH') or "") or None
  SHOW_OPENAPI_PATH = url_path_check(os.environ.get('SHOW_OPENAPI_PATH')) or None
  DB_HOST = os.environ.get('DB_HOST') or 'pgsql'
  DB_PORT = number_check(os.environ.get('DB_PORT')) or 5432
  DB_USER = os.environ.get('DB_USER') or 'postgres'
  DB_PASSWORD = os.environ.get('DB_PASSWORD') or 'postgres'
  DATABASE = os.environ.get('DATABASE') or 'postgres'
except Exception:
  print("defined param error： check .env file")
  raise