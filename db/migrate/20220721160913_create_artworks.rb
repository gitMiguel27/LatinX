class CreateArtworks < ActiveRecord::Migration[6.1]
  def change
    create_table :artworks do |t|
      t.string :title
      t.string :image
      t.string :category
      t.integer :date
      t.string :current_location
      t.belongs_to :artist, null: true, foreign_key: true, optional: true
      t.belongs_to :user, null: true, foreign_key: true, optional: true

      t.timestamps
    end
  end
end
