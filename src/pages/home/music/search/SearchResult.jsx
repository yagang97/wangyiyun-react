import React, { Component } from 'react'
import {
    ListBorder,
    SongListLf,
    SongListRg
} from "components/songList/SongListStyled"
import {withRouter} from "react-router-dom"
import http from "utils/fetch"


class SongList extends Component {
    constructor(props) {
        super(props)
        this.state={
            data:[],
        }
    }


    async componentDidMount(){
        let url = "/api/search?keywords=" + this.props.value
        if(this.props.value !== ""){
            let result = await http.get(url)
            this.setState({
                data:result.result.songs
            })
        }
    }

    clickHandler(id){
        let url = "/playSong/" + id
        this.props.history.push(url)
    }
 
    render() {
        return (
            <>
            {
                this.state.data.map(value => {
                    return (
                        <ListBorder key={value.id} onClick={id => this.clickHandler(value.id)} style={{"background":"#fbfcfd"}}>
                            <SongListLf>
                                <p>{value.name}</p>
                                <div>
                                    <i></i>
                                    {value.artists[0].name}-{value.name}
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

export default withRouter(SongList)