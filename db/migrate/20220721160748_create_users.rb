class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :username
      t.string :password_digest
      t.string :profile_pic
      t.string :nationality
      t.integer :age
      t.string :life_mission
      t.belongs_to :country, null: false, foreign_key: true

      t.timestamps
    end
  end
end
