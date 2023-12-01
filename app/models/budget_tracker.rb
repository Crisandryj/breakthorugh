class BudgetTracker < ApplicationRecord
  validates :amount, presence: true
  belongs_to :user
  has_many :categories
  accepts_nested_attributes_for :categories
  has_many :groups
end
