class BudgetTrackersController < ApplicationController
  before_action :authenticate_user!

  def new
    @budget = BudgetTracker.new
  end

  def create
    @budget = current_user.budget_trackers.create(budget_params)
    if @budget.save
      redirect_to @budget, notice: 'Budget successfully created'
    else
      @budget.errors.full_messages.each do |msg|
        flash[:notice] = msg
      end
      render :new, status: :unprocessable_entity
    end
  end

  def destroy
    @budget = BudgetTracker.find(params[:id])
    @budget.destroy
  end

  private

  def budget_params
    puts params.inspect
    params.require(:budget_tracker).permit(:amount, :category, :user_id, :description, :group)
  end
  
end