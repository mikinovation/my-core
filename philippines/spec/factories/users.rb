# == Schema Information
#
# Table name: users
#
#  id                     :bigint           not null, primary key
#  country                :string(255)      default(""), not null
#  email                  :string(255)      default(""), not null
#  encrypted_password     :string(255)      default(""), not null
#  first_name             :string(255)      default(""), not null
#  introduction           :string(255)      default("")
#  is_student             :boolean          default(FALSE), not null
#  is_teacher             :boolean          default(FALSE), not null
#  last_name              :string(255)      default(""), not null
#  name                   :string(255)      default(""), not null
#  remember_created_at    :datetime
#  reset_password_sent_at :datetime
#  reset_password_token   :string(255)
#  short_introduction     :string(255)      default("")
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#
# Indexes
#
#  index_users_on_email                 (email) UNIQUE
#  index_users_on_reset_password_token  (reset_password_token) UNIQUE
#
require 'securerandom'

FactoryBot.define do
  password = SecureRandom.hex(8)
  factory :user do
    email { Faker::Internet.email }
    name { Faker::Name.unique.name }
    first_name { Faker::Name.unique.name }
    last_name { Faker::Name.unique.name }
    role { 'student' }
    country { Faker::Address.country }
    password { password }
    password_confirmation { password }
  end
end
