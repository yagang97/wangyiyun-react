import http from "utils/fetch"
import {GET_LIST,
    GET_HOTLIST,
    GET_PLAYLIST,
} from "./actionTypes"

const getListSync = list => ({ 
    type:GET_LIST,
    list
})

const getHotListSync = hotList => ({ 
    type:GET_HOTLIST,
    hotList
})

const getPlayListSync = playList => ({ 
    type:GET_PLAYLIST,
    playList
})


export  const getListAsync = () => {
    return async dispatch => {
        let result = await http.get("/api/personalized/newsong")
        dispatch(getListSync(result.result))
    }
}


export  const getHotListAsync = () => {
    return async dispatch => {
        let result = await http.get("/api/top/list?idx=1")
        dispatch(getHotListSync(result.playlist.tracks))
    }
}

export  const getPlayListAsync = (id) => {
    return async (dispatch) => {
        let url = "/api/playlist/detail?id=" + id
        let result = await http.get(url)
        dispatch(getPlayListSync(result.playlist))
    }
}




