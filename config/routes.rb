Rails.application.routes.draw do
  
  resources :artworks, only: [:index, :show]
  resources :countries, only: [:index]

  get '/artists', to: "artists#index"
  get '/artists/:id', to: "artists#show"
  get '/users', to: "users#index"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
