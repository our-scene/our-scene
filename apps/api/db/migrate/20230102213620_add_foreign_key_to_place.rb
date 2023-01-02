class AddForeignKeyToPlace < ActiveRecord::Migration[7.0]
  def change
    add_column :places, :user_id, :integer, index: true
    add_foreign_key :places, :users
  end
end
