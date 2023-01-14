# == Schema Information
#
# Table name: places
#
#  id          :bigint           not null, primary key
#  blurb       :string
#  description :string
#  status      :integer
#  title       :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  user_id     :integer
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
class Place < ApplicationRecord
  has_one_attachment :primary_image
  belongs_to :user

  enum status: %i[active inactive draft archived]
end
