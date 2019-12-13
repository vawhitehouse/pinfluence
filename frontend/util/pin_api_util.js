export const fetchAllPins = () => (
  $.ajax({
    method: 'GET', 
    url: '/api/pins'
  })
);

export const fetchPin = (pinId) => (
  $.ajax({
    method: 'GET',
    url: `/api/pins/${pinId}`
  })
);

export const createPin = (pin) => (
  $.ajax({
    methos: 'POST',
    url: '/api/pins',
    data: { pin }
  })
);

export const updatePin = (pin) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/pins/${pin.id}/edit`,
    data: { pin }
  })
);

export const deletePin = (pinId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/pins/${pinId}`
  })
)
