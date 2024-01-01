import { combineReducers } from "redux";
import petsReducer from "./pet_reducer";

const rootReducer = combineReducers({
  pets: petsReducer,
});

export default rootReducer;
