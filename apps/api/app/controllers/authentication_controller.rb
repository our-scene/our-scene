class AuthenticationController < ApplicationController
  skip_before_action :authorize

  def autheticate
    user = User.find_email(params[:email])
    if user
      token = encode(user_id: user.id)
      render json: { token: token, user: user }
    else
      render json: { error: 'An Error Happended' }
    end
  end
end
