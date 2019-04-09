import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import asyncComponent from 'utils/asyncComponent';
import Home from "@/pages/home/Home";

const PlayList = asyncComponent(() => import("@/pages/playList/PlayList"));
const PlaySong = asyncComponent(() => import("@/pages/playSong/PlaySong"));
 
 
// react-router4 不再推荐将所有路由规则放在同一个地方集中式路由，子路由应该由父组件动态配置，组件在哪里匹配就在哪里渲染，更加灵活
export default class Index extends Component{ 
  render(){
    return(
      <Switch>
        <Route exact path="/playList/:id" component={PlayList}></Route>
        <Route exact path="/playSong/:id" component={PlaySong}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
    )
  }
}

