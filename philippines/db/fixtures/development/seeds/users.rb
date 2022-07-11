User.seed(:id,
  { :id => 1, :email => "test@example.com", password: 'password', password_confirmation: 'password' },
  { :id => 2, :email => "test2@example.com", password: 'password2', password_confirmation: 'password2' }
)