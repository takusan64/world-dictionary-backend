import psycopg2
import psycopg2.extras
from database.database import DB_Base
from openapi import request as req_model

class DataBase_Countries_Detail(DB_Base):
  def get_countries_detail(self, lang:req_model.Language_Enum):
    try:
      with self.create_connection() as connection:
        with connection.cursor() as cursor:
          cursor.execute(f"select country_id, overview, other from country_details_{lang};")
          result = cursor.fetchall()
          print(result)
          print("DB commit")
          return result
    except Exception as e:
      print("DB rollback")
      print(e.args)
      return None
  def get_country_detail(self, country_id:int, lang:req_model.Language_Enum):
    try:
      with self.create_connection() as connection:
        with connection.cursor() as cursor:
          cursor.execute("select country_id, overview, other from country_details_" + lang \
            + " where id=%s;", (country_id,))
          result = cursor.fetchall()
          print(result)
          print("DB commit")
          return result
    except Exception as e:
      print("DB rollback")
      print(e.args)
      return None