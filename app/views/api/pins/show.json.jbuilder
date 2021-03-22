json.extract! @pin, :id, :title, :description, :board_id, :link
json.imageUrl url_for(@pin.image)