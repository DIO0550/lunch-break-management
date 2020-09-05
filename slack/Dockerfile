From centos7 AS dev

RUN apt-get update && apt-get install -y yarn
RUN apt-get install -y nodejs npm && npm install n -g && n 12.0.0


RUN mkdir src
WORKDIR /src

ADD src/ /src

RUN npm install -D
RUN npm rebuild node-sass

EXPOSE 3035


FROM node:12 AS Prod

RUN mkdir public
# アプリケーションディレクトリを作成する
WORKDIR /public

# アプリケーションの依存関係をインストールする
# ワイルドカードを使用して、package.json と package-lock.json の両方が確実にコピーされるようにします。
# 可能であれば (npm@5+)
COPY product/ /public

# 本番用にコードを作成している場合
RUN npm install --only=production


EXPOSE 8080
CMD [ "node", "server.js" ]