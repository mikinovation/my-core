class CreateTeacherLanguages < ActiveRecord::Migration[7.0]
  def change
    create_table :teacher_languages do |t|
      t.references  :user,  index: true, foreign_key: true
      t.references  :language, index: true, foreign_key: true
      t.integer  :skill, default: 0
      t.timestamps
    end
  end
end
