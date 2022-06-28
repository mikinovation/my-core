FROM ruby:3.1

RUN mkdir /app && \
    apt-get update -y && \
    apt-get install default-mysql-client nodejs npm -y && \
    npm uninstall yarn -g && \
    npm install yarn -g -y

WORKDIR /app

COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock

RUN bundle install

COPY . /app