class BookSerializer < ActiveModel::Serializer
  
  attributes :id, :title, :image_url, :isbn, :publisher, :description, :price

  has_many :authors

end
