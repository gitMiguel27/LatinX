class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :profile_pic, :nationality, :age, :life_mission
  has_one :country
end
