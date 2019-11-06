import React, { Component } from 'react'
import { Link,Route } from 'react-router-dom'
import { thisExpression } from '@babel/types';
export default class All extends Component {
    constructor() {
        super();
        this.state = {
            data: [],        
        }
    }   
    componentDidMount() {
        // console.log(window.location.search)
        //  let page1 = this.props.location.search;
        let page=this.props.match.params.page
        let url1=this.props.match.url.split('=')[0]
        let url=url1.slice(1)
        fetch(`https://cnodejs.org/api/v1/topics?tab=${url}&page=${page}`)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data});
        })
    }
    componentDidUpdate(prevProps, prevState) {
        //最初不执行   属性更新以后执行
        let page=this.props.match.params.page
        let url1=this.props.match.url.split('=')[0]
        let url=url1.slice(1)
        // console.log(url)
        fetch(`https://cnodejs.org/api/v1/topics?tab=${url}&page=${page}`)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data});
        })
    }
    render() {
        return (
            <div>
                <div style={{ paddingTop: '20px', paddingLeft: '20px', height: 1700 }}>
                    {
                        this.state.data.map((item,idx) => (
                            <div style={{ backgroundColor: 'white', borderBottom: '1px solid #f0f0f0', height: 42, paddingTop: 10 }}>
                                <div style={{ width: '45px', float: 'left' }} ><img src={item.author.avatar_url} style={{ width: 35, height: 30 }}></img></div>
                                <div dangerouslySetInnerHTML={{ __html: item.reply_count + '/' + item.visit_count }} style={{ height: 33, width: '90px', float: 'left' }}></div>
                                <div style={{ width: '30px', float: 'left' ,backgroundColor:'#80bd01',height:'20px',color:'white'}} >招聘</div>
                                <Link to={'/topic'+item.id}>
                                    <div style={{ width: '600px', float: 'left', color: '#333', fontSize: '16px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                                    <a style={{color:'black'}}>{item.title}</a>
                                    </div>
                                </Link>
                                <div style={{ width: '45px', float: 'left' }} ><img src={item.author.avatar_url} style={{ width: 25, height: 20 }}></img></div>
                                <div style={{ width: '50px', float: 'left',marginTop:-20 }} >1小时前</div>
                            </div>
                        ))
                    }                
                </div>
                <div style={{  height:43,backgroundColor:'white',paddingTop:'20px' }}>                
                {
                     [1,2,3,4,5,6,7,8,9,10].map((item)=>(
                        <li style={{display:'inline' ,border:'1px red solid'}} key={item}><Link to={'/job='+item}>{item}</Link></li>
                         )) 
                      }                        
                </div>
            </div>
        )

    }
}
