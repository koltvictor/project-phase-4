class ApplicationController < ActionController::API

  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :invalid 

  private 

  def invalid(inst)
    render json: {errors: inst.record.errors.full_messages},
    status: :unprocessable_entity 
  end 

end
