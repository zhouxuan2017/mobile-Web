import React, { Component } from 'react'
import Login from './container/Login'
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from './container/Home'
export default class App extends Component {
    render() {
        return (
            <div>
                <Home/>
            </div>
        )
    }
}


