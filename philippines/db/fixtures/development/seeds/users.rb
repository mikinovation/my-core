User.seed(:id,
  { :email => "teacher@example.com", :name => "Mike", :first_name => "Michael", :last_name => "Smith", password: 'password', password_confirmation: 'password', is_teacher: true, is_student: false, country: 'JA' },
  { :email => "student@example.com", :name => "Nick", :first_name => "Nicholas", :last_name => "Bloggs", password: 'password2', password_confirmation: 'password2', is_teacher: false, is_student: true, country: 'PH' },
  { :email => "student2@example.com", :name => "Beth", :first_name => "Elizabeth", :last_name => "Anderson", password: 'password3', password_confirmation: 'password3', is_teacher: false, is_student: true, country: 'US' }
)