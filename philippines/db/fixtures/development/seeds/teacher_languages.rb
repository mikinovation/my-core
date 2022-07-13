TeacherLanguage.seed(:id,
  { :user => User.find(1), :language => Language.find(1) },
  { :user => User.find(2), :language => Language.find(2) },
  { :user => User.find(3), :language => Language.find(1) },
)