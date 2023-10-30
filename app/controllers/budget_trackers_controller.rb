class BudgetTrackersController < ApplicationController
  before_action :authenticate_user!

  def new
    @budget = BudgetTracker.new
  end

  def create
    @budget = BudgetTracker.create(budget_params)
    if @budget.save
      redirect_to @budget, notice: 'Budget successfully created'
    else
      @budget.errors.full_messages.each do |msg|
        flash[:notice] = msg
      end
      render :new, status: :unprocessable_entity
      puts params.inspect
    end
  end

  private

  def budget_params
    params.require(:budget_tracker).permit(:amount, :category, :user_id, :description, :group)
  end

end
