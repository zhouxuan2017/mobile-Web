import React, { Component } from 'react'

export default class Signin extends Component {
    render() {
        return (
            <div>
                <div style={{ height:  400 }}>
                    <div className='homewrap'>
                        <a href='/'>主页 /</a><span>&nbsp;&nbsp;登录</span>
                    </div>
                    <div  style={{  height: '300px', marginLeft: '200px',marginTop:'40px',width:'500px' }}>
                      <span>用户名</span>&nbsp;&nbsp;&nbsp;&nbsp; <input type='input-xlarge'  className='pass'></input><br/>
                      <span>密码</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type='input-xlarge' className='pass'></input><br/>
                      <button className='btn'><a href='/'>登录</a></button>
                    </div>
                </div>
            </div>
        )
    }
}
