class AuthorsController < ApplicationController

    def index 
        render json: Author.all 
    end 

    def create 
        @new_author = Author.create!(author_params)
        render json: @new_author,
        status: :created
    end 

    private 

    def author_params 
        params.permit(:name, :image_url, :description)
    end 
    
end
