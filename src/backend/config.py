# 参考
# https://swallow-incubate.com/archives/blog/20190909

class SystemConfig:

  DEBUG = True

  DATABASE_INFO = 'mysql+pymysql://{user}:{password}@{host}/{db_name}?charset=utf8'.format(**{
      'user': 'lunchbreak',
      'password': 'lunchbreak',
      'host': 'lunchbreak',
      'db_name': 'lunchbreak'
  })

Config = SystemConfig