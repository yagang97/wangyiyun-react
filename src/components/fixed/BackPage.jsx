import React, { Component } from 'react'
import {BackPageBtn,
} from "./FixedStyled"
import {withRouter} from "react-router-dom"

class BackPage extends Component {
  constructor(props){
    super(props)
    this.state={
      
    }
  }

  backPage(){
      this.props.history.go(-1)
  }


  render() {
    return (
        <BackPageBtn  onClick={this.backPage.bind(this)}></BackPageBtn>
    )
  }
}

export default withRouter(BackPage)
