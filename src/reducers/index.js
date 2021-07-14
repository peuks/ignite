import { combineReducers } from "redux";
import gamesReducer from "./gameReducer";
// import detailReducer from "./gameReducer";

/**
 * Combine all reducers into One
 */
const rootReducer = combineReducers({
  games: gamesReducer,
  //   detail: detailReducer,
});

export default rootReducer;
