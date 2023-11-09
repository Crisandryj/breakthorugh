class BudgetTracker < ApplicationRecord
  validates :amount, presence: true
  belongs_to :user
  has_many :categories
  has_many :groups
end
