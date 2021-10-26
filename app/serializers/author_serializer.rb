class AuthorSerializer < ActiveModel::Serializer

  attributes :id, :name, :image_url, :description

  has_many :books
  
end
