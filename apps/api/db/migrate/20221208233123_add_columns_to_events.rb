class AddColumnsToEvents < ActiveRecord::Migration[7.0]
  def change
    add_column :events, :blurb, :string
    add_column :events, :start, :datetime
    add_column :events, :end, :datetime
    add_column :events, :address, :string
  end
end
