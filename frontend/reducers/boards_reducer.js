import { RECEIVE_ALL_BOARDS, RECEIVE_BOARD, REMOVE_BOARD } from '../actions/board_actions';

const BoardsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_BOARDS:
      return Object.assign({}, state, action.boards);
    case RECEIVE_BOARD:
      return Object.assign({}, state, { [action.board.id]: action.board });
    case REMOVE_BOARD:
      let nextState = Object.assign({}, state);
      delete nextState[action.boardId];
      return nextState;
    default:
      return state;
  }
}

export default BoardsReducer;