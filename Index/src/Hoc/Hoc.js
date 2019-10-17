import React, { Component } from 'react'

let url='https://api.apiopen.top/musicRankingsDetails?type=1';
//hoc接收一个组件
function hoc(Com,url,title){
  //声明为了return出来一个组件
 class A extends Component{
        constructor(){
            super();
            this.state = {
                data: []
            }
        };
       
      componentDidMount(){
            fetch(url)
            .then((res)=>{
                return res.json();
            })
            .then((res)=>{
                this.setState({
                    data: res.result
                })
            })
        }
      render(){
         return  <div>
                 <h1>{title}</h1>
                <Com {...this.props} data={this.state.data} />
              </div>
           
        }
    }
   
    //A.displayName='A('+getDisplayName(Com)+')'
    A.displayName=`A(${getDisplayName(Com)})`;
    return A;
}
function  getDisplayName(Com){
    return Com.displayName||Com.name||'Component';
}
class Music extends Component{
    render(){
        return <ul>
            <div>{this.props.name}</div>
            {
                this.props.data.map((item,index)=>{
                    return <li key={index}><span style={{color:'#FF1493'}}>第{index+1}首歌：</span>{item.title}</li>
                })
            }
        </ul>
    }
}

class Music1 extends Component{
    render(){
        return <ul>
            {
                this.props.data.map((item,index)=>{
                    return (
                        <div>
                           <p key={index} style={{color:'blue'}}>The  Number{index+1}：{item.title}</p>
                            <p key={index}>作者：{item.author}</p>
                        </div>
                    
                            )
                           
                })
            }
        </ul>
    }
}
var Mymusic=hoc(Music,url,'第一个');
var Mymusic1=hoc(Music1,url,'第二个');

export default class Hoc extends Component {
    render() {
        return (
            <div>
                <Mymusic name='hello world'/>;
                <Mymusic1/>
            </div>
        )
    }
}

