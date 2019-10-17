
import './index.css';
import {ShowTime} from './ShowTime';
import Todolist from './Todolist/Todolist'
import Request from './Request'
import Parent from './Context/Parent'
import Hoc from './Hoc/Hoc'
import Portals from'./Portal/Portals'
import ParentPortal from './Portal/ParentPortal'
import React, { Component } from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Sider from './Sider'
import {Button} from 'antd'
//antd使用：
//1.下载安装antd框架  ：npm i antd
//2.在某个css里引入antd的css:@import '~antd/dist/antd.css';
//3.在需要的组件内import相应的组件，然后使用

export default class App extends Component {
    render() {
        return (
           <Router>
               <div>
                   {/* {Hoc}是引进来的不能随便写    path是路径可以随便写 */}
                   <Sider/>
                   <Button type='primary'>primary</Button>
                   <div style={{float:'left',width:'600px'}}>
                   <Route path='/hoc' component={Hoc}/>
                   <Route path='/request' component={Request}/>
                   <Route path='/Parentportals' component={ParentPortal}/>
                   <Route path='/portals' component={Portals}></Route>
                   <Route exact path='/' component={Todolist}/>
                   <Route path='/showTime' component={ShowTime}/>
                   <Route path='/todoList' component={Todolist}></Route>
                   <Route path='/Parent' component={Parent}></Route>
                   </div>
               </div>
           </Router>
        )
    }
}
