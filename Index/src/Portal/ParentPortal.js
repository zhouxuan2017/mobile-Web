import React, { Component } from 'react'
import Portals from './Portals'
import { con } from '../Context/Context';


export default class ParentPortal extends Component {
    cli=()=>{
        console.log('dsfdfparent');
    }
    render() {
        console.log(this);
        return (
            <div onClick={this.cli} >
                <Portals>
                <h2>你好</h2>
                <h2>hello world</h2>
                </Portals>
                <Portals>
                <li>音乐</li>
                </Portals>
            </div>
        
        )
    }
}
