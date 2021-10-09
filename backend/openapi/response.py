from pydantic import BaseModel, conint

class Country(BaseModel):
  country_id: conint(ge=1, le=196)
  country_code: str
  name: str
  name_label: str
  name_group_id: conint(ge=1)
  name_group_label: str

class Country_Detail(BaseModel):
  country_id: conint(ge=1, le=196)
  overview: str
  other: str