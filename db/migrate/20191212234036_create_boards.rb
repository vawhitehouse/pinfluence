class CreateBoards < ActiveRecord::Migration[5.2]
  def change
    create_table :boards do |t|
      t.string :board_name, null: false
      t.string :description
      t.boolean :private, null: false, default: false
      t.integer :creator_id, null: false

      t.index :board_name
      t.index :creator_id

      t.timestamps
    end
  end
end
