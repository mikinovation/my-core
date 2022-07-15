# == Schema Information
#
# Table name: teacher_languages
#
#  id          :bigint           not null, primary key
#  skill       :integer          default("beginner")
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  language_id :bigint
#  user_id     :bigint
#
# Indexes
#
#  index_teacher_languages_on_language_id  (language_id)
#  index_teacher_languages_on_user_id      (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (language_id => languages.id)
#  fk_rails_...  (user_id => users.id)
#
class TeacherLanguage < ApplicationRecord
  belongs_to :user
  belongs_to :language

  enum skill: [ :beginner, :intermediate, :advanced, :native ]

  validates :skill, inclusion: { in: skills.keys }
end
