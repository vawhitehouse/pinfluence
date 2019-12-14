export const fetchBoard = (boardId) => (
  $.ajax({
    method: 'GET',
    url: `/api/boards/${boardId}`
  })
);

export const createBoard = (board) => (
  $.ajax({
    methos: 'POST',
    url: '/api/boards',
    data: { board }
  })
);

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
)
