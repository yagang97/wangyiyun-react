import Styled from "styled-components"
import border from "components/styled/border"

const NewSongList = Styled.a`
    display:flex;
    padding-left:.1rem
    justify-content:space-between;
    align-items:center;
    height:.55rem
    .hotListNum{
        align-items: center;
        width: .28rem;
        font-size: .17rem;
        /* color:${props => (Number(props.num) < 3 ? "#999" : "#df3436")} */
    }
`

const SongListLf = Styled.div`
    display:flex;
    flex-direction:column;
    overflow: hidden;
    flex: 1 1 auto;
    padding: .06rem 0;
    width: 0;
    p{
        font-size:.17rem;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-break: normal;
        overflow: hidden;
    }
    div{
        font-size:.12rem;
        color:#888;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-break: normal;
        overflow: hidden;
        i{
            display: inline-block;
            width: .12rem;
            height: .08rem;
            margin-right: .04rem;
            background: url(//s3.music.126.net/m/s/img/index_icon_2x.png?5207a28…) no-repeat;
            background-size: 1.66rem .97rem;
        }
    }
`

const SongListRg = Styled.div`
    display: flex;
    align-items: center;
    padding: 0 10px;
    span{
        background: url(//s3.music.126.net/m/s/img/index_icon_2x.png?5207a28…) no-repeat;
        background-size: 166px 97px;
        background-position: -24px 0;
        width: .22rem;
        height: .22rem;
    }
`

const ListBorder = border({
    component:NewSongList,
    width:"0 0 1px 0"
})

export {
    SongListLf,
    SongListRg,
    ListBorder
}