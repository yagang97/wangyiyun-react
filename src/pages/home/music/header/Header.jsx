import React, { Component } from 'react'
import logo from "assets/images/logo.svg"
import { 
    HeaderContainer,
    HeaderLf,
    HeaderRgBorder
} from "./HeaderStyled"

export default class Header extends Component {
  render() {
    return (
      <div>
        <HeaderContainer>
            <HeaderLf>
                <div><img src={logo} alt=""/></div>
            </HeaderLf>
            <HeaderRgBorder>
                <div>下载App</div>
            </HeaderRgBorder>
        </HeaderContainer>
      </div>
    )
  }
}

