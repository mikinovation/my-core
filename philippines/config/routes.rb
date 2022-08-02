Rails.application.routes.draw do
  root 'components#index'
  get 'components/index'
  get "/login", to: "login#index"
  get "/teachers", to: "teachers#index"

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resource :login, only: [:create], controller: :sessions
    end
  end
end
