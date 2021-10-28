class BookSerializer < ActiveModel::Serializer
  
  attributes :id, :title, :image_url, :isbn, :publisher, :description, :price, :can_modify

  has_many :authors

  # if this can_modify is true, we should show delete action on frontend, if not, dont serialize it
  def can_modify
    object.user == current_user
  end

end
