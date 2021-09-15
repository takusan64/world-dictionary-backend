from os import read
from fastapi import FastAPI, Request
from api.api import router
from middleware import middleware
from openapi import openapi_util
from openapi import metadata
import errors
import config

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
  openapi_util.create_openapi_jsonfile(app)

# request entry point
@app.middleware("http")
async def entry_point(request: Request, call_next):
  if not middleware.check_auth_token():
    return errors.error_401()
  response = await call_next(request)
  return response

# RESR API Router
app.include_router(router)