class ApplicationController < ActionController::API
  before_action :authorize

  def authorize
    @headers = request.headers
    if @headers['Authorization'].present?
      token = @headers['Authorization'].split(' ').last
      decoded_token = decode_google_id_token(token)
      find_or_create_user_from_decoded_token(decoded_token)
      @user = User.find_or_create_by(email: decoded_token[:email])
      render json: { error: 'Not Authorized' }, status: 401 unless @user
    else
      render json: { error: 'Not Authorized' }, status: 401
    end
  end

  def not_found
    render plain: 'These are not the droids you are looking for', status: 404
  end

  private

  # TODO: it might be better rails to do this in the users controller?
  def find_or_create_user_from_decoded_token(decoded_token)
    family_name = decoded_token[:family_name]
    given_name = decoded_token[:given_name]
    email = decoded_token[:email]
    name = "#{given_name} #{family_name}"
    @user = User.find_or_create_by(email: email, name: name)
  end

  def decode_google_id_token(token)
    token_data = Google::Auth::IDTokens.verify_oidc(token)
    decoded_token = ActiveSupport::HashWithIndifferentAccess.new(token_data)
    email_verified = decoded_token[:email_verified]
    render json: { error: 'Google Email Not Verified' }, status: 401 unless email_verified
    decoded_token
  end
end
