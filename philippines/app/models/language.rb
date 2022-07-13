# == Schema Information
#
# Table name: languages
#
#  id         :bigint           not null, primary key
#  name       :string(255)      default(""), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Language < ApplicationRecord
  has_many :users, through: :teacher_languages
  has_many :teacher_languages
end
