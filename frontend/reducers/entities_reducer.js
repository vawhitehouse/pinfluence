import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import PinsReducer from './pins_reducer';
import BoardsReducer from './boards_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  pins: PinsReducer,
  boards: BoardsReducer
});

export default entitiesReducer;