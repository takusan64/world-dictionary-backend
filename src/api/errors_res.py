from flask import abort

def error_400():
  print("400: Bad Request error.")
  return abort(400)

def error_401():
  print("401: Authentication error.")
  return abort(401)

def error_404():
  print("404: Not Found error.")
  return abort(404)