import React, { Component } from 'react'
import { Link,Route } from 'react-router-dom'

export default class Signin extends Component {
    render() {
        return (
            <div>
                <div style={{ height:  400 }}>
                    <div className='homewrap'>
                       <Link to='/all=1'><a >主页 /</a></Link> <Link to='/signin'><span>&nbsp;&nbsp;登录</span></Link> 
                    </div>
                    <div  style={{  height: '300px', marginLeft: '200px',marginTop:'40px',width:'500px' }}>
                      <span>用户名</span>&nbsp;&nbsp;&nbsp;&nbsp; <input type='input-xlarge'  className='pass'></input><br/>
                      <span>密码</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type='input-xlarge' className='pass'></input><br/>
                     <Link to='/all=1'> <button className='btn'><a>登录</a></button></Link>
                    </div>
                </div>
            </div>
        )
    }
}
