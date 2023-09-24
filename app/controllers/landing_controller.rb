class LandingController < ApplicationController
  
  def index
    @landing = Landing.all
  end

end