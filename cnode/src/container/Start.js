import React, { Component } from 'react'
import { Link,Route } from 'react-router-dom'
export default class Start extends Component {
    render() {
        return (
          <div>
                <div className='homewrap'>
                <Link to='/all=1'><a >主页 /</a></Link> <Link to='/Start'><span>&nbsp;&nbsp;Node.js新手入门</span></Link> 
             
            </div>
              <div className='start' style={{backgroundColor:'white',height:'1650px',paddingLeft:'20px'}}>
                 <h1>Node.js 入门</h1><hr/>
                 <h3>《快速搭建 Node.js 开发环境以及加速 npm》</h3>
                 <a href="http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html" target="_blank">http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html</a>
                 <h3>《Node.js 包教不包会》》</h3>
                 <a href="https://github.com/alsotang/node-lessons" target="_blank">https://github.com/alsotang/node-lessons</a>
                 <h3>《ECMAScript 6入门》</h3>
                 <a href="http://es6.ruanyifeng.com/" target="_blank">http://es6.ruanyifeng.com/</a>
                 <h3>《七天学会NodeJS》</h3>
                 <a href="https://github.com/nqdeng/7-days-nodejs" target="_blank">https://github.com/nqdeng/7-days-nodejs</a>
                 <h1>Node.js 资源</h1><hr/>
                 <h3>《前端资源教程》</h3>
                 <a href="https://cnodejs.org/topic/56ef3edd532839c33a99d00e" target="_blank">https://cnodejs.org/topic/56ef3edd532839c33a99d00e</a>
                 <h3>《国内的 npm 镜像源》</h3>
                 <a href="http://cnpmjs.org/" target="_blank">http://cnpmjs.org/</a>
                 <h3>《node weekly》</h3>
                 <a href="http://nodeweekly.com/issues" target="_blank">http://nodeweekly.com/issues</a>
                 <h3>《node123-node.js中文资料导航》</h3>
                 <a href="https://github.com/youyudehexie/node123" target="_blank">https://github.com/youyudehexie/node123</a>
                 <h3>《A curated list of delightful Node.js packages and resources》</h3>
                 <a href="https://github.com/sindresorhus/awesome-nodejs" target="_blank">https://github.com/sindresorhus/awesome-nodejs</a>
                 <h3>《Node.js Books》</h3>
                 <a href="https://github.com/pana/node-books" target="_blank">https://github.com/pana/node-books</a>
                 <h1>Node.js 名人</h1><hr/>
                 <h3>《名人堂》</h3>
                 <a href="https://github.com/cnodejs/nodeclub/wiki/名人堂" target="_blank">https://github.com/cnodejs/nodeclub/wiki/名人堂</a>
                 <h1>Node.js 服务器</h1><hr/>
                 <p>新手搭建 Node.js 服务器，推荐使用无需备案的</p><a href="DigitalOcean(https://www.digitalocean.com/)" target="_blank">DigitalOcean(https://www.digitalocean.com/)</a>
              </div>
          </div>
        )
    }
}
