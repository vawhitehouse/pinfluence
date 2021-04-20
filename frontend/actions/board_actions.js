import * as BoardApiUtil from '../util/board_api_util';
import { receiveAllPins } from './pin_actions';

export const RECEIVE_ALL_BOARDS = 'RECEIVE_ALL_BOARDS';
export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const REMOVE_BOARD = 'REMOVE_BOARD';
export const RECEIVE_BOARD_ERRORS = 'RECEIVE_BOARD_ERRORS';

const receiveAllBoards = (boards) => ({
  type: RECEIVE_ALL_BOARDS,
  boards
});

const receiveBoard = (board) => {
  
  return ({
  type: RECEIVE_BOARD,
  board
})};

const removeBoard = (boardId) => ({
  type: REMOVE_BOARD,
  boardId
});

const receiveErrors = errors => ({
  type: RECEIVE_BOARD_ERRORS,
  errors
});

export const fetchAllBoards = () => dispatch => {
  return (
  BoardApiUtil.fetchAllBoards().then(boards => {
    return dispatch(receiveAllBoards(boards))
  }, err => (
      dispatch(receiveErrors(err.responseJSON))
    ))
)};

export const fetchBoard = boardId => dispatch => (
  BoardApiUtil.fetchBoard(boardId).then(board => {
    dispatch(receiveAllPins(board.pins));
    // debugger
    dispatch(receiveBoard(board));
    }, err => (
      dispatch(receiveErrors(err.responseJSON))
    ))
);

export const createBoard = board => dispatch => {
  
  return (
  BoardApiUtil.createBoard(board).then(board => (
    dispatch(receiveBoard(board))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
)};

export const updateBoard = board => dispatch => (
  BoardApiUtil.updateBoard(board).then(board => (
    dispatch(receiveBoard(board))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const deleteBoard = boardId => dispatch => (
  BoardApiUtil.deleteBoard(boardId).then(() => (
    dispatch(removeBoard(boardId))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);