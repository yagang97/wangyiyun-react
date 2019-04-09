import Styled from "styled-components"
import img from "assets/images/erji.svg"
const SongMenuContainer = Styled.div`

`
 
const MenuTitle = Styled.div`
    position: relative;
    padding-left: 0.09rem;
    margin-bottom: 0.14rem;
    font-size: 0.17rem;
    height: 0.2rem;
    line-height: 0.2rem;
    &::after{
        content: " ";
        position: absolute;
        left: 0;
        top: 50%;
        margin-top: -0.09rem;
        width: 0.02rem;
        height: 0.16rem;
        background-color: #d33a31;
    }
`

const MenuList = Styled.div`
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
    a{
        width:33.33%;
        height:1.9rem;
        padding-bottom:0.16rem;
        div{
            position:relative;
        }
    }
    a:nth-child(1),a:nth-child(2),a:nth-child(4),a:nth-child(5){
        padding-right:0.03rem;
    }
    a div  img{
        width:100%;
    }
    a div span{
        position: absolute;
        right: .05rem;
        top: .02rem;
        z-index: 3;
        padding-left: .13rem;
        color: #fff;
        font-size: .12rem;
        text-shadow: 1px 0 0 rgba(0,0,0,.15);
        &::after{
            content: " ";
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: .18rem;
            z-index: 2;
            text-align:center;
            background-image: linear-gradient(180deg,rgba(0,0,0,.2),transparent);
            background-position: 0;
            background-repeat: no-repeat;
            background-image:url("${img}");
            background-size: 0.11rem 0.1rem;
        }
    }
    a p{
        display: -webkit-box;
        -webkit-line-clamp: 2;
        overflow: hidden;
        padding: 0.06rem 0.02rem 0 0.06rem;
        line-height: 1.2;
        font-size: 0.13rem;
    }
`

export {
    SongMenuContainer,
    MenuTitle,
    MenuList
}