# README

## 開発環境の構築

```shell
docker compose build
docker compose up
```

## コンテナへ入る

```shell
docker compose exec web /bin/sh
docker compose exec db mysql -u root -p app_development
```

開発環境用のmysqlのパスワード「password」

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

## ブラウザを開く

http://localhost

## ER図の作成

```shell
bundle exec rails erd
```

## テスト

```shell
bundle exec rspec
# ディレクトリやファイルを絞り込みたい場合
bundle exec rspec spec/models
bundle exec rspec spec/models/user_spec.rb
```

## コードフォーマット

rubocop

```shell
bundle exec rubocop -A
```

## storybook

```shell
yarn storybook
```