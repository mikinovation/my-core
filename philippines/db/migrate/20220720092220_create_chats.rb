class CreateChats < ActiveRecord::Migration[7.0]
  def change
    create_table :chats do |t|
      t.references  :chat_room,  index: true, foreign_key: true
      t.references  :user,  index: true, foreign_key: true
      t.text :message, null: false
      t.timestamps
    end
  end
end
