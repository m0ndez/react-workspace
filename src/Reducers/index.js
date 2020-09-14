import { combineReducers } from "redux";
import deleteReducer from "./deleteReducer";
import postReducer from './postReducer'

export default combineReducers({
    posts: postReducer,
    select: deleteReducer
}) 