from fastapi import Path, Query
from pydantic import BaseModel
from enum import Enum
import config

def_lang = config.DEFAULT_LANGUAGE

class Language_Enum(str, Enum):
  ja = 'ja'
  en = 'en'

class Get_Country_Param(BaseModel):
  country_id: int = Path(..., ge=1, le=196)
  lang: Language_Enum = Query(default=def_lang)

class Get_Countries_Param(BaseModel):
  lang: Language_Enum = Query(default=def_lang)

class Get_Country_Detail_Param(BaseModel):
  country_id: int = Path(..., ge=1, le=196)
  lang: Language_Enum = Query(default=def_lang)

class Get_Countries_Detail_Param(BaseModel):
  lang: Language_Enum = Query(default=def_lang)