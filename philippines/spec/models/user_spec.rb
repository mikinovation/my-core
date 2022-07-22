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
#  last_name              :string(255)      default(""), not null
#  name                   :string(255)      default(""), not null
#  remember_created_at    :datetime
#  reset_password_sent_at :datetime
#  reset_password_token   :string(255)
#  role                   :integer          not null
#  short_introduction     :string(255)      default("")
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#
# Indexes
#
#  index_users_on_email                 (email) UNIQUE
#  index_users_on_reset_password_token  (reset_password_token) UNIQUE
#
require 'rails_helper'

RSpec.describe User, :type => :model do
  describe "validation" do
    it "有効なuserである" do
      user = build(:user)
      user.valid?
      expect(user).to be_valid
    end

    context "email" do
      it "emailが必須であること" do
        user = build(:user, email: nil)
        user.valid?
        expect(user.errors[:email]).to include("can't be blank")
      end

      it "重複したemailがないこと" do
        create(:user, email: "test@example.com")
        user2 = build(:user, email: "test@example.com")
        user2.valid?
        expect(user2.errors[:email]).to include("has already been taken")
      end
    end

    context "name" do
      it "nameが必須であること" do
        user = build(:user, name: nil)
        user.valid?
        expect(user.errors[:name]).to include("can't be blank")
      end
    end

    context "first_name" do
      it "first_nameが必須であること" do
        user = build(:user, first_name: nil)
        user.valid?
        expect(user.errors[:first_name]).to include("can't be blank")
      end
    end

    context "last_name" do
      it "last_nameが必須であること" do
        user = build(:user, last_name: nil)
        user.valid?
        expect(user.errors[:last_name]).to include("can't be blank")
      end
    end

    context "password" do
      it "passwordが必須であること" do
        user = build(:user, password: nil)
        user.valid?
        expect(user.errors[:password]).to include("can't be blank")
      end

      it "passwordが8文字以上であること" do
        user = build(:user, password: '1234567')
        user.valid?
        expect(user.errors[:password]).to include("is too short (minimum is 8 characters)")
      end
    end

    context "password_confirmation" do
      it "password_confirmationが必須であること" do
        user = build(:user, password_confirmation: nil)
        user.valid?
        expect(user.errors[:password_confirmation]).to include("can't be blank")
      end

      it "password_confirmationが8文字以上であること" do
        user = build(:user, password_confirmation: '1234567')
        user.valid?
        expect(user.errors[:password_confirmation]).to include("is too short (minimum is 8 characters)")
      end

      it "password_confirmationがpasswordと一致していること" do
        user = build(:user, password_confirmation: '12345678')
        user.valid?
        expect(user.errors[:password_confirmation]).to include("doesn't match Password")
      end
    end
  end
end
