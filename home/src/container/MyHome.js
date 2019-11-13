import React, { Component } from 'react'
import { NavBar, Grid, ListView, Icon, List, InputItem, Button, WhiteSpace, WingBlank, TabBar, Carousel } from 'antd-mobile';
export default class MyHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'blueTab',
            data: [1, 2, 3],
            imgHeight: 156,
        };
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['http://img1.imgtn.bdimg.com/it/u=3817593529,4243513540&fm=26&gp=0.jpg', 'http://img3.imgtn.bdimg.com/it/u=1161001322,905401873&fm=26&gp=0.jpg', 'http://img1.imgtn.bdimg.com/it/u=2472697107,3847722896&fm=26&gp=0.jpg'],
            });
        }, 100);
    }
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#3fcccb', color: 'white' }}
                >住吧家居</NavBar>
                <Carousel
                    autoplay={true}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    slideWidth='375px'
                >
                    {this.state.data.map((val, index) => (
                        <img
                            key={val}

                            src={this.state.data[index]}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                            }}
                        />
                        // </a>
                    ))}
                </Carousel>     
                <div  style={{ height: 100, width: '100%', marginTop: 10 }}>
                    {/* <img src={require("../img/3.jpg")} style={{ width: '100%', height: 100 }}></img> */}
                    <div style={{width:'27%',height:100,float:'left',marginLeft:15}}>
                        <a><img src={require('../img/3_03.jpg')} style={{width:'100%',height:100}}></img></a>
                    </div>
                    <div style={{width:'27%',height:100,float:'left',marginLeft:20}}>
                    <a><img src={require('../img/3_05.jpg')} style={{width:'100%',height:100}}></img></a>
                    </div>
                    <div style={{width:'27%',height:100,float:'left',marginLeft:20}}>
                    <a><img src={require('../img/b_07.jpg')} style={{width:'100%',height:100}}></img></a>
                    </div>
                </div>
                <div style={{height:'200px',width:'100%', marginTop: 10 }}>
                    <div style={{backgroundColor:'#3fcccb',float:'left',height:'20px',width:5,paddingTop:10}}></div><span>热门推荐</span>
                    <div><img src={require('../img/b_06.jpg')} style={{height:180,width:'100%'}}></img></div>
                </div>
            </div>
        )
    }
}
