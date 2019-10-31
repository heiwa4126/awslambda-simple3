# awslambda-simple3

[Express](https://expressjs.com/)
と
[serverless](https://www.npmjs.com/package/serverless)
を使ったAWS Lambda. Nodejs 10.x


# 参考リンク

[Expressで作ったアプリをAWS Lambdaで動かすまで - Qiita](https://qiita.com/ozaki25/items/504da150d6f8318e354f)


# 動かし方

## 準備

事前に
``` bash
npm install -g serverless
```
しておく。

``` bash
git clone https://github.com/heiwa4126/awslambda-simple3.git
cd awslambda-simple3
yarn install
```
(yarnのかわりにnpmでもOK)

## 修正

app.jsがExpressのmainなので、好きなように修正する。

``` bash
utils/localserver.js &
curl -i http://localhost:8080/
```
のようにローカルでテスト。終わったら`kill %1`など。

[serverless.yml](/serverless.yml)
をお好みで修正。
service: や region: などを書き換えてみる。
AWSでのserverless.ymlの書式は
[Serverless Framework - AWS Lambda Guide - Serverless.yml Reference](https://serverless.com/framework/docs/providers/aws/guide/serverless.yml/)
にある。


## デプロイと削除

``` bash
npx serverless deploy
```
でデプロイ。

URLが表示されるのでcurlやWWWブラウザでアクセス。

``` bash
npx serverless remove
```
で削除。
