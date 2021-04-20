json.extract! @pin, :id, :title, :description, :board_id, :link, :creator_id
json.creator @pin.creator.email
json.board_name @pin.board.board_name
json.imageUrl url_for(@pin.image)