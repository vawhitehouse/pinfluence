class RemoveUsernameFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_index :users, :username
    remove_column :users, :username
  end
end
