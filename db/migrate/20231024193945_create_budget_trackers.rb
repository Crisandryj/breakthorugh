class CreateBudgetTrackers < ActiveRecord::Migration[7.0]
  def change
    create_table :budget_trackers do |t|

      t.timestamps
    end
  end
end
