### 実装概要

Nestjsを利用して実装しました。デプロイはvercelを利用しています。

## ソースコード

main.ts
listenとAppModuleのインポートをしています。

app.controller.ts
app.controller.spec.ts
app.service.ts
app.module.ts
プロジェクト作成時のデフォルトのAPIです。
/ にgetしたとき"Hello World"を返します。

app.module.ts
FibModuleをインポートしていて、APIをモジュール単位で管理しています。

fib.controller.ts
fib.controller.spec.ts
fib.service.ts
fib.service.spec.ts
fib.module.ts
フィボナッチ数を計算して返すAPIです。
/fib にgetしたとき計算結果を返します。

fib.controller.ts
リクエストとレスポンスの管理
fib.service.ts
ビジネスロジック部分
fib.module.ts
モジュール管理

fib.controller.spec.ts, fib.service.spec.ts
単体テスト用

## localでの実行方法

npm i
パッケージのインストール

npm run build
ビルド

npm run start:prod
本番環境で実行
http://localhost:3000
で実行されてます

## 単体テスト

npm run test
specファイルが実行されてテストケースが通れば完了です。
