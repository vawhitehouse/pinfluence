json.extract! @board, :id, :board_name, :description, :private

json.pins do
  @board.pins.each do |pin|
    json.set! pin.id do
      json.extract! pin, :id, :title, :description, :link
      json.imageUrl url_for(pin.image)
    end
  end
end