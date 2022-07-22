# == Schema Information
#
# Table name: courses
#
#  id          :bigint           not null, primary key
#  language    :string(255)
#  price       :integer          not null
#  trial_price :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  user_id     :bigint
#
# Indexes
#
#  index_courses_on_language  (language)
#  index_courses_on_user_id   (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
require 'rails_helper'

RSpec.describe Course, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
