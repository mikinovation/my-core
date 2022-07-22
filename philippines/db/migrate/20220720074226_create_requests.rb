class CreateRequests < ActiveRecord::Migration[7.0]
  def change
    create_table :requests do |t|
      t.bigint :student_id, null: false
      t.bigint :teacher_id, null: false
      t.timestamps
    end

    add_foreign_key :requests, :users, column: :student_id
    add_foreign_key :requests, :users, column: :teacher_id
  end
end
