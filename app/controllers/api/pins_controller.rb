class Api::PinsController < ApplicationController

  def index
    @pins = Pin.all 
    render :index
  end

  def show
    @pin = Pin.find(params[:id])
    render :show
  end

  def create
    # @pin = Pin.new(pin_params)
    @pin = current_user.created_pins.new(pin_params)
    if params[:pin][:copiedPinId]
      copiedPin = Pin.find(params[:pin][:copiedPinId])
      image1 = copiedPin.image 
      @pin.image.attach(image1.blob)
    end
    
    # debugger
    if @pin.save
      render "api/pins/show"
    else
      render json: @pin.errors.full_messages, status: 422
    end
  end

  def edit
    @pin = Pin.find(params[:id])
    unless @pin.author_id == current_user.id
      render "api/pins/show"
    else
      render :edit
    end
  end

  def destroy
    pin = current_user.created_pins.find(params[:id])
    pin.destroy
    # render "**board show page**"
  end

  private
  def pin_params
    params.require(:pin).permit(:title, :description, :link, :creator_id, :board_id, :image)
  end

end
