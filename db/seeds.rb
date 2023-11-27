# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

#rails db:seed
Group.destroy_all
Category.destroy_all

Group.create!([{ name: '' }, { name: 'Income' }, { name: 'Expenses' }])

@income = Group.find_by_name('Income')
@expense = Group.find_by_name('Expenses')

@income.categories.create!([{ name: 'Salary' }, { name: 'Carry Over' }])
@expense.categories.create!([{ name: 'Utilities' }, { name: 'Groceries' }])

p "Created #{Group.count} groups"
p "Created #{Category.count} categories"
