Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root"
  
  namespace :api, defaults: { format: :json } do 
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show, :index]
    resources :pins, only: [:create, :show, :index, :update, :destroy]
    resources :boards, only: [:create, :show, :edit, :destroy, :index]
  end
end
