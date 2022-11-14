class ApplicationController < ActionController::API
  before_action :authorize

  def authorize
    @headers = request.headers
    if @headers['Authorization'].present?
      token = @headers['Authorization'].split(' ').last
      decoded_token = decode(token)
    end
  end

  def not_found
    render plain: 'These are not the droids you are looking for', status: 404
  end

  private

  def encode; end

  def decode(token)
    body = JWT.decode(token, Rails.application.secrets.secret_key_base)[0]
  end
end
