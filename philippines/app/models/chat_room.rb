# == Schema Information
#
# Table name: chat_rooms
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  student_id :bigint           not null
#  teacher_id :bigint           not null
#
# Indexes
#
#  fk_rails_c784405dd4  (teacher_id)
#  fk_rails_e3ab1d242a  (student_id)
#
# Foreign Keys
#
#  fk_rails_...  (student_id => users.id)
#  fk_rails_...  (teacher_id => users.id)
#
class ChatRoom < ApplicationRecord
  belongs_to :student, class_name: 'User'
  belongs_to :teacher, class_name: 'User'
end
