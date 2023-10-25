class BudgetTrackerController < ApplicationController
  before_action :authenticate_user!

  def new
    @budget = BudgetTracker.new
  end

  def create
    @budget = BudgetTracker.create(budget_params)
    if @budget.save
      flash[:notice] = 'Budget sucessfully created'
      redirect_to @budget
    else
      render :new, :unprocessable_entity
    end
  end

  private

  def budget_params
    params.require(:budget).permit(:expense, :income, :category, :user_id)
  end

end
