file_names = [
  'users.rb',
]

dir = Rails.root.join('db', 'fixtures', 'development', 'seeds')
file_names.each do |file_name|
  puts "== Seed from #{dir}/#{file_name}"
  require "#{dir}/#{file_name}"
end