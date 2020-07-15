# 参考
# https://swallow-incubate.com/archives/blog/20190909

class SystemConfig:

  DEBUG = True

  SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://{user}:{password}@{host}/{db_name}?charset=utf8'.format(**{
      'user': 'lunchbreak',
      'password': 'lunchbreak',
      'host': '192.150.255.10:3306',
      'db_name': 'lunchbreak'
  })

Config = SystemConfig