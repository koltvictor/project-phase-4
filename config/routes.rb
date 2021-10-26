Rails.application.routes.draw do
  
  # resources :author_books

  resources :authors, only: [:index, :create]

  resources :books, only: [:index, :show, :create]



  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
