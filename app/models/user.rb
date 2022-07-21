class User < ApplicationRecord
  belongs_to :country
  has_many :artworks 

  has_secure_password

  validates :username, presence: true, uniqueness: true
end