Rails.application.routes.draw do
  namespace :admin do
    resources :places, on: :collection
  end
  resources :places, only: %i[index show]
  resources :events do
    collection do
      get 'upcoming', to: 'events#upcoming'
    end
  end
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  root to: 'application#not_found'
end
