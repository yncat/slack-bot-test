# Nodeでボットちゃん
BWのボットにしたい。  

## 準備
Slackにいって、ボット連携用のトークンを払い出してきます。xoxb-で始まるやつ。

払い出してもらったトークンを、実行したい環境の SLACK_BOT_TOKEN という環境変数に入れます。

s3へのアクセス権を持ったAWSのトークンを払い出してきます。

環境変数 AWS_ACCESS_KEY_ID に token を、 AWS_SECRET_ACCESS_KEY にsecret keyを設定します。

あとは、普通に

npm install

すればいいです。

これで準備完了。

## 起動

npm start

## heroku にデプロイ

環境変数を設定して、(設定方法そのうち書くのでちょいまって)

git push heroku master

すれば動く。

herokuのアプリは、一定時間リクエストがないと寝てしまうので、 uptime robot でもなんでもいいから、定期的にリクエスト飛ばすやつを走らせておくといい。

