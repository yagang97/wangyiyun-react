import {combineReducers} from "redux"
import {reducer as list } from "components/songList/index"
import {reducer as comments } from "pages/playList/comment/index"

export default combineReducers({
    list,
    comments
})

