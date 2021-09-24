from pydantic import BaseModel

class Country(BaseModel):
  country_id: int
  country_code: str
  name: str
  name_label: str
  name_group_id: int
  name_group_label: str

class Country_Detail(BaseModel):
  country_id: int
  overview: str
  other: str