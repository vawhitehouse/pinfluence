# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Pin.destroy_all
Board.destroy_all

demoUser = User.create!({ email: 'demoUser@demo.com', password: 'password', age: 27 })

user1 = User.create!({ email: 'user1@test.com', password: 'password', age: 25})

# board1 = Board.create!({ board_name: 'Travel', creator_id: 1})

# pin1 = Pin.create!({ title: 'Cinque Terra', creator_id: 1, board_id: 1 })
# pin2 = Pin.create!({ title: 'Easter Island', creator_id: 1, board_id: 1})


