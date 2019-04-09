import Styled from "styled-components"

const HotSongHeader = Styled.div`
    background: url(//s3.music.126.net/m/s/img/hot_music_bg_2x.jpg?f01a252…) no-repeat;
    background-size: contain;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 2;
    padding-left: .2rem;
    box-sizing: border-box;
    height:1.459rem;
    position:relative;
    &::after{
        content: " ";
        z-index: 1;
        background-color: rgba(0,0,0,.1);
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
    }
    div{
        background: url(//s3.music.126.net/m/s/img/index_icon_2x.png?5207a28…) no-repeat;
        width: 1.42rem;
        height: .7rem;
        background-position: -.24rem -.32rem;
        background-size: 1.66rem 1rem;
    }
    p{
        margin-top: .1rem;
        color: hsla(0,0%,100%,.8);
        font-size: .12rem;
        transform: scale(.91);
        transform-origin: left top;
    }

`

export{
    HotSongHeader
}