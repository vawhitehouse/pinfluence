import { combineReducers } from "redux";

import sessionErrorsReducer from "./session_errors_reducer";
import pinErrorsReducer from "./pin_errors_reducer";
import boardErrorsReducer from "./board_errors_reducer";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  pin: pinErrorsReducer,
  board: boardErrorsReducer
});

export default errorsReducer;