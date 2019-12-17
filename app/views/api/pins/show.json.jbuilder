json.extract! @pin, :id, :title, :description, :link
json.imageUrl url_for(@pin.image)