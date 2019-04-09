import React, { Component } from 'react'
import { Carousel } from 'antd-mobile'
import http from "utils/fetch"


export default class Swiper extends Component {
    state = {
        data: [],
        imgHeight: 176,
      }

    async componentWillMount() {
        let result = await http.get("/api/banner")
        this.setState({
            data:result.banners.slice(0,5)
        })
        
      }

        render() {
        return (
            <Carousel className="space-carousel"
                style={{padding: "0.16rem",overflow: "hidden"}}
                frameOverflow="visible"
                cellSpacing={10}
                slideWidth={0.8}
                autoplay
                infinite
                // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                afterChange={index => this.setState({ slideIndex: index })}
            >
                {this.state.data.map((val, index) => (
                    <div
                        key={val.targetId}
                        href="http://www.alipay.com"
                        style={{
                            display: 'block',
                            position: 'relative',
                            top: this.state.slideIndex === index ? -10 : 0,
                            height: this.state.imgHeight,
                            boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                        }}
                    >
                        <img
                            src={val.imageUrl}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                            }}
                        />
                    </div>
                ))}
            </Carousel>
        )
    }
}
