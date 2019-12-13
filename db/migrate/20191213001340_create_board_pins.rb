class CreateBoardPins < ActiveRecord::Migration[5.2]
  def change
    create_table :board_pins do |t|
      t.integer :board_id, null: false
      t.integer :pin_id, null: false
      
      t.timestamps
    end
  end
end
