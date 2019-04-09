import React, { Component } from 'react'
import {NewSongContainer}from "./NewSongStyled.js"
import SongList from "components/songList/SongList"

import {MenuTitle} from "music/recommend/songMenu/SongMenuStyled"

export default class NewSong extends Component {
    render() {
        return (
            <NewSongContainer>
                <MenuTitle>最新音乐</MenuTitle>
                <SongList></SongList>
            </NewSongContainer>
        )
    }
}
