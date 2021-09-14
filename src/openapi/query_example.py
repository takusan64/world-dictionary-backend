from enum import Enum
from pydantic import BaseModel

class language_enum(str, Enum):
  ja = 'ja'
  en = 'en'