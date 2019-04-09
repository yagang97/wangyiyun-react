import Styled from "styled-components"
import border from "components/styled/border"

const HeaderContainer = Styled.div`
    /* position:fixed;
    left:0;
    top:0; */
    height:0.64rem;
    background:#d43c33;
    display:flex;
    padding:0 0.1rem; 
    justify-content:space-between;
    align-items:center;
`

const HeaderLf = Styled.div`
    width: 1.42rem;
    height: .25rem;
`

const HeaderRg = Styled.div`
    &::after{border-radius: 37.5%/100%;}
    div{
        position: relative;
        display: inline-block;
        height: 0.3rem;
        line-height:0.3rem;
        padding: 0 0.1rem;
        color: #fff;
        font-size: 15px;
    }
`

const HeaderRgBorder = border({
    component:HeaderRg,
    color:"#fff" ,
    radius:"37.5%/100%"
})


export {
    HeaderContainer,
    HeaderLf,
    HeaderRg,
    HeaderRgBorder
}