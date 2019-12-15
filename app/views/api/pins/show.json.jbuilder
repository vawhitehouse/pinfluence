json.extract! @pin, :id, :title, :description, :link
json.photoUrl url_for(@pin.image)