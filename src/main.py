from fastapi import FastAPI, Request, HTTPException
from api.api import router
from middleware import middleware
from openapi import openapi_util
from openapi import metadata
from errors import error_401
import config
from database.database_util import DataBase_Util

db_util = DataBase_Util(
  host = config.DB_HOST,
  port = config.DB_PORT,
  user = config.DB_USER,
  password = config.DB_PASSWORD,
  database = config.DATABASE
)

app = FastAPI(
  title = metadata.title,
  description = metadata.description,
  version = metadata.version,
  license_info = metadata.license_info,
  openapi_tags = metadata.tags_metadata,
  docs_url=config.SHOW_SWAGGER_PATH,
  redoc_url=config.SHOW_REDOC_PATH,
  openapi_url=config.SHOW_OPENAPI_PATH
)

# Wake up Event
@app.on_event("startup")
async def startup_event():
  try:
    openapi_util.create_openapi_jsonfile(app)
    db_util.connect_check()
  except Exception:
    print("Application startup is not completed.")
    raise

# request entry point
@app.middleware("http")
async def entry_point(request: Request, call_next):
  if not middleware.check_auth_token():
    raise HTTPException(status_code=error_401.status_code, detail=error_401.detail)
  response = await call_next(request)
  return response

# RESR API Router
app.include_router(router)