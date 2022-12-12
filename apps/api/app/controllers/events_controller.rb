require "time"

class EventsController < ApplicationController
  before_action :set_event, only: %i[show update destroy]

  # GET /events
  def index
    @events = Event.all

    render json: @events
  end

  # GET /events/1
  def show
    render json: @event
  end

    # GET /events/upcoming
  def upcoming
    today = Time.today.beginning_of_day
    @events = Event.where('start > ?', today)
  
    render json: @events
  end

  # POST /events
  def create
    @event = Event.new(user_params)

    if @event.save
      render json: @event, status: :created, location: @event
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /events/1
  def update
    if @event.update(event_params)
      render json: @event
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  # DELETE /events/1
  def destroy
    @event.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_event
    @event = Event.find_by(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def event_params
    params.require(:event).permit(:title, :description)
  end
end
