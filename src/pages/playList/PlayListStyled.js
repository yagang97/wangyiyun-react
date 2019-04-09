import Styled from "styled-components"
import img from "assets/images/erji.svg"
import border from "components/styled/border"

const PlayListContainer = Styled.div`
    background-color: #f8f8f8;
    min-height: 100%;
    h3{
        height: .23rem;
        line-height: .23rem;
        padding: 0 .1rem;
        font-size: .12rem;
        color: #666;
        background-color: #eeeff0;
    }
`

const PlayListTitle = Styled.div`
    .playTitle{
        position: relative;
        padding: .3rem .1rem .3rem .15rem;
        overflow: hidden;
        .titleBg{
            background-image:url(${props => {return props.img}});
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            z-index: 1;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: 50%;
            filter: blur(.2rem);
            transform: scale(1.5);
        }
        .titleMain{
            display: flex;
            position: relative;
            z-index: 2;
            .titleLf{
                width: 1.26rem;
                height: 1.26rem;
                background-color: #e2e2e3;
                position: relative;
                &::after{
                    content: " ";
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: .18rem;
                    z-index: 2;
                    background-image: linear-gradient(90deg,transparent,rgba(0,0,0,.2));
                }
                img{
                    width: 100%;
                    vertical-align: middle;
                }
                span{
                    position: absolute;
                    z-index: 3;
                    top: 10px;
                    left: 0;
                    padding: 0 8px;
                    height: .17rem;
                    color: #fff;
                    font-size: 9px;
                    text-align: center;
                    line-height: .17rem;
                    background-color: rgba(217,48,48,.8);
                    border-top-right-radius: .17rem;
                    border-bottom-right-radius: .17rem;
                }
                i{
                    position: absolute;
                    right: 2px;
                    top: 0;
                    z-index: 3;
                    padding-left: 15px;
                    color: #fff;
                    font-size: 12px;
                    background-position: 0;
                    background-repeat: no-repeat;
                    background-size: 11px 10px;
                    text-shadow: 1px 0 0 rgba(0,0,0,.15);
                    background-image:url("${img}");
                }
            }
            .titleRg{
                flex: 1 1 auto;
                width: 1%;
                margin-left: .16rem;
                h2{
                    padding-top: 1px;
                    font-size: .17rem;
                    line-height: 1.3;
                    color: #fefefe;
                    height: .44rem;
                    -webkit-box-pack: center;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    word-wrap: break-word;
                    word-break: break-all;
                    white-space: normal;
                    margin-bottom: .2rem;
                }
                div{
                    display: block;
                    position: relative;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    word-break: normal;
                    color: hsla(0,0%,100%,.7);
                    .rgImg{
                        display: inline-block;
                        width: .3rem;
                        height: .3rem;
                        border-radius: 50%;
                        vertical-align: middle;
                        margin-right: 5px;
                    }
                    img{
                        width: 100%;
                        border-radius: 50%;
                        vertical-align: middle;
                    }
                }
            }
        }
    }
    .playInfo{
            position: relative;
            margin: 0 .1rem 0 .15rem;
            padding-top: .1rem;
            line-height: .19rem;
            color: #666;
            .infoTags{
                margin-bottom: .1rem;
                line-height: .2rem;
                margin-right: -10px;
            }
            .infoMain{
                position: relative;
                padding-bottom: .18rem;
                line-height: .19rem;
                color: #666;
            }
        }
`

const Span = Styled.span`
    display: inline-block;
    margin-right: .1rem;
    padding: 1px 8px;
    font-size: .12rem;
    z-index:3 !important;
`

const BorderSpan = border({
    component:Span,
    radius:"9999"
})


export {
    PlayListContainer,
    PlayListTitle,
    BorderSpan
}