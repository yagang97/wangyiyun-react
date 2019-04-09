import Styled from "styled-components"
import border from "components/styled/border"

const CommentContainer = Styled.div`
    h4{
        padding: 4px .1rem;
        color: #666;
        font-size: .12rem;
        font-weight: 400;
        background: rgba(0,0,0,.05);
    }
`

const CommentMain = Styled.div`
    padding-top: .1rem;
    width: 100%;
    display: flex;
    -ms-flex-direction: row;
    flex-direction: row;
    .headImg{
        height: .35rem;
        margin: 0 .1rem;
        flex: none;
        img{
            display: block;
            border-radius: 50%;
            width: .3rem;
            height: .3rem;
        }
    }
`

const CommentInfo = Styled.div`
    padding-right: .1rem;
    padding-bottom: .11rem;
    padding-left: .1rem;
    -ms-flex: auto;
    flex: auto;
    width: 0;
    .infoHeader{
        display: flex;
        flex-direction: row;      
        .infoTime{
            flex: auto;
            width: 0;
            font-size: 0;
            span{
                max-width: 100%;
                display: inline-flex;
                -ms-flex-align: center;
                align-items: center;
                font-size: 14px;
                color: #666;
                line-height: .2rem;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                -ms-flex: auto;
                flex: auto;
                i{
                    width: .11rem;
                    height: .11rem;
                    flex: 0 0 auto;
                    display: inline-block;
                    margin: 0 5px;
                    background: url(//p1.music.126.net/uS0DQ8CxhOhmyiom4yLlJw==/109951163446550944.png) 0 0/contain no-repeat;
                }
            }
            p{
                font-size: .09rem;
                color: #999;
            }
        } 
        .infoLike{
            width: .65rem;
            height: .22rem;
            line-height: .22rem;
            font-size: .11rem;
            color: #999;
            -ms-flex: none;
            flex: none;
            text-align: right;
            span{
                display: inline-block;
                min-width: .3rem;
                padding-left: 5px;
                vertical-align: middle;
            }
            i{
                display: inline-block;
                width: .14rem;
                height: .14rem;
                margin-left: 6px;
                line-height: 0;
                vertical-align: middle;
                cursor: pointer;
            }
        }
    }
    .infoContent{
        position: relative;
        color: #333;
        font-size: .15rem;
        line-height: .22rem;
        margin-top: 5px;
        span{
            vertical-align: middle;
        }
    }
`

const BorderInfo = border({
    component:CommentInfo,
    width:"0 0 1px 0"
})

export {
    CommentContainer,
    CommentMain,
    BorderInfo
}