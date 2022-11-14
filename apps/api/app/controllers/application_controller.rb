class ApplicationController < ActionController::API
  def not_found
    render plain: 'These are not the droids you are looking for', status: 404
  end
end
