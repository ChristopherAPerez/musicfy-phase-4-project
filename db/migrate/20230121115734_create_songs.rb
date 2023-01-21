class CreateSongs < ActiveRecord::Migration[6.1]
  def change
    create_table :songs do |t|
      t.string :title
      t.string :feature
      t.integer :hours
      t.integer :minutes
      t.integer :seconds
      t.integer :streams
      t.integer :user_id
      t.integer :album_id

      t.timestamps
    end
  end
end
