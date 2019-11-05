import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route,Link,Switch,Redirect} from './react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import NoMatch from './containers/NoMatch'
import Login from './containers/login';
import store from './store'
import {Provider} from 'react-redux';//提供store数据
window.onhashchange = function(){
    console.log(window.location.hash)
}

ReactDOM.render(
    <Provider store={store}>
    <Router>
        <div>
            <div>
                {/* <a href='#/home'>首页</a><br/>
                <a href='#/about'>about</a><hr/> */}
                {/* Link标签    <hr/> */}
                <Link to='/home'>首页</Link><br/>
                <Link to='/about'>about</Link><br/>
                 <Link to='/login'>登录</Link><br/>
       
            </div><hr/>
            <div>
                {/* Switch里面只能跟Route和Redirect    不能够跟别的 */}
                <Switch>
                <Route exact path='/home' component={Home}/>
                <Route path='/home/123' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/login'component={Login}/>
                {/* //上面匹配不到直接跳抓 */}
                <Route path='/nomatch' component={NoMatch}/>
                
                <Redirect to='/nomatch'/>
                </Switch>
            </div>
        </div>
    </Router>
   
    </Provider>,
     document.getElementById('root')
)