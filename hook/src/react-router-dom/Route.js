import React, { Component } from 'react'
import {Consumer}from './context'
import pathToReg from 'path-to-regexp'

export default class Route extends Component {


    render() {
        return (
           <Consumer>
               {
                   (value)=>{
                       let {pathname}=value.location;
                       //结构封装  进行重命名component:Component
                       let{path,component:Component,exact}=this.props;
                       console.log(pathname,path)
                       console.log(pathToReg)
                     let reg=pathToReg(path,[],{end:exact})
                     console.log(reg)
                    //    if(path===pathname)
                    if(reg.test(pathname))
                       {
                          return<Component {...value}/>

                        // return React.createElement(Component,value) 两种方式目的相同 
                       }
                      return null;
                   }
               }
           </Consumer>
        )
    }
}
