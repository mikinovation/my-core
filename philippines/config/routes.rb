Rails.application.routes.draw do
  root 'components#index'
  get 'components/index'
  get "/login", to: "login#index"
end
