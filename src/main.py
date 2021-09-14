from os import read
from fastapi import FastAPI, Request
from api.api import router
from middleware import middleware
from openapi import openapi_util
import errors

app = FastAPI()

# Wake up Event
@app.on_event("startup")
async def startup_event():
  openapi_util.create_openapi_jsonfile(app)

# request entry point
@app.middleware("http")
async def entry_point(request: Request, call_next):
  if not middleware.check_auth_token():
    return errors.error_400()
  response = await call_next(request)
  return response

# RESR API Router
app.include_router(router)