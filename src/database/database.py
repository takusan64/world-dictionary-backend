import psycopg2
import psycopg2.extras
import config

class DB_Base(object):
  def __init__(self):
    self.host = config.DB_HOST
    self.port = config.DB_PORT
    self.user = config.DB_USER
    self.password = config.DB_PASSWORD
    self.database = config.DATABASE

  # connect db
  def create_connection(self):
    # connect db
    connection = psycopg2.connect(
      host=self.host,
      port=self.port,
      user=self.user,
      password=self.password,
      database=self.database
    )
    connection.set_client_encoding('utf-8')
    connection.cursor_factory=psycopg2.extras.DictCursor
    return connection