from api.database import db, ma

class User(db.Model):
  """
  ユーザーモデル
  """
  # テーブル名
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key=True, autoincrement=True)
  name = db.Column(db.String(50), nullable=False)

class UserSchema(ma.Schema):
  class Meta:
    model = User
    fields = ('id' 'name')
