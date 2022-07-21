class CreateArtists < ActiveRecord::Migration[6.1]
  def change
    create_table :artists do |t|
      t.string :name
      t.string :pic
      t.string :hometown
      t.string :nationality
      t.integer :birth
      t.integer :death
      t.string :biography
      t.string :life_mission
      t.belongs_to :country, null: false, foreign_key: true

      t.timestamps
    end
  end
end
