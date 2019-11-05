import React, { Component } from 'react'
import Header from './component/Header'
import Slider from './component/Slider'
import Footer from './component/Footer'
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from './container/Home'
import Start from './container/Start'
import Api from './container/Api'
import About from './container/About'
import Signin from './container/Signin'
import Topic from './home/topic'

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className='body1'>
            <Header />
            <div className='main'>
              <div className='content'>
                <Route path='/' component={Home} />
                <Route path='/start' component={Start} />
                <Route path='/api' component={Api} />
                <Route path='/about' component={About} />
                <Route path='/signin' component={Signin}/>
                <Route path='/topic' component={Topic}/>
              </div>
              <div className='slider'>
                <Slider />
              </div>    
            </div>
         
           </div>
          <div className='zong'>
            <Footer/>
          </div>
        </Router>
      </div >
    )
  }
}
