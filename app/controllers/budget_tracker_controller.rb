class BudgetTrackerController < ApplicationController

  def new
    @budget = BudgetTracker.new
  end
end
