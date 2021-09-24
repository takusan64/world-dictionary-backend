import psycopg2
import psycopg2.extras
from database.database import DB_Base

class DataBase_Countries(DB_Base):
  def connect_check(self):
    try:
      with self.create_connection() as connection:
        with connection.cursor() as cursor:
          sql="SELECT version();"
          cursor.execute(sql)
          result = cursor.fetchall()
          print(result)
          print("Connected DB")
    except Exception as e:
      print("Can't connected DB")
      print(e.args)
      raise