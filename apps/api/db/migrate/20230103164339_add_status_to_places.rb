class AddStatusToPlaces < ActiveRecord::Migration[7.0]
  def change
    add_column :places, :status, :integer
  end
end
