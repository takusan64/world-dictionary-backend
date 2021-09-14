from pydantic import BaseModel
from typing import List, Optional

class country(BaseModel):
  country_id: int
  name: str
  name_label: str
  name_group_id: int
  name_group_label: str

class country_detail(BaseModel):
  country_id: int
  overview: str
  other: str