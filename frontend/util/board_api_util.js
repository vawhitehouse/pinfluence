export const fetchAllBoards = () => {
  
  return (
  $.ajax({
    method: 'GET',
    url: '/api/boards'
  })
)};

export const fetchBoard = (boardId) => (
  $.ajax({
    method: 'GET',
    url: `/api/boards/${boardId}`
  })
);

export const fetchAllBoards = () => {
  $.ajax({
    method: 'GET',
    url: `/api/boards`
  })
}

export const createBoard = (board) => (
  $.ajax({
    method: 'POST',
    url: '/api/boards',
    data: { board }
  })
)};

export const updateBoard = (board) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/boards/${board.id}/edit`,
    data: { board }
  })
);

export const deleteBoard = (boardId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/boards/${boardId}`
  })
);
