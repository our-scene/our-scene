# == Schema Information
#
# Table name: places
#
#  id          :bigint           not null, primary key
#  blurb       :string
#  description :string
#  title       :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require "test_helper"

class PlaceTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
