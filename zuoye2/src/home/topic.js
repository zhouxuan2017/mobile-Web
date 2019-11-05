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
        let id=this.props.match.params.id
        // let url1=this.props.match.url.split('=')[0]
        // let url=url1.slice(1)
      console.log(id)
        fetch(`https://cnodejs.org/api/v1/topic/${id}`)
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res.data.content)
            this.setState({data:res.data});
        })

    }

    componentDidUpdate(prevProps, prevState) {
        //最初不执行   属性更新以后执行
        let id=this.props.match.params.id
        // let url1=this.props.match.url.split('=')[0]
        // let url=url1.slice(1)
      console.log(id)
        fetch(`https://cnodejs.org/api/v1/topic/${id}`)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data});
            console.log(this.state.data)
        })
    }
    render(){
        return(
             <div style={{backgroundColor:'white'  ,overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis',height:1700,paddingLeft:10}} dangerouslySetInnerHTML={{__html:this.state.data.content}}></div>



        )
    }
}
