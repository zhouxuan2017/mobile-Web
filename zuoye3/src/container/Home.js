import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { NavBar, Grid, ListView, Icon, List, InputItem, Button, WhiteSpace, WingBlank, TabBar, Carousel } from 'antd-mobile';
import My from './My'
import MyHome from './MyHome';
import Ling from './Ling'
import  Shop from './Shop'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'blueTab',
        }
    }


    render() {
        return (

            <div style={{
                position: 'fixed',
                height: '100%',
                width: '100%',
                top: 0
            }}>

                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                >

                    <TabBar.Item
                        title="首页"
                        key="Life"
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                        }}
                        ><i class="iconfont iconyemian"></i></div>
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                        }}
                        ><i class="iconfont iconyemian"></i></div>
                        }
                        selected={this.state.selectedTab === 'blueTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'blueTab',
                            });
                        }}
                    >
                        <MyHome />
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                            }}
                            ><i class='iconfont iconlinggan-copy'></i></div>
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                            }}
                            ><i class='iconfont iconlinggan-copy'></i></div>
                        }
                        title="灵感"
                        key="linggan"
                        selected={this.state.selectedTab === 'redTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'redTab',
                            });
                        }}
                    >
                       <Ling/>
          </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                            }}
                            ><i class='iconfont iconshangcheng'></i></div>
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                            }}
                            ><i class='iconfont iconshangcheng'></i></div>
                        }
                        title="商城"
                        key="shop"

                        selected={this.state.selectedTab === 'greenTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'greenTab',
                            });
                        }}
                    >
                       <Shop/>
          </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                            }}
                            ><i class='iconfont iconwode'></i></div>
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                            }}
                            ><i class='iconfont iconwode'></i></div>
                        }
                        title="我的"
                        key="My"

                        selected={this.state.selectedTab === 'yellowTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'yellowTab',
                            });
                        }}
                    ><My />
                    </TabBar.Item>
                </TabBar>


            </div>


        )
    }
}
