class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :name, :pic, :hometown, :nationality, :birth, :death, :biography, :life_mission
  has_one :country
  has_many :artworks
end
