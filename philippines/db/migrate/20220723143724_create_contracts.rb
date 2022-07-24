class CreateContracts < ActiveRecord::Migration[7.0]
  def change
    create_table :contracts do |t|
      t.bigint :student_id, null: false
      t.bigint :teacher_id, null: false
      t.timestamps
    end

    add_foreign_key :contracts, :users, column: :student_id
    add_foreign_key :contracts, :users, column: :teacher_id
  end
end
