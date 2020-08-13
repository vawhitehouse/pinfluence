class Api::BoardsController < ApplicationController
  def index
    @boards = Board.all 
    render :index
  end

  def show
    @board = Board.find(params[:id])
    render :show
  end

  def create
    # @board = Board.new(board_params)
    @board = current_user.created_boards.new(board_params)
    if @board.save
      render "api/boards/show"
    else
      render json: @board.errors.full_messages, status: 422
    end
  end

  def edit
    @board = Board.find(params[:id])
    unless @board.author_id == current_user.id
      render "api/boards/show"
    else
      render :edit
    end
  end

  def destroy
    board = current_user.created_boards.find(params[:id])
    board.destroy
    render "api/boards/show"
  end

  private
  def board_params
    params.require(:board).permit(:board_name, :description, :private, :creator_id)
  end

end
