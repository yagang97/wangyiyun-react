import {GET_LIST,
    GET_HOTLIST,
    GET_PLAYLIST,
} from "./actionTypes"

const defaultState = {
    list:[],
    hotList:[],
    playList:[],
} 

export default (state=defaultState,action) => {
    switch(action.type){
        case GET_LIST:{
            return {
                ...state,
                list:action.list
            }
        }
        case GET_HOTLIST:{
            return {
                ...state,
                hotList:action.hotList
            }
        }
        case GET_PLAYLIST:{
            return {
                ...state,
                playList:action.playList
            }
        }
        default:  return state
    }
}