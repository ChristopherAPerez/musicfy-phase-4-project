class CreateAlbums < ActiveRecord::Migration[6.1]
  def change
    create_table :albums do |t|
      t.string :title
      t.string :artist
      t.string :genre
      t.string :album_image
      t.integer :hours
      t.integer :minutes
      t.integer :seconds
      t.integer :likes

      t.timestamps
    end
  end
end
