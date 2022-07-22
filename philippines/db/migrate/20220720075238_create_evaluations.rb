class CreateEvaluations < ActiveRecord::Migration[7.0]
  def change
    create_table :evaluations do |t|
      t.references  :user,  index: true, foreign_key: true
      t.integer :score, null: false
      t.timestamps
    end
  end
end
