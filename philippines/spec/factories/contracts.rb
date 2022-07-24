# == Schema Information
#
# Table name: contracts
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  student_id :bigint           not null
#  teacher_id :bigint           not null
#
# Indexes
#
#  fk_rails_46fbd63cd3  (student_id)
#  fk_rails_b8a6e77614  (teacher_id)
#
# Foreign Keys
#
#  fk_rails_...  (student_id => users.id)
#  fk_rails_...  (teacher_id => users.id)
#
FactoryBot.define do
  factory :contract do
    
  end
end
