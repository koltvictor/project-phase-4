class Api::BooksController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :not_found

    before_action :set_book, only: [:destroy]
    before_action :authorize, only: [:destroy]

    def index 
        render json: Book.all
    end 

    def show 
        @book = Book.find(params[:id])
        render json: @book, 
        status: :ok
    end

    def create 
        @new_book = Book.new(book_params)
        @new_book.user = @current_user
        @authors = params[:author].each do |author|
            @new_book.authors << Author.find(author[:id]) 
        end 
        if @new_book.save
            render json: @new_book,
            status: :created
        else 
            render json: @new_book.errors.full_messages,
            status: :unprocessable_entity
        end 
    end 

    def destroy 
        @book.destroy 
        head :no_content 
    end 

    private 

    def book_params 
        params.permit(:title, :image_url, :isbn, :description, :publisher, :price)
    end 

    def not_found
        render json: {error: "Book Is Not In The Database!"},
        status: :not_found 
    end

    def set_book
        @book = Book.find(params[:id])
    end 

    def authorize 
        can_modify = @book.user == current_user
        if !can_modify
            render json: {error: "Only A Seller Can Delete A Book"},
            status: :forbidden
        end
    end

end
