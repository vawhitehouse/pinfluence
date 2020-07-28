export const fetchAllPins = () => (
  $.ajax({
    method: 'GET', 
    url: '/api/pins'
  })
);

export const fetchPin = (pinId) => {
  
  return (
  $.ajax({
    method: 'GET',
    url: `/api/pins/${pinId}`
  })
)};

export const createPin = (pin) => {
   
  return (
  $.ajax({
    method: 'POST',
    url: '/api/pins',
    data: pin,
    contentType: false,
    processData: false
  }))
};

export const savePin = (pin) => {
  return (
    $.ajax({
      method: 'POST',
      url: '/api/pins',
      data: pin 
    })
  )
}

export const updatePin = (pin) => {
  return (
  $.ajax({
    method: 'PATCH',
    url: `/api/pins/${pin.id}/edit`,
    data: { pin }
  })
)};

export const deletePin = (pinId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/pins/${pinId}`
  })
)
