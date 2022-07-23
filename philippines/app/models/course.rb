# == Schema Information
#
# Table name: courses
#
#  id          :bigint           not null, primary key
#  price       :integer          not null
#  trial_price :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  language_id :bigint
#  user_id     :bigint
#
# Indexes
#
#  index_courses_on_language_id  (language_id)
#  index_courses_on_user_id      (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (language_id => languages.id)
#  fk_rails_...  (user_id => users.id)
#
class Course < ApplicationRecord
  belongs_to :user
end
