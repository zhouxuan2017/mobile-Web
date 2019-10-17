import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Sider extends Component {
    render() {
        return (
            <ul style={{float:'left',width:'300px'}}>  
                 <li> <Link to='/hoc'>Hoc</Link></li>
                 <li><Link to='/request'>Request</Link></li>
                 <li><Link to='/Parentportals'>Parentportals</Link></li>
                 <li> <Link to='/'>Todolist</Link></li>
                 <li><Link to='/showTime'>showTime</Link></li>
                 <li><Link to='/todoList'>Todolist/</Link></li>
                 <li><Link to='/Parent'>Parent</Link></li>
                 
                 
                  
            </ul>
        )
    }
}
