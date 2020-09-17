import { combineReducers } from "redux";
import postReducer from './postReducer'
import selectReducer from './selectReducer'

export default combineReducers({
    posts: postReducer,
    select: selectReducer,
}) 