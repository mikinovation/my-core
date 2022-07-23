class CreateCourses < ActiveRecord::Migration[7.0]
  def change
    create_table :courses do |t|
      t.references  :user,  index: true, foreign_key: true
      t.references  :language,  index: true, foreign_key: true
      t.integer :price, null: false
      t.integer :trial_price, null: false
      t.timestamps
    end
  end
end
