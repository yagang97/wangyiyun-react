import React, { Component } from 'react'
import http from "utils/fetch"
import {Link,withRouter} from "react-router-dom"
import {
    SongMenuContainer, 
    MenuList,
    MenuTitle
} from "./SongMenuStyled"

class SongMenu extends Component {
    constructor() {
        super()

        this.state = { 
            data: [],
            songData:[]
        }
    }

    async componentDidMount() {
        let result = await http.get("/api/personalized")
        this.setState({
            data: result.result.slice(0, 6),
        })

        if(this.props.match.params.id){
            let url = "/api/simi/playlist?id=" + this.props.match.params.id
            let songResult = await http.get(url)
            this.setState({
                songData:songResult.playlists
            })
        }
    }

    render() {
        // console.log(this.state.data,this.state.songData)
        let data
        if(!this.props.match.params.id){
            data = (
                <>
                <MenuTitle>推荐歌单</MenuTitle>
                <MenuList>
                    {
                        this.state.data.map(value => {
                            let num = (Number(value.playCount)/100000).toFixed(1)
                            return ( 
                                <Link to={"/playList/" + value.id} key={value.id}
                                >
                                    <div>
                                        <img src={value.picUrl} alt="" />
                                        <span>{num}万</span>
                                    </div>
                                    <p>{value.name}</p>
                                </Link>
                            )
                        })
                    }
                </MenuList>
                </>
            )
        }else{
            data = (
                <>
                <MenuTitle style={{"color":"#fff"}}>包含这首歌的歌单</MenuTitle>
                <MenuList style={{"color":"#fff"}}>
                    {
                        this.state.songData.map(value => {
                            let num = (Number(value.playCount)/100000).toFixed(1)
                            return ( 
                                <Link style={{"color":"#fff"}} to={"/playList/" + value.id} key={value.id}
                                >
                                    <div>
                                        <img src={value.creator.backgroundUrl} alt="" />
                                        <span>{num}万</span>
                                    </div>
                                    <p>{value.name}</p>
                                </Link>
                            )
                        })
                    }
                </MenuList>
                </>
            )
        }
        return (
            <SongMenuContainer>
                {data}
            </SongMenuContainer>
        )
    }
}

export default withRouter(SongMenu)