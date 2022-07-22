# == Schema Information
#
# Table name: requests
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  student_id :bigint           not null
#  teacher_id :bigint           not null
#
# Indexes
#
#  fk_rails_1cc9c4ddeb  (student_id)
#  fk_rails_3e94735c12  (teacher_id)
#
# Foreign Keys
#
#  fk_rails_...  (student_id => users.id)
#  fk_rails_...  (teacher_id => users.id)
#
require 'rails_helper'

RSpec.describe Request, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
