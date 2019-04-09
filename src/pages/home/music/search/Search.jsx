import React, { Component } from 'react'
import {
    SearchContainer,
    BorderInput,
    HotSearch,
    SearchRecord,
    BorderLi,
    SearchMsg,
    SpanBorder
} from "./SearchStyled"
import http from "utils/fetch"
import SearchResult from "./SearchResult"
import BScroll from "better-scroll"


export default class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            value:"",
            searchData:[],
            display:"block",
            searchDisplay:"none",
            searchValue:""
        }
    }

    async componentDidMount() {
        let result = await http.get("/api/search/hot")
        this.setState({ data: result.result.hots })
 
        new BScroll("#searchSroll",{
            click:true,
            probeType: 2,
            bounce:true,
        })

    }

    change(e){
        this.setState({
            value:e.target.value
        },async() => {
            if(this.state.value !== ""){
                let url = "/api/search/suggest?keywords=" + this.state.value
                let result = await http.get(url)
                if(result.code !== 200) return null
                this.setState({
                    searchData:result.result.songs,
                })
            }
        })
        
    }

    searchHandler(value,e){
        if(e && e.keyCode === 13){
            this.setState({
                display:"none",
                searchDisplay:"block",
                searchValue:value
            })
        }else{
            this.setState({
                display:"block",
                searchDisplay:"none"
            })
        }
    }

    clickHandler(value){
        this.setState({
            display:"none",
            searchDisplay:"block",
            searchValue:value
        })
    }
 
    render() {
        let searchMsg,searchResult
        if(this.state.searchValue !== ""){//向子组件传递最新的value
            searchResult = (
                <SearchResult style={{"display":"block","background":"#fbfcfd"}} value={this.state.searchValue}></SearchResult>
            )
        }
        if(!this.state.searchData) return (
            <BorderInput>
                    <div>
                        <i></i>
                        <input type="text" placeholder="搜索歌曲,歌手,专辑" onChange={this.change.bind(this)} onKeyDown={this.searchHandler.bind(this,this.state.value)}/>
                    </div>
            </BorderInput>
        )
        if(this.state.searchData.length !== 0 && this.state.value !==""){
            searchMsg = (
                <SearchMsg>
                    <h3>"搜索"<span>{this.state.value}</span>"</h3>
                    <ul>
                        {
                            this.state.searchData.map(value => (
                                <li key={value.id} onClick={this.clickHandler.bind(this,this.state.value)}><i></i><SpanBorder>{value.name}</SpanBorder></li>
                            ))
                        }
                    </ul>
                </SearchMsg>
            )
        }else{
            searchMsg = ( 
                <>
                    <HotSearch>
                    <p>热门搜索</p>
                    <ul>
                        {
                            this.state.data.map(value => (
                                <BorderLi key={value.first} onClick={this.clickHandler.bind(this,value.first)}>{value.first}</BorderLi>
                            ))
                        }
                    </ul>
                    </HotSearch>
                    <SearchRecord>
                        <p onClick={this.clickHandler.bind(this,"一场游戏一场梦")}><i className="searchTime"></i><span>一场游戏一场梦</span><i className="searchBad"></i></p>
                        <p onClick={this.clickHandler.bind(this,"林宥嘉新歌")}><i className="searchTime"></i><span>林宥嘉新歌</span><i className="searchBad"></i></p>
                        <p onClick={this.clickHandler.bind(this,"七亿少女得不到的梦")}><i className="searchTime"></i><span>七亿少女得不到的梦</span><i className="searchBad"></i></p>
                    </SearchRecord>
                </>
            )
        }
        return (
            <SearchContainer id="searchSroll">
                <div>
                <BorderInput>
                    <div>
                        <i></i>
                        <input type="text" placeholder="搜索歌曲,歌手,专辑" onChange={this.change.bind(this)} onKeyDown={this.searchHandler.bind(this,this.state.value)}/>
                    </div>
                </BorderInput>
                <div style={{"display":this.state.display}}>
                 {searchMsg}
                </div>
                <div style={{"display":this.state.searchDisplay}}>
                 {searchResult}
                </div>
                </div>
            </SearchContainer> || <div id="searchSroll"></div>//处理数据开渲染的时候better-scroll报错问题
        )
    }
}
