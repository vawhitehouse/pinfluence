class ApplicationController < ActionController::Base

  helper_method :logged_in?, :current_user

  def current_user
    return nil unless session[:session_token]
    User.find_by(session_token: session[:session_token])
  end

  def require_login
    redirect_to new_session_url unless logged_in?
  end

  def login!(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil 
  end

  def logged_in?
    !!current_user
  end
  
end
