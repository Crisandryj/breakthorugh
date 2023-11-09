Rails.application.routes.draw do
  resources :groups
  resources :categories
  devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root 'static_pages#root'
  resources :budget_trackers do
    collection do
      get '/chart', to: 'budget_trackers#chart'
    end
  end
end
