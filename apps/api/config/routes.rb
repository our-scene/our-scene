Rails.application.routes.draw do
  resources :events do
    collection do
      get 'upcoming', to: 'events#upcoming'
    end
  end
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  root to: 'application#not_found'
end
