import React, { Component } from 'react'
import {
    PlayListContainer,
    PlayListTitle,
    BorderSpan
} from "./PlayListStyled"
import SongList from "components/hotList/HotList"
import {connect} from "react-redux"
import {getPlayListAsync} from "components/songList/actionCreator"
import Comment from "./comment/Comment"
import BackPage from "components/fixed/BackPage"
import BackTop from "components/fixed/BackTop"
import Collect from "components/fixed/Collect"
import BScroll from "better-scroll"

const mapState = state => {
    return {
        playList:state.list.playList
    }
}

const mapDispatch = dispatch => ({
    fetchData(id){
        dispatch(getPlayListAsync(id))
    }
})



class PlayList extends Component {
    constructor(props){
        super(props)
        this.state={
            show:false
        }
        this.getData(this.props.match.params.id)
    }

    getData(id){
        this.props.fetchData(id)
    }

    clickHandler(){
        this.bScroll.scrollTo(0, 0)
    }

    componentDidMount(){
        this.bScroll = new BScroll('#palyScroll', {
         probeType: 2,
         bounce:true,
         click:true
       })

       this.bScroll.on("scroll",(e) => {
           e.y < -300 ?  this.setState({show:true}) : this.setState({show:false})
       })
       
     }

     componentWillUnmount = () => {//解决setstate内存泄漏问题
        this.setState = (state,callback)=>{
          return;
        };
    }


    render() {
        let data=this.props.playList
        return (
            <div style={{"height":"100%"}}>
            <BackPage></BackPage>
            {/* &&运算符，先判断前面的boolen值，如果是true的话，然后会在判断后面的boolen值。如果是false的话，不会再判断后面的boolen值。从而实现显示隐藏的效果 */}
            {this.state.show && <BackTop onClick={this.clickHandler.bind(this)}></BackTop>}
            <Collect></Collect>
             <div id="palyScroll" style={{"height":"100%"}}>
                <PlayListContainer>
                    <PlayListTitle img={data.coverImgUrl}>
                        <div className="playTitle">
                            <div className="titleBg">
                            </div>
                            <div className="titleMain">
                                <div className="titleLf">
                                    <img src={data.coverImgUrl} alt=""/>
                                    <span>歌单</span>
                                    <i>{(data.playCount/10000).toFixed(1)}万</i>
                                </div>
                                <div className="titleRg">
                                    <h2>{data.name}</h2>
                                    <div>
                                        <div className="rgImg">
                                            <img src="http://p1.music.126.net/QWMV-Ru_6149AKe0mCBXKg==/1420569024374784.webp?imageView&thumbnail=60x0&quality=75&tostatic=0&type=webp" alt=""/>
                                        </div>
                                        <span>网易云音乐</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="playInfo"> 
                            <div className="infoTags">
                                标签:
                                {   
                                    data.tags ? 
                                    data.tags.map(value => {
                                        return <BorderSpan key={value}>{value}</BorderSpan>
                                    })
                                    :
                                    <div></div>
                                }
                            </div>
                            <div className="infoMain">
                                <span>简介：{data.description}</span>
                            </div>
                        </div>
                    </PlayListTitle>
                    <h3>歌曲列表</h3>
                    <SongList playList={data}></SongList>
                    <Comment></Comment>
                </PlayListContainer>   
            </div>
            </div>
        )
    }

}


export default connect(mapState,mapDispatch)(PlayList)