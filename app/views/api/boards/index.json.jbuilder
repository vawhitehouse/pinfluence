@boards.each  do |board|
  json.set! board.id do 
    json.extract! board, :id, :board_name, :description, :private
  end
end