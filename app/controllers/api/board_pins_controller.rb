class Api::BoardPinsController < ApplicationController

  def create
    board_pin = BoardPin.new(board_pin_params)

    if board_pin.save
      # render json: board_pin, status: :created
    else
      render json: board_pin.errors.full_messages, status: 422
    end

  end

  def destroy
    board_pin = BoardPin.find(params[:id])
    board_pin.destroy
    # render json: board_pin
  end

  private
  def board_pin_params
    params.require(:board_pin).permit(:board_id, :pin_id)
  end

end
