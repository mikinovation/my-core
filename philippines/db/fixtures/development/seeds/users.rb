User.seed(:id,
  { :email => "admin@example.com", :name => "Mike", :first_name => "Michael", :last_name => "Smith", password: 'password', password_confirmation: 'password', role: 'admin', country: 'JA' },
  { :email => "teacher@example.com", :name => "Nick", :first_name => "Nicholas", :last_name => "Bloggs", password: 'password2', password_confirmation: 'password2', role: 'teacher', country: 'PH' },
  { :email => "student@example.com", :name => "Beth", :first_name => "Elizabeth", :last_name => "Anderson", password: 'password3', password_confirmation: 'password3', role: 'student', country: 'US' }
)