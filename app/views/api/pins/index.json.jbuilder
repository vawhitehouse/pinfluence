@pins.each  do |pin|
  json.set! pin.id do 
    json.extract! pin, :id, :title, :description, :link
    json.imageUrl url_for(pin.image)
  end
end

# p.image.attach(io: File.open("/Users/valeriewhitehouse/Documents/fullstack/pins/travel/cinque_terre.jpg"), filename: "cinque_terre.jpg")