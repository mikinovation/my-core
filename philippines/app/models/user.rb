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
class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :teacher_languages
  has_many :languages, through: :teacher_languages
  has_many :chat_rooms
  has_many :requests

  MINIMUM_PASSWORD_LENGTH = 8

  validates :email, presence: true, uniqueness: true
  validates :name, presence: true
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :role, presence: true
  validates :country, presence: true
  validates :password, presence: true, length: { minimum: MINIMUM_PASSWORD_LENGTH }
  validates :password_confirmation, presence: true, length: { minimum: MINIMUM_PASSWORD_LENGTH }
end
