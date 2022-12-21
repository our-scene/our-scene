class ApplicationController < ActionController::API
  before_action :authorize

  def authorize
    @headers = request.headers
    if @headers['Authorization'].present?
      token = @headers['Authorization'].split(' ').last
      decoded_token = decode_google_id_token(token)
      render json: { error: 'ID_TOKEN_EXPIRED' }, status: 401 and return if decoded_token[:error].present?

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

  def find_or_create_user_from_decoded_token(decoded_token)
    email = decoded_token[:email]
    @user = User.find_or_create_by(email: email)
  end

  def decode_google_id_token(token)
    token_data = Google::Auth::IDTokens.verify_oidc(token)
    decoded_token = ActiveSupport::HashWithIndifferentAccess.new(token_data)
    email_verified = decoded_token[:email_verified]
    render json: { error: 'GOOGLE_EMAIL_NOT_VERIFIED' }, status: 401 unless email_verified
    decoded_token
  rescue Google::Auth::IDTokens::ExpiredTokenError
    { error: 'ID_TOKEN_EXPIRED' }
  rescue Google::Auth::IDTokens::SignatureError
    { error: 'ID_TOKEN_SIGNATURE_ERROR' }
  end
end
