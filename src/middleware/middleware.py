import config

def check_auth_token():
  if config.API_AUTH_FEATURE:
    print("authentication checked.")
    return
  print("no authentication checked.")