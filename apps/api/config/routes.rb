Rails.application.routes.draw do
  resources :events
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  root to: 'application#not_found'
end
