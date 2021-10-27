Rails.application.routes.draw do
  
  # resources :author_books

  resources :authors, only: [:index, :create]

  resources :books, only: [:index, :show, :create, :destroy]

  get '/api/me', to: 'users#show'

  post '/api/signup', to: 'users#create'

  post '/api/login', to: 'sessions#create'

  delete '/api/logout', to: 'sessions#destroy'
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
