class User < ApplicationRecord

    has_many :books

    has_secure_password
 
    validates :email, :username, presence: true
    validates :username, uniqueness: true

end
