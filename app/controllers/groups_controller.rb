class GroupsController < ApplicationController
  def new
    @group = Group.new
  end

  def create
    @group = current_user.budget_trackers.group.create(group_params)
    if @group.save
      redirect_to @group, notice: 'Successfully created'
    else
      @group.errors.full_messages.each do |msg|
        flash[:notice] = msg
      end
      render :new, status: :unprocessable_entity
    end
  end

  def group_params
    params.require(:groups).permit(:name, categories_attributes: %i[categories name]) if params[:group].present?
  end
end
