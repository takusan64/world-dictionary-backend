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


# Register Env Param
API_AUTH_FEATURE = os.environ.get('API_AUTH_FEATURE', 'False').lower() in ('true') or False
DEFAULT_LANGUAGE = os.environ.get('DEFAULT_LANGUAGE') or 'ja'
VERSION = os.environ.get('VERSION') or '1.0.0'
SHOW_SWAGGER_PATH = url_path_check(os.environ.get('SHOW_SWAGGER_PATH')) or None
SHOW_REDOC_PATH = url_path_check(os.environ.get('SHOW_REDOC_PATH')) or None
SHOW_OPENAPI_PATH = url_path_check(os.environ.get('SHOW_OPENAPI_PATH')) or None