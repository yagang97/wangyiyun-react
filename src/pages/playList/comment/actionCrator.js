import http from "utils/fetch"
import {
    GET_COMMENTS,
    GET_MUSICCOMMENTS
} from "./actionTypes"



const getCommentsSync = comments => ({
    type:GET_COMMENTS,
    comments
})

const getMusicCommentsSync = musicComments => ({
    type:GET_MUSICCOMMENTS,
    musicComments
})



export const getCommentsAsync = (id) => {
    return async dispatch => {
        if(!id) return null
        let url = "/api/comment/playlist?id=" + id
        let result = await http.get(url)
        dispatch(getCommentsSync(result))
    }
}

export const getMusicCommentsAsync = (id) => {
    return async dispatch => {
        if(!id) return null
        let url = "/api/comment/music?id=" + id
        let result = await http.get(url)
        dispatch(getMusicCommentsSync(result))
    }
}