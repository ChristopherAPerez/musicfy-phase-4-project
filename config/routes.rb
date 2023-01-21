Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  ################# Routes #####################

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "/users", to: "users#index"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  patch "update_profile", to: "users#update"

  get "/albums", to: "albums#index"
  post "new_album", to: "albums#create"
  get "/my_music", to: "albums#show"

  get "/songs", to: "songs#index"
  post "new_song", to: "songs#create"

  ################# Routes #####################

end
