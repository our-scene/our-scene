Rails.application.routes.draw do
  namespace :admin do
    resources :places do
      post 'upload_image', on: :member
    end
    resources :users do
      collection do
        post '/', to: 'users#create_or_find_by_email'
      end
    end
  end
  resources :places, only: %i[index show]
  resources :events do
    collection do
      get 'upcoming', to: 'events#upcoming'
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  root to: 'application#not_found'
end
