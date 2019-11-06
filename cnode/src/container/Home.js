import React, { Component } from 'react'
import { Link,Route } from 'react-router-dom'

import Good from '../home/Good'
import Share from '../home/Share'
import Ask from '../home/Ask'
import Job from '../home/Job'
import Dev from '../home/Dev'
import All from '../home/All'
import Topic from '../home/topic'



export default class Home extends Component {
    render() {
        let url=this.props.match.url
        return (
            <div className='homewrap '>
                
                <div>
                    <Link to="/all=1">全部</Link>
                    <Link to='/good=1'>精华</Link>
                    <Link to='/share=1'>分享</Link>
                    <Link to='/ask=1'>问答</Link>
                    <Link to='/job=1'>招聘</Link>
                  
                  
                </div>
                <div >
                    <Route path='/good=:page' component={Good}/>
                    <Route path='/share=:page' component={Share}/>
                    <Route path='/ask=:page' component={Ask}/>
                    <Route path='/job=:page' component={Job}/> 
                    <Route path="/all=:page" component={All}/>
                    <Route path="/topic:id" component={Topic}/>
              </div>
             
            </div>
               
                )
            }
        }
