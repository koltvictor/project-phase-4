class BooksController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :not_found

    def index 
        render json: Book.all
    end 

    def show 
        @book = Book.find(params[:id])
        render json: @book, 
        status: :ok
    end

    def create 
        # byebug
        @new_book = Book.create!(book_params)
        @authors = params[:author].each do |author|
            @new_book.authors=Author.find(author[:id]) 
            # puts author
        end 
        render json: @new_book,
        status: :created
    end 

    private 

    def book_params 
        params.permit(:title, :image_url, :isbn, :description, :publisher, :price)
    end 

    def not_found
        render json: {error: "Book Is Not In The Database!"},
        status: :not_found 
    end

end
