User.seed(:id,
  { :email => "test@example.com", :name => "Mike", :first_name => "Michael", :last_name => "Smith", password: 'password', password_confirmation: 'password' },
  { :email => "test2@example.com", :name => "Nick", :first_name => "Nicholas", :last_name => "Bloggs", password: 'password2', password_confirmation: 'password2' },
  { :email => "test3@example.com", :name => "Beth", :first_name => "Elizabeth", :last_name => "Anderson", password: 'password3', password_confirmation: 'password3' }
)