# awslambda-simple3

[Express](https://expressjs.com/)
と
[serverless](https://www.npmjs.com/package/serverless)
を使った AWS Lambda. Nodejs 10.x

# 参考リンク

[Express で作ったアプリを AWS Lambda で動かすまで - Qiita](https://qiita.com/ozaki25/items/504da150d6f8318e354f)

# 動かし方

## 準備

事前に

```sh
npm install -g serverless
```

しておく。
`npm install -D serverless` でもいいのだが、
[serverless](https://www.npmjs.com/package/serverless)
かなり大きな依存関係を持つので使いまわす。

で、あとは普通に

```bash
git clone https://github.com/heiwa4126/awslambda-simple3.git
cd awslambda-simple3
npm i
```

npm でも yarn でも OK。
ただし pnpm だと node_mpdules/がリンクになるので、いろいろ設定しないとダメ。
express.js と serverless-http を layer にするとか。
layer にはしたほうがいいとは思うけど

## 修正

app.js が Express の main なので、好きなように修正する。

```bash
npm start
curl -i http://localhost:8080/
```

のようにローカルでテスト。
再起動は `npm restart`。
終了は `npm stop`。

(Windows だったら`node utils/localserver.js`で)

[serverless.yml](/serverless.yml)
をお好みで修正。
service: や region: などを書き換えてみる。
AWS での serverless.yml の書式は
[Serverless Framework - AWS Lambda Guide - Serverless.yml Reference](https://serverless.com/framework/docs/providers/aws/guide/serverless.yml/)
にある。

## デプロイと削除

```bash
npm run deploy
# `npx serverless deploy` でもOK。
# 
```

でデプロイ。

URL が表示されるので curl や WWW ブラウザでアクセス。

```bash
npm run remove
```

で削除。

## トラブルシューティング

デプロイやスタックの削除で
"unable to get local issuer certificate" というエラーになったら
たぶんそれは会社のプロキシのせい。
バイパスするか無効にするかしてください。
