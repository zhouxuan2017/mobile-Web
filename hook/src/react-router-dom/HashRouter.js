import React, { Component } from 'react'
import {Provider} from './context';

export default class HashRouter extends Component {
    constructor(){
        super();
        this.state = {
            location:{
                pathname:window.location.hash.slice(1) || '/'
            }
        }
    }
    componentDidMount(){
        //初始加上#
        window.location.hash = window.location.hash.slice(1) || '/'

        //当hash给改变的时候重新渲染
        //添加事件监听
        window.addEventListener('hashchange',()=>{
            this.setState({
                location:{
                    pathname:window.location.hash.slice(1)||'/'
                }
            })
        })
    }
    render() {
        let value={
            location:this.state.location,
            history:{
                push:(path)=>{
                    window.location.hash=path;
                }
            }
        }
        return (
            <Provider value={value}>
                {
                    this.props.children
                }
            </Provider>
        )
    }
}