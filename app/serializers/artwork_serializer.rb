class ArtworkSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :category, :date, :current_location
  has_one :artist
  has_one :user
end
