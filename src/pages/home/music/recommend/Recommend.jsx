import React, { Component } from 'react'
import Swiper from "./swiper/Swiper"
import SongMenu from "./songMenu/SongMenu"
import NewSong from "./newSong/NewSong"
import BScroll from "better-scroll"

export default class Recommend extends Component {
    render() {
        return ( 
            <div id="scroll" style={{"height":"100%","overflow":"hidden","background":"#fff"}}>
                <main>
                    <Swiper></Swiper>
                    <SongMenu></SongMenu>
                    <NewSong></NewSong>
                </main>
            </div>
        )
    }

    componentDidMount(){
       new BScroll('#scroll',{
        probeType: 2,
        bounce:true,
        click:true
      })
    }

}
