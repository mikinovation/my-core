# == Schema Information
#
# Table name: chats
#
#  id           :bigint           not null, primary key
#  message      :text(65535)      not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  chat_room_id :bigint
#  user_id      :bigint
#
# Indexes
#
#  index_chats_on_chat_room_id  (chat_room_id)
#  index_chats_on_user_id       (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (chat_room_id => chat_rooms.id)
#  fk_rails_...  (user_id => users.id)
#
FactoryBot.define do
  factory :chat do
    
  end
end
