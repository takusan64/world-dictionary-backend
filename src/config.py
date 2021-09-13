import os
from os.path import join, dirname
from dotenv import load_dotenv

env_path = join(dirname(__file__), '.env')
load_dotenv(env_path)

API_AUTH_FEATURE = os.environ.get("API_AUTH_FEATURE", 'False').lower() in ('true')
DEFAULT_LANGUAGE = os.environ.get("DEFAULT_LANGUAGE")