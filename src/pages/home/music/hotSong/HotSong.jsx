import React, { Component } from 'react'
import {
    HotSongHeader
} from "./HotSongStyled"
import HotList from "components/hotList/HotList"
import BScroll from "better-scroll"
import { getHotListAsync } from "components/songList/actionCreator"
import { connect } from "react-redux"
 
const mapState = state => ({
    list: state.list.hotList
})

const mapDispatch = dispatch => ({
    fetchData() {
        dispatch(getHotListAsync())
    }
})

class HotSong extends Component {
    constructor(props) {
        super(props)
        this.getList()
    }

    getList() {
        this.props.fetchData()
    }


    render() { 
        // console.log(this.props)
        let hotList = this.props.list.slice(0,20)
        return ( 
            <div style={{"height":"100%","overflow":"hidden"}} id="hotScroll">
                <div style={{"background":"#fff"}}>
                    <HotSongHeader>
                        <div></div>
                        <p>更新日期:04月04日</p>
                    </HotSongHeader>
                    <HotList hotList={hotList}></HotList>
                </div>
            </div>
        )
    }

    componentDidMount(){
        new BScroll("#hotScroll",{click:"true"})
    }
}


export default connect(mapState, mapDispatch)(HotSong)