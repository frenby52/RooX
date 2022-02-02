import {combineReducers} from "redux";
import {reducer as users} from "./users/users.js";
import NameSpace from "./name-space.js";

export default combineReducers({
  [NameSpace.USERS]: users,
});
