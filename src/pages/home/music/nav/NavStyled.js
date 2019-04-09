import Styled from "styled-components"
import border from "components/styled/border"

const NavContainer = Styled.nav`
    /* position:fixed;
    left:0;
    top:1.04rem; */
    display:flex;
    justify-content:space-around;
    align-items:center;
    height:.4rem;
    font-size:.15rem;
    background:#fff;
    div{
        height:100%;
    }
    a{
        height:100%;
        display:block;
        align-items:center;
        display:flex;
        padding:0 .05rem;
        color:black
        &.active{
            color:#d33a31
            border-bottom:.02rem solid #d33a31
        }
    }
`

const NavBorder = border({
    component:NavContainer,
    width:"0 0 1px 0"
})

export {
    NavBorder,
}