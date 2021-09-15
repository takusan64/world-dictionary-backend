import os
from os.path import join, dirname
from dotenv import load_dotenv

env_path = join(dirname(__file__), '.env')
load_dotenv(env_path)

API_AUTH_FEATURE = os.environ.get('API_AUTH_FEATURE', 'False').lower() in ('true') or False
DEFAULT_LANGUAGE = os.environ.get('DEFAULT_LANGUAGE') or 'ja'
VERSION = os.environ.get('VERSION') or '1.0.0'