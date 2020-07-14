from flask import Flask, make_response, jsonify
from .views.user import user_router
from flask_cors import CORS
from api.database import db
from flask_migrate import Migrate
import config

def create_app():

  app = Flask(__name__)

  # CORS対応
  CORS(app)

  # DB設定を読み込む
  app.config.from_object('config.Config')
  db.init_app(app)
  Migrate(app, db)

  app.register_blueprint(user_router, url_prefix='/api')

  return app

app = create_app()