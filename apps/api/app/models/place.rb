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
class Place < ApplicationRecord
end
