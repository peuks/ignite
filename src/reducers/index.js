import { combineReducers } from "redux";
import detailReducer from "./detailReducer";
import gamesReducer from "./gameReducer";
// import detailReducer from "./gameReducer";

/**
 * Combine all reducers into One
 */
const rootReducer = combineReducers({
  games: gamesReducer,
  detail: detailReducer,
});

export default rootReducer;
