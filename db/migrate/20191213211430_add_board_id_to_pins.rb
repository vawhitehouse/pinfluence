class AddBoardIdToPins < ActiveRecord::Migration[5.2]
  def change
    add_column :pins, :board_id, :integer, null: false
    add_index :pins, :board_id
  end
end
