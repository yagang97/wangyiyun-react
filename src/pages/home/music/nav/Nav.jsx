import React, { Component } from 'react'
import Recommend from "music/recommend/Recommend"
import Search from "music/search/Search"
import HotSong from "music/hotSong/HotSong"
import { CSSTransition,TransitionGroup} from 'react-transition-group';


import {
    NavBorder,
} from "./NavStyled"
import {
    Route,
    withRouter,
    Switch,
    NavLink,
    Redirect,
}from "react-router-dom"
 

class Nav extends Component {
    render(){
        return (
            <main style={{"height":"100%","background":"#fff","paddingBottom":"1rem"}}>
                <NavBorder>
                    <div><NavLink to="/recommend" activeClassName="active">推荐音乐</NavLink></div>
                    <div><NavLink to="/hotSong" activeClassName="active">热歌榜</NavLink></div>
                    <div><NavLink to="/search" activeClassName="active">搜索</NavLink></div>
                </NavBorder>
                {/* 加了动画，就前面加了个div，高度变了，better-scroll失效 */}
                {/* <TransitionGroup>
                    <CSSTransition
                    key={this.props.location.key}
                    timeout={300}
                    classNames={{
                        enterActive:"animated fadeIn",
                        exitActive:"animated fadeOut"
                    }}
                    >  */}
                        <Switch>
                            <Redirect from="/" to="/recommend" exact ></Redirect>
                            <Route   path="/recommend" component={Recommend}></Route>
                            <Route   path="/hotSong" component={HotSong}></Route>
                            <Route   exact path="/search" component={Search}></Route>
                        </Switch>
                    {/* </CSSTransition>
                </TransitionGroup> */}
            </main>
        )
    }


}
  
export default withRouter(Nav)