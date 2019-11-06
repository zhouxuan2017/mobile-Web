import React, { Component } from 'react'
import { Link,Route } from 'react-router-dom'

export default class About extends Component {
    render() {
        return (
            <div style={{height:1500}}>
             <div className='homewrap'>
             <Link to='/all=1'><a >关于 /</a></Link> <Link to='/about'><span>&nbsp;&nbsp;关于</span></Link> 
             </div>
             <div className='start' style={{backgroundColor:'white',height:'1550px',paddingLeft:'20px'}}>
             <h1 >关于</h1><hr/>
             <p>CNode 社区为国内最大最具影响力的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
             <p>CNode 社区由一批热爱 Node.js 技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入，我们非常欢迎更多对 Node.js 感兴趣的朋友。 </p>
             <p>CNode 的 SLA 保证是，一个9，即 90.000000%。</p>
             <p>社区目前由<a>@alsotang</a>  在维护，有问题请联系：https://github.com/alsotang</p>
             <p>请关注我们的官方微博：<a href='http://weibo.com/cnodejs'>http://weibo.com/cnodejs</a></p>
            <p></p>
            <h1 >移动客户端</h1><hr/>
            <p>客户端由<a> @soliury </a>开发维护。</p>
             <p>源码地址： <a href='https://github.com/soliury/noder-react-native'>https://github.com/soliury/noder-react-native</a> 。</p>
             <p>立即体验 CNode 客户端，直接扫描页面右侧二维码。</p>
             <p>另，安卓用户同时可选择：<a href='https://github.com/TakWolf/CNode-Material-Design'>https://github.com/TakWolf/CNode-Material-Design</a> ，这是 Java 原生开发的安卓客户端。</p>
             <h1 >友情链接</h1><hr/>
             <a href="https://www.huoban.com/" target="_blank"><img src="//static.cnodejs.org/Ftmw28ed0I_rir7YYz3c_jVPkCGx"/> </a>

          <a href="http://100offer.com/" target="_blank">
            <img src="//static.cnodejs.org/FmU1Ik57z6wrl9JDTNdcYBTDetFq"/>
          </a>

          <a href="https://www.teambition.com/" target="_blank">
            <img src="//static.cnodejs.org/FkMR_SqpCp4Q0eDIaWrQlALiXdmP"/>
          </a>

          <a href="http://yunzhihui.com/" target="_blank">
            <img src="//static.cnodejs.org/Fq2cV_14IFHwelZ-6jey42Z0-eOR"/>
          </a>

          <a href="http://www.jiguang.cn/" target="_blank">
            <img src="//static.cnodejs.org/FijGJbij9GObh5AXw-Vyu5LGn08a"/>
          </a>

          <a href="http://segmentfault.com/" target="_blank">
            <img src="//static2.cnodejs.org/public/images/temp/sf.png"/>
          </a>

          <a href="http://ionichina.com/" target="_blank">
            <img src="//static2.cnodejs.org/public/images/temp/ionichina.png"/>
          </a>

          <h1 >LOGO</h1><hr/>
           <p>白底：  <a style={{color:'#444'}} href='/public/images/cnodejs.svg' > /public/images/cnodejs.svg</a></p>
           <p>黑底：  <a style={{color:'#444'}} href=' /public/images/cnodejs_light.svg' >  /public/images/cnodejs_light.svg</a></p>
             </div>
            </div>
        )
    }
}
