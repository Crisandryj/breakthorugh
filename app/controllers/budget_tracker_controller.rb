class BudgetTrackerController < ApplicationController
  before_action :authenticate_user!

  def new
    @budget = BudgetTracker.new
  end
end
