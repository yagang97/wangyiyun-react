import React, { Component } from 'react'
import {
    ListBorder,
    SongListLf,
    SongListRg
} from "./SongListStyled"
import { getListAsync } from "./actionCreator"
import { connect } from "react-redux"
import {withRouter} from "react-router-dom"

const mapState = state => ({
    list: state.list.list,
    // searchList:state.list.searchList
})
  
const mapDispatch = dispatch => ({
    fetchData(value) {
        dispatch(getListAsync())
        // dispatch(getSearchListAsync(value))
    }
})


class SongList extends Component {
    constructor(props) {
        super(props)
        this.getList(this.props.value)
    }

    getList(value) {
        this.props.fetchData(value)
    }

    clickHandler(id){
        let url = "/playSong/" + id
        this.props.history.push(url)
    }
 
    render() {
        return (
            <>
            {
                this.props.list.map(value => {
                    if(value.song.album.subType === "未知"){
                        return (
                            <ListBorder key={value.id} onClick={id => this.clickHandler(value.id)}>
                                <SongListLf>
                                    <p>{value.name}</p>
                                    <div>                                      
                                        {value.song.artists[0].name}-{value.name}
                                    </div>
                                </SongListLf>
                                <SongListRg>
                                    <span></span>
                                </SongListRg>
                            </ListBorder>
                        )
                    }else{
                        return (
                            <ListBorder key={value.id} onClick={id => this.clickHandler(value.id)}>
                                <SongListLf>
                                    <p>{value.name}</p>
                                    <div>
                                        <i></i>
                                        {value.song.artists[0].name}-{value.name}
                                    </div>
                                </SongListLf>
                                <SongListRg>
                                    <span></span>
                                </SongListRg>
                            </ListBorder>
                        )
                    }
                })
            }
            </>
        )
    }
}

export default withRouter(connect(mapState, mapDispatch)(SongList))