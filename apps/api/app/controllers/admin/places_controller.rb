# frozen_string_literal: true

module Admin
  # admin:: places controller:w
  class PlacesController < ApplicationController
    before_action :set_place, only: %i[show update destroy upload_image]
    before_action :set_current_user, only: %i[create]

    # GET /admin/places
    def index
      @places = Place.order(:created_at).includes(:user)
      render json: Admin::PlaceSerializer.new(@places, include: [:user]).serializable_hash
    end

    # GET /admin/places/1
    def show
      render json: Admin::PlaceSerializer.new(@place, include: [:user]).serializable_hash
    end

    # POST /admin/places
    def create
      @place = Place.new(place_params.merge(user_id: @current_user.id))

      if @place.save
        render json: Admin::PlaceSerializer.new(@place, include: [:user]), status: :created, location: @place
      else
        render json: @place.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /admin/places/1
    def update
      if @place.update(place_params)
        render json: Admin::PlaceSerializer.new(@place, include: {
                                                  user: { only: %i[email name] }
                                                })
      else
        render json: @place.errors, status: :unprocessable_entity
      end
    end

    def upload_image
      @place.primary_image.attach(update_params[:primary_image])
      render json: Admin::PlaceSerializer.new(@place, include: {
                                                user: { only: %i[email name] }
                                              })
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
      params.require(:place).permit(:title, :description, :blurb, :status, :primary_image)
    end

    def update_params
      params.require(:place).permit(:primary_image)
    end

    def set_current_user
      @current_user = User.find(params[:user_id])
    end
  end
end
