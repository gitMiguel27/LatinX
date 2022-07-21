class Country < ApplicationRecord
    has_many :artworks
    has_many :artists
    has_many :users
end
