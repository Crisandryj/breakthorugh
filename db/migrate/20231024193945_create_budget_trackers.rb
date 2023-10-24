class CreateBudgetTrackers < ActiveRecord::Migration[7.0]
  def change
    create_table :budget_trackers do |t|
      t.string :category
      t.text :description 
      t.float :expense
      t.float :income
      t.belongs_to :user
      t.timestamps
    end
  end
end
