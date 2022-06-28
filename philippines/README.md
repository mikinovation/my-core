# README

## 開発環境の構築

```shell
docker compose build
docker compose up
```

## コンテナへ入る

```shell
docker compose exec web /bin/sh
```

## packageのインストール

```shell
bundle install
```

## データベースの作成

```shell
bundle exec rails db:create
```

## データベースのマイグレーションとシーディング

```shell
bundle exec rails db:migrate:reset
bundle exec rails db:seed_fu
```

## フロントエンドの開発環境起ち上げ

```shell
yarn build --watch
```

## テスト

```shell
bundle exec rspec
# ディレクトリやファイルを絞り込みたい場合
bundle exec rspec spec/graphql
bundle exec rspec spec/graphql/types/object_types/user_type_spec.rb
```

## コードフォーマット

rubocop

```shell
bundle exec rubocop -A
```