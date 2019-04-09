import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import "assets/css/reset.css"
import FastClick from 'fastclick';
import { AppContainer } from 'react-hot-loader';
import Route from './router';

import {BrowserRouter as Router} from "react-router-dom"
import {Provider} from "react-redux"
import store  from "./store/index"


// 移动端解决点击300ms延迟问题
FastClick.attach(document.body);
 


const render = Component => {
  ReactDOM.render(
    //绑定redux、热加载。如果已经通过 HotModuleReplacementPlugin 启用了模块热替换(Hot Module Replacement)，则它的接口将被暴露在 module.hot 属性下面。通常，用户先要检查这个接口是否可访问，然后再开始使用它
    <Provider store={store}>
      <AppContainer>
          <Router>
            <Component></Component>
          </Router>
      </AppContainer>
    </Provider>,
    document.getElementById('root'),
  )
}

render(Route);
 
// Webpack Hot Module Replacement API
if (module.hot) { 
  module.hot.accept('./router/', () => {
    render(Route);
  })
}

serviceWorker.unregister();

