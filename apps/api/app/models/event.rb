# == Schema Information
#
# Table name: events
#
#  id          :bigint           not null, primary key
#  address     :string
#  blurb       :string
#  description :string
#  end         :datetime
#  start       :datetime
#  title       :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  user_id     :bigint
#
# Indexes
#
#  index_events_on_user_id  (user_id)
#
class Event < ApplicationRecord
  belongs_to :user
end
