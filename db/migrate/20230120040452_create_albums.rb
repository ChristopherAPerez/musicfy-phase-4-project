class CreateAlbums < ActiveRecord::Migration[6.1]
  def change
    create_table :albums do |t|
      t.string :title
      t.string :artist
      t.string :genre
      t.integer :likes
      t.integer :hours
      t.integer :minutes
      t.integer :seconds
      t.string :album_image
      t.integer :user_id
      t.integer :song_id

      t.timestamps
    end
  end
end
