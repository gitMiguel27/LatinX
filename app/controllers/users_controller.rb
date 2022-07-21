class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]

    def index
        users = User.all
        render json: users, status: :ok
    end

    def create
        country = Country.find_by(name: params[:country])
        user = User.create!(name: params[:name], username: params[:username], password: params[:password], nationality: params[:nationality], age: params[:age], life_mission: params[:life_mission], country_id: country.id)
        session[:user_id] = user.id
        render json: user, status: :created
      end
    
      def show
        render json: @current_user
      end
    
      # private
    
      # def user_params
      #   params.permit(:name, :username, :password, :nationality, :age, :life_mission)
      # end
end
