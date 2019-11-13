import { NavBar, Icon, List, InputItem, Button, WhiteSpace, WingBlank, TabBar } from 'antd-mobile';
import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import { HashRouter as Router, Route } from 'react-router-dom'
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'blueTab',
        };
    }
    render() {

        return (

            <div style={{ backgroundColor: 'white' }}>
               
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                ></NavBar>
                <List >
                    <InputItem

                        clear
                        placeholder="手机/邮箱"
                        ref={el => this.autoFocusInst = el}
                    ><i class="iconfont iconicon-user"></i></InputItem>
                    <InputItem

                        clear
                        placeholder="密码"
                        ref={el => this.inputRef = el}
                    ><i class="iconfont iconmima"></i></InputItem>

                </List>
                <WingBlank><Link to='/home' style={{color: 'white',}}><Button type="primary" style={{ backgroundColor: '#3fcccb', marginTop: '45px',  marginRight: '20px', marginLeft: '20px' }} >登录</Button></Link><WhiteSpace /></WingBlank>
                <div style={{ color: '#3fcccb', marginLeft: '100px', marginTop: '25px' }}>新用户注册 | 忘记密码</div>
                <div style={{ marginTop: '100px', marginLeft: '150px', color: '#888888' }}>第三方登录</div>
                <div style={{

                    height: '100%',
                    width: '100%',
                    marginTop: 30,


                }}>
                    <TabBar
                        unselectedTintColor="#949494"
                        tintColor="#33A3F4"
                        barTintColor="white"
                    >
                        <TabBar.Item
                            title="QQ"
                            key="Life"
                            icon={<div style={{
                                width: '22px',
                                height: '22px',
                            }}
                            ><i class="iconfont iconqq" style={{ color: '#5fafef' }}></i></div>
                            }
                        >

                        </TabBar.Item>
                        <TabBar.Item
                            title="微博"
                            key="Life"
                            icon={<div style={{
                                width: '22px',
                                height: '22px',
                            }}
                            ><i class="iconfont iconweibo1" style={{ color: '#ff7171' }}></i></div>
                            }
                        >

                        </TabBar.Item>
                        <TabBar.Item
                            title="微信"
                            key="Life"
                            icon={<div style={{
                                width: '22px',
                                height: '22px',
                            }}
                            ><i class="iconfont iconweixin1" style={{ color: '#55a947' }}></i></div>
                            }
                        >

                        </TabBar.Item>

                    </TabBar>
                </div>
            </div>
        )
    }
}