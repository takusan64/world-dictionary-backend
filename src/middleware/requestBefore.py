from flask import abort, request

class RequestBefore(object):
  def __init__(self, app) :
    self.app = app

  def check_auth_token(self):
    if self.app.config['API_AUTH_FEATURE']:
      print("401: authentication error.")
      return abort(401)
    print("passed authentication.")