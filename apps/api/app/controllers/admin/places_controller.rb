# frozen_string_literal: true

module Admin
  # admin:: places controller:w
  class PlacesController < ApplicationController
    before_action :set_place, only: %i[show update destroy upload_image]
    before_action :set_current_user, only: %i[create]

    # GET /admin/places
    def index
      @places = Place.order(:created_at).includes(:user)
      render json: @places.as_json(except: [:user_id], include: [:user])
    end

    # GET /admin/places/1
    def show
      render json: @place
    end

    # POST /admin/places
    def create
      @place = Place.new(place_params.merge(user_id: @current_user.id))

      if @place.save
        render json: @place, status: :created, location: @place
      else
        render json: @place.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /admin/places/1
    def update
      if @place.update(place_params)
        render json: @place
      else
        render json: @place.errors, status: :unprocessable_entity
      end
    end

    def upload_image
      primary_image = params[:primary_image]
      @place.primary_image.purge_later
      @place.primary_image.attach(data: primary_image, filename: 'test.jpeg')
      # @place.attach(primary_image)
      if @place.primary_image.attached?
        p 'here'
        render json: @place
      else
        p '2'
      end
    end

    # DELETE /admin/places/1
    def destroy
      @place.destroy
    end

    private

    # Use callbacks to share common setup or constraints between actions.
    def set_place
      @place = Place.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def place_params
      p 'PARAMS'
      p params
      params.require(:place).permit(:title, :description, :blurb, :status, :primary_image)
    end

    def set_current_user
      @current_user = User.find(params[:user_id])
    end
  end
end
