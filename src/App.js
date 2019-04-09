import React, { Component } from 'react'
import {BrowserRouter as Router} from "react-router-dom"
import {Provider} from "react-redux"
import store  from "./store/index"
import Index from "./router/index"

 

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Index></Index>
        </Router>
      </Provider>        
    )
  }
}
