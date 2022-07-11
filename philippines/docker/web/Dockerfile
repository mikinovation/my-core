FROM ruby:3.1

RUN mkdir /app && \
    apt-get update -y && \
    apt-get install default-mysql-client nodejs npm -y && \
    # rails-erdを利用するために必要なパッケージをインストール
    apt-get install graphviz -y && \
    npm uninstall yarn -g && \
    npm install yarn -g -y && \
    npm install n -g && \
    n stable && \
    apt-get purge -y nodejs npm

WORKDIR /app

COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock

RUN bundle install

COPY . /app