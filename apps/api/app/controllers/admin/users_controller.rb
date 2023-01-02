module Admin
  class UsersController < ApplicationController
    before_action :set_user, only: %i[show update destroy]
    skip_before_action :authorize, only: %i[create_or_find_by_email]

    # GET /admin/users
    def index
      @users = User.all

      render json: @users
    end

    # GET /admin/users/1
    def show
      render json: @user
    end

    # POST /admin/users/:email
    # For session? maybe use better name for method?
    def create_or_find_by_email
      # TODO: create if not found
      existing_user = User.find_by(email: user_params[:email])
      p 'EXISTING USER'
      p existing_user
      render json: existing_user and return unless existing_user.nil?
      @user = User.new(user_params)
      if @user.save
        render json: @user, status: :created, location: @user
      else
        render json: @user.errors, status: :unprocessable_entity
      end
    end

    # POST /admin/users
    def create
      @user = User.new(user_params)

      if @user.save
        render json: @user, status: :created, location: @user
      else
        render json: @user.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /admin/users/1
    def update
      if @user.update(user_params)
        render json: @user
      else
        render json: @user.errors, status: :unprocessable_entity
      end
    end

    # DELETE /admin/users/1
    def destroy
      @user.destroy
    end

    private

    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:name, :email)
    end
  end
end
