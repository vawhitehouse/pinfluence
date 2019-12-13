class AddIndiciesToBoardPins < ActiveRecord::Migration[5.2]
  def change
    add_index :board_pins, :board_id
    add_index :board_pins, :pin_id
  end
end
