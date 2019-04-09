import Styled from "styled-components"
import border from "components/styled/border"
import searchImg from "assets/images/sousuo.svg"
import timeImg from "assets/images/shizhong.svg"
import NoImg from "assets/images/cha.svg"

const SearchContainer = Styled.div`
    background:#fbfcfd;;
    height:100%;
    overflow: hidden;
`

const SearchInput = Styled.div`
    padding: .15rem .1rem;
    div{
        position:relative;
        width: 100%;
        height: .3rem;
        padding: 0 .3rem;
        background: #ebecec;
        border-radius: .3rem;
        i{
            position: absolute;
            left: 0;
            top: .06rem;
            margin: 0 .08rem;
            vertical-align: middle;
            display: inline-block;
            vertical-align: middle;
            background-position: 0 0;
            background-size: contain;
            background-repeat: no-repeat;
            width: .2rem;
            height: .2rem;
            background-image:url(${searchImg})
        }
        input{
            padding-left:.08rem
            width: 100%;
            height: 30px;
            line-height: 18px;
            background: transparent;
            font-size: 14px;
            color: #333;
            outline: none;
            -webkit-appearance: none;
            border-radius: 0;
            border: 0;
        }
    }
`

const BorderInput = border({
    component:SearchInput,
    width:"0 0 1px 0"
})

const HotSearch = Styled.div`
    padding: .15rem .1rem 0;
    p{
        font-size: .12rem;
        line-height: .12rem;
        color: #666;
    }
    ul{
        margin: .1rem 0 .07rem;
    }
`

const Li = Styled.li`
    display: inline-block;
    height: .32rem;
    margin-right: .08rem;
    margin-bottom: .08rem;
    padding: 0 .14rem;
    font-size: .14rem;
    line-height: .32rem;
    color: #333;
`

const BorderLi = border({
    component:Li,
    color:"#d3d4da",
    radius:16
})

const SearchRecord = Styled.div`
    align-items: center;
    height: .45rem;
    .searchTime{
        margin: 0 .1rem;
        display: inline-block;
        vertical-align: middle;
        background-position: 0 0;
        background-size: contain;
        background-repeat: no-repeat;
        width: .15rem;
        height: .15rem;
        background-image: url(${timeImg})
    }
    p{
        flex: 1;
        display:flex;
        height:100%;
        align-items: center;
        span{
            margin-right: .1rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-break: normal;
            flex:1;
        }
        .searchBad{
            flex: 0 0 auto;
            width: 32rem;
            height: 32rem;
            line-height: .32rem;
            display: inline-block;
            vertical-align: middle;
            background-position: 0 0;
            background-size: contain;
            background-repeat: no-repeat;
            width: .12rem;
            height: .12rem;
            padding-right:.25rem;
            background-image: url(${NoImg});
        }
    }
`

const SearchMsg = Styled.div`
    margin: 0 auto; 
    h3{
        height: .5rem;
        margin-left: .1rem;
        padding-right: .1rem;
        font-size: .15rem;
        line-height:.5rem;
        color: #507daf;
        position: relative;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-break: normal;
    }
    li{
        display: flex;
        align-items: center;
        height: .45rem;
        padding-left: .1rem;
        i{
            flex: 0 0 auto;
            margin-right: 7px;
            display: inline-block;
            vertical-align: middle;
            background-position: 0 0;
            background-size: contain;
            background-repeat: no-repeat;
            width: .2rem;
            height: .2rem;
            background-image: url(${searchImg});
        }
    }
`

const Span = Styled.div`
    display: inline-block;
    -ms-flex: 1;
    flex: 1;
    width: 1%;
    padding-right: .1rem;
    font-size: .15rem;
    line-height: .45rem;
    color: #333;
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: normal;
`

const SpanBorder = border({
    component:Span,
    width:"0 0 1px 0"
})


export {
    SearchContainer,
    BorderInput,
    HotSearch,
    SearchRecord,
    BorderLi,
    SearchMsg,
    SpanBorder
}