import React, { Component} from 'react'
import {
    ListBorder,
    SongListLf,
    SongListRg
} from "../songList/SongListStyled"
import {withRouter} from "react-router-dom"

class HotList extends Component {

    clickHandler(id){
        let url = "/playSong/" + id
        this.props.history.push(url)
    }
    
    // 数据做了俩次if判断，来决定是渲染那个数据
    render() {
        if(this.props.hotList){
            let data = this.props.hotList
            return (
                <>
                {
                    data.map((value,index) => {  
                        if(index<3){
                            return (
                                <ListBorder key={value.id} onClick={id => this.clickHandler(value.id)}>
                                    <div className="hotListNum"  style={{"color":"#df3436"}}>
                                        {index+1 < 10 ? "0" + (index+1) : index+1}
                                    </div>
                                    <SongListLf>
                                        <p>{value.name}</p>
                                        <div>
                                            <i></i>
                                            {value.ar[0].name}-{value.name}
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
                                    <div className="hotListNum"  style={{"color":"#999"}}>
                                        {index+1 < 10 ? "0" + (index+1) : index+1}
                                    </div>
                                    <SongListLf>
                                        <p>{value.name}</p>
                                        <div>
                                            <i></i>
                                            {value.ar[0].name}-{value.name}
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
        }else if(this.props.playList){
            let data = this.props.playList.tracks
            if(!data) return <></>   //第一次请求的时候没有数据，所以坐下处理
            return (
                <>
                {
                    data.slice(0,30).map((value,index) => {
                        return (
                            <ListBorder key={value.id} onClick={id => this.clickHandler(value.id)}>
                                <div className="hotListNum"  style={{"color":"#999"}}>
                                    {index+1 < 10 ? "0" + (index+1) : index+1}
                                </div>
                                <SongListLf>
                                    <p>{value.name}</p>
                                    <div>
                                        <i></i>
                                        {value.ar[0].name}-{value.name}
                                    </div>
                                </SongListLf>
                                <SongListRg>
                                    <span></span>
                                </SongListRg>
                             </ListBorder>
                        )
                    })
                }
                </>
            )
        }
    }
}

export default withRouter(HotList)