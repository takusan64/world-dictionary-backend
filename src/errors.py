from fastapi.responses import JSONResponse

def error_400():
  print("400: Bad Request error.")
  return JSONResponse(status_code=400, content="Bad Request")

def error_401():
  print("401: Authentication error.")
  return JSONResponse(status_code=401, content="Unauthorized")

def error_404():
  print("404: Not Found error.")
  return JSONResponse(status_code=404, content="Not Found")