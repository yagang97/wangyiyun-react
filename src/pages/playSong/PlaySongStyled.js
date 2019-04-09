import Styled from "styled-components"
import play from "assets/images/play.png"
import prev from "assets/images/prev.png"
import next from "assets/images/next.png"
import shang from "assets/images/xiangshang.svg"

const PlaySongContainer = Styled.div`
    position: absolute;
    height:100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    min-width: 3.2rem;
    overflow: hidden;
    background:#fff;
    .songBg{
        background-image: url(//music.163.com/api/img/blur/109951163959066909);
        opacity: 1;
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: auto 100%;
        transform: scale(1.5);
        transform-origin: center top;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        height: 100%;
        overflow: hidden;
        transition: opacity .3s linear;
        &::after{
            content: " ";
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
            background-color: rgba(0,0,0,.5);
        }
    }
`

const PlaySongMain = Styled.div`
    position: absolute;
    left: 0;
    top: 0;
    min-height: 100%;
    width: 100%;
    position: relative;
    height:100%;
    .songLogo{
        position: absolute;
        top: 12px;
        left: 10px;
        display: block;
        height: 17px;
        line-height: 0;
        width:0.98rem
        span{
            width: .98rem;
            height: .17rem;
        }
    }
    .songWrap{
        padding-top: .7rem;
        .songDisc{
            width: 2.96rem;
            height: 2.96rem;
            margin: 0 auto;
            position: relative;
            &::after{
                width: .96rem;
                height: 1.37rem;
                top: -.7rem;
                left: 1.33rem;
                content: " ";
                position: absolute;
                z-index: 5;
                background: url(//s3.music.126.net/m/s/img/needle.png?702cf6d…) no-repeat;
                background-size: contain;
                background-image: url(//s3.music.126.net/m/s/img/needle-ip6.png?be4ebbe…);
            }
            .songTurn{
                width: 100%;
                height: 100%;
                &::before{
                    content: " ";
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    z-index: 2;
                    background: url(//s3.music.126.net/m/s/img/disc.png?d3bdd10…) no-repeat;
                    background-size: contain;
                    background-image: url(//s3.music.126.net/m/s/img/disc-ip6.png?6979612…);
                }
                .songRollWrap{
                    width: 184px;
                    height: 184px;
                    margin: -92px 0 0 -92px;
                    transform:;
                    left: 50%;
                    top: 50%;
                    z-index: 1;
                    position: absolute;
                    .songImg{
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                        overflow: hidden;
                        background: url(//s3.music.126.net/m/s/img/disc_default.png?7c9b3ad…) no-repeat;
                        background-size: contain;
                        img{
                            width: 100%;
                            vertical-align: middle;
                        }
                    }
                }
                .songLgout{
                    transform:;
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    z-index: 3;
                    .songLight{
                        background-image: url(//s3.music.126.net/m/s/img/disc_light-ip6.png?996fc8a…);
                        background: url(//s3.music.126.net/m/s/img/disc_light.png?2bb24f3…) no-repeat;
                        background-size: contain;
                        position: absolute;
                        left: 0;
                        right: 0;
                        top: 0;
                        bottom: 0;
                        z-index: 3;
                    }
                }
            }
            .songPlybtn{
                width: .56rem;
                height: .56rem;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%,-50%);
                z-index: 10;
                background: url(${play}) 0 0 no-repeat;
                background-size: contain;
                &::after{
                    content: "";
                    display: block;
                    position: absolute;
                }
            }
        }
    }
`


const PlayInfo = Styled.div`
    padding-bottom:.8rem
    .playPanel{
        margin-top: .15rem;
        height: .64rem;
        overflow: hidden;
        text-align: center;
        color: #afabac;
        p{
            width:100%;
            height:0.32rem;
            line-height:.32rem;
            vertical-align:top;
            overflow:hidden;
            white-space:nowrap;
            text-overflow:ellipsis;
            font-size:.16rem;
        }
    }
    .timeWrap{
        width: 100%;
        padding: .15rem .1rem;
        display: box;
        display: -webkit-box;
        -webkit-box-flex: 1;
        -webkit-box-align: center;
        -webkit-box-pack: justify;
        -webkit-box-orient: horizontal;
        .timeShow{
            font-size: .11rem;
            color: #dcdcdc;
        }
        .progressWrap{
            height: .03rem;
            margin:0 5px;
            background: #232228;
            position: relative;
            -webkit-box-flex: 1;
            box-flex: 1;
            z-index: 100;
        }
        .timeEnd{
            font-size: .11rem;
            color: #dcdcdc;
        }
    }
    .playOperate{
        margin: 0 auto;
        font-size: 0;
        text-align: center;
        .btnPrev{
            width: .418rem;
            height: .43rem;
            margin: 0 .16rem;
            display: inline-block;
            vertical-align: middle;
            background: url(${prev}) no-repeat;
            background-size: 100%;
        }
        .btnPause{
            background: url(${play}) no-repeat;
            background-size: 100%;
            width: .578rem;
            height: .578rem;
            margin: 0 .16rem;
            display: inline-block;
            vertical-align: middle;
        }
        .btnNext{
            background: url(${next}) no-repeat;
            background-size: 100%;
            width: .418rem;
            height: .43rem;
            margin: 0 .16rem;
            display: inline-block;
            vertical-align: middle;
        }
    }
    .giude{
        padding-top: .5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #afabac;
        i{
            display: block;
            width: .17rem;
            height: .17rem;
            background-repeat: no-repeat;
            background-size: .17rem auto;
            background-image: url(${shang});
            background-position: 0 0;
        }
    }
`

export {
    PlaySongContainer,
    PlaySongMain,
    PlayInfo
}