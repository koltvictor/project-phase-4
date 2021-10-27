class ApplicationController < ActionController::API

  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :invalid 

  before_action :authorize

  private 

  def invalid(inst)
    render json: {errors: inst.record.errors.full_messages},
    status: :unprocessable_entity 
  end 

  def authorize 
    # @current_user ||= session[:user_id] && User.find_by_id(session[:user_id])
    @current_user ||= User.find_by_id(session[:user_id])
    # @current_user = User.first
    render json: {error: "Please Login :-)"}, status: :unauthorized unless @current_user
  end 

end
