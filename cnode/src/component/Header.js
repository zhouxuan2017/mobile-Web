import React from 'react';
import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <div className='headerwrap'>
            <header>
               <div style={{float:'left'}}> <img src='https://static2.cnodejs.org/public/images/cnodejs_light.svg' alt=''></img></div>
                <div style={{float:'left',height:'20px',width:'200px',marginLeft:'100px',marginTop: '15px' }}>
                    <form id="search_form" class="navbar-search" action="/">
                     
                        <input type="text" id="q" name="q" class="search-query span3" placeholder='搜索' value=""/>
                    </form>
                 </div>
                    <div style={{ float: 'right', lineHeight: '50px' }}>
                        <Link to='/'>首页</Link>
                        <Link to='/start'>新手入门</Link>
                        <Link to='/api'>API</Link>
                        <Link to='/about'>关于</Link>
                        <Link>注册</Link>
                        <Link to='/signin'>登录</Link>
                    </div>
        </header>

    </div>
            )
}