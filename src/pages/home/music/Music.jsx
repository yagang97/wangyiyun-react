import React, { Component } from 'react'
import {
    MusicContainer,
} from "./MusicStyled"
import Header from "music/header/Header"
import Nav from "music/nav/Nav"
 
 
export default class Music extends Component {
    render() {
        return (
            <MusicContainer>
                <Header></Header>
                <Nav></Nav>
            </MusicContainer>
        )
    }
}
