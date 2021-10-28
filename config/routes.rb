Rails.application.routes.draw do
  
  # resources :author_books

  resources :authors, only: [:index, :create]

  resources :books, only: [:index, :show, :create, :destroy]

  get '/me', to: 'users#show'

  post '/signup', to: 'users#create'

  post '/login', to: 'session#create'

  delete '/logout', to: 'session#destroy'
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
