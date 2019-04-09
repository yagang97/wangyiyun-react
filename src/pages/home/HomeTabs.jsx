import React from 'react'
 
import { TabBar } from 'antd-mobile';
 
import friends from 'assets/images/friends.svg'
import shipin from 'assets/images/shipin.svg'
import wode from 'assets/images/wode.svg'
import yinyue from 'assets/images/yinyue.svg'
import zhanghao from 'assets/images/zhanghao.svg'
import friendsActive from 'assets/images/friends-active.svg'
import shipinActive from 'assets/images/shipin-active.svg'
import wodeActive from 'assets/images/wode-active.svg'
import yinyueActive from 'assets/images/yinyue-active.svg'
import zhanghaoActive from 'assets/images/zhanghao-active.svg'

import Music from "music/Music"
import {withRouter} from "react-router-dom"


 class HomeTabs extends React.Component {
  constructor(props) { 
    super(props);
    this.state = {
      selectedTab: 'music',
      hidden: false,
      fullScreen: true,
    };
  }
  
  clickHandler(){
    console.log(1)
  }

  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'absolute', height: '100%', width: '100%', top: 0 } : { height: "100%" }}>
        <TabBar
          unselectedTintColor="#999"
          tintColor="#fff"
          barTintColor="#232124"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="发现"
            key="music"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${yinyue}) center center /  22px 22px no-repeat` }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${yinyueActive}) center center /  25px 25px no-repeat` }}
            />
            }
            selected={this.state.selectedTab === 'music'}
            onPress={() => {
              this.setState({
                selectedTab: 'music',
              });
            }}
            data-seed="logId"
          >
            <Music></Music>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${shipin}) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${shipinActive}) center center /   24px 24px no-repeat` }}
              />
            }
            title="视频"
            key="shipin"
            selected={this.state.selectedTab === 'shipin'}
            onPress={() => {
              this.setState({
                selectedTab: 'shipin',
              });
              this.props.history.push("/playList/2684770350")
            }}
            data-seed="logId1"
          >
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '24px',
                height: '24px',
                background: `url(${wode}) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '24',
                height: '24',
                background: `url(${wodeActive}) center center /  24px 24px no-repeat` }}
              />
            }
            title="我的"
            key="wode"
            selected={this.state.selectedTab === 'wode'}
            onPress={() => {
              this.setState({
                selectedTab: 'wode',
              });
              this.props.history.push("/playSong/1345848098")
            }}
          >
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: friends }}
            selectedIcon={{ uri: friendsActive }}
            title="朋友"
            key="friends"
            selected={this.state.selectedTab === 'friends'}
            onPress={() => {
              this.setState({
                selectedTab: 'friends',
              }); 
              this.props.history.push("/playList/2508949233")
            }}
          >
            <div>朋友</div>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '24px',
                height: '24px',
                background: `url(${zhanghao}) center center /  26px 26px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '24',
                height: '24',
                background: `url(${zhanghaoActive}) center center /  28px 28px no-repeat` }}
              />
            }
            title="账号"
            key="zhanghao"
            selected={this.state.selectedTab === 'zhanghao'}
            onPress={() => {
              this.setState({
                selectedTab: 'zhanghao',
              });
            }}
          >
            <div>账号</div>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default withRouter(HomeTabs)