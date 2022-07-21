class Artist < ApplicationRecord
    belongs_to :country
    has_many :artworks
end
