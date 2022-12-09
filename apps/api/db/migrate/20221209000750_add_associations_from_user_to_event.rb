class AddAssociationsFromUserToEvent < ActiveRecord::Migration[7.0]
  def change
    add_reference :events, :user
  end
end
