import Styled from "styled-components"

const BackPageBtn = Styled.div`
    width: .375rem;
    height: .375rem;
    position: fixed;
    top: .15rem;
    left: .15rem;
    background-color: rgba(0,0,0,.5);
    z-index: 1000;
    border-radius: 50%;
    background-image: url(//img6.lukou.com/static/img/back-write.d142e02.png);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 25%;
`

const BackTopBtn = Styled.div`
    bottom: 1rem!important;
    position: fixed;
    z-index: 1000;
    bottom: 1.35rem;
    width: .488rem;
    height: .488rem;
    right: 0.07rem;
    img{
        height: 100%;
    }
`

const CollectContainer = Styled.div`
    position: fixed;
    background-color: #fff;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    div{
        padding-top: 7px;
        padding-bottom: 7px;
        display: flex;
        margin: 0 auto;
        span{
            position: relative;
            height: .4rem;
            line-height: .4rem;
            font-size: .16rem;
            flex: 1 1 auto;
            width: 1%;
            border-radius: 36px;
            color: #fff;
            background-color: #d33a31;
            border-color: #d33a31;
            text-align: center;
            padding: 0 6px;
            border: 1px solid #adadad;
            display: inline-block;
        }
    }
`

export {
    BackPageBtn,
    BackTopBtn,
    CollectContainer
}