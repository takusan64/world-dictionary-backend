import config
###########################################
# The beginning description of the document
###########################################
title = "World Dictionary REST API🌐"
description = """
💡World Dictionary can use Restful API !!
"""
version = config.VERSION
license_info = {
  "name": "MIT License",
  "url": "https://opensource.org/licenses/mit-license.php",
}


#################################
# Description of each endpoint
#################################
tags_metadata = [
  {
    "name": "country",
    "description": "using basic data for one country.",
  },
  {
    "name": "countries",
    "description": "using all countries basic data."
  },
  {
    "name": "country_detail",
    "description": "using detail data for one country.",
  },
  {
    "name": "countries_detail",
    "description": "using all countries detail data."
  }
]