import psycopg2
import psycopg2.extras
from database.database import DB_Base
from openapi import query as query_model

class DataBase_Countries(DB_Base):
  def get_countries(self, lang:query_model.Language_Enum):
    try:
      with self.create_connection() as connection:
        with connection.cursor() as cursor:
          cursor.execute(f"select con.id, con.code, con.name, con.label, con_grp.id, con_grp.label \
            from countries_{lang} con inner join country_groups_{lang} con_grp \
            on con.country_group_id = con_grp.id;")
          result = cursor.fetchall()
          print(result)
          print("DB commit")
          return result
    except Exception as e:
      print("DB rollback")
      print(e.args)
      return None
  def get_country(self, country_id:int, lang:query_model.Language_Enum):
    try:
      with self.create_connection() as connection:
        with connection.cursor() as cursor:
          cursor.execute("select * from countries_" + lang + " where id=%s;", (country_id,))
          cursor.execute("select con.id, con.code, con.name, con.label, con_grp.id, con_grp.label \
            from countries_" + lang + " con inner join country_groups_" + lang + " con_grp \
            on con.country_group_id = con_grp.id where con.id=%s;", (country_id,))
          result = cursor.fetchall()
          print(result)
          print("DB commit")
          return result
    except Exception as e:
      print("DB rollback")
      print(e.args)
      return None