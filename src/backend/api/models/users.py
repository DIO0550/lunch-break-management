from api.database import db, ma
import datetime

class User(db.Model):
  """
  ユーザーモデル
  """
  # テーブル名
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key=True, autoincrement=True)
  name = db.Column(db.String(50), nullable=False)
  created_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.today())
  updated_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.today(), onupdate=datetime.datetime.today())

  def __repr__(self):
    return '<User %r>' % self.name

  def getUserList():

    # select * from users
    user_list = db.session.query(User).all()

    if user_list == None:
      return []
    else:
      return user_list

  def registUser(user):
    record = User(
      name = user['name'],
    )
   
    # insert into users(name, address, tel, mail) values(...)
    db.session.add(record)
    db.session.commit()

    return user

class UserSchema(ma.Schema):
  class Meta:
    model = User
    fields = ('id' 'name', 'created_at', 'updated_at')
