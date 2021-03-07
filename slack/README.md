# Slack用お昼休憩管理アプリ

## 開発環境
- Docker
- Vuejs
- TypeScript
- NodeJS

- 環境構築
TODO

## 使用ライブラリ
TODO

## slack トークン取得
### Slack Apps作成
1. 以下にアクセスして、appを作成する。
```
https://api.slack.com/apps
````
2. `Create New App`ボタン押下
3. `App Name`と`Development Slack Workspace`を入力して、「Create App」ボタンを押下する。

### Permission設定
1. 作成したAppのページに遷移する。
2. 左メニュー > Features > OAuth & Permissionsを選択する。
3. 以下のPermision Scopeを許可する
- emoji:read
- users.profile:read
- users:read

### アプリインストール
1. 左メニュー > Features > OAuth & Permissionsを選択する。
2. `Install App To Team`ボタンを押下して、ワークスペースにアプリをインストールする。

### トークン確認
1. 左メニュー > Features > OAuth & Permissionsを選択する。
2. OAuth Tokens for Your Teamにトークンが表示されているので、そちらを`slackConfig.json`の`slack-api-key`に設定する

## ビルド方法
1. 設定ファイルを変更する
    1. 「slackConfig-Templaet.json」を「slackConfig.json」に変更する。
    2. 「slackConfig.json」の値を変更する。  
     ```
     - slack-api-key => apiキーを設定する。  
     - ignore-users => 表示をしないユーザーを設定する。(Slackbotなど)
     ```
2. node_modulesインストール  
以下のフォルダで、`npm -D install`を実行する。