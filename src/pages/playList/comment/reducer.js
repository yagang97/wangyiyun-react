import {
    GET_COMMENTS,
    GET_MUSICCOMMENTS
} from "./actionTypes"

const defaultState = {
    hotComments:[],
    comments:[],
    musicComments:[],
    musicHotComments:[],

}

export default (state=defaultState,action) => {
    switch(action.type){
        case GET_COMMENTS:{
            return{
                ...state,
                hotComments:action.comments.hotComments,
                comments:action.comments.comments
            }
        }
        case GET_MUSICCOMMENTS:{
            return{
                ...state,
                musicHotComments:action.musicComments.hotComments,
                musicComments:action.musicComments.comments
            }
        }
        
        default : return state
    }
}