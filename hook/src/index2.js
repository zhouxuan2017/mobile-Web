import React, { Component, useState, useEffect, useContext ,useRef} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'



//import React, { Component, useState, useEffect,useContext } from 'react';
//生成上下文
let cxt = React.createContext();

//声明组件(有状态组件)
//类组件(state是类组件特有的、私有的 只能类组件去用  存储当前组件的数据)
//函数组件（无状态组件、小、简单、之前适合做UI组件）
//hooks import React,{Component,useState} from 'react';  加了useState
//hooks只能用在函数组件  而且用在组件最顶层
function Count() {
    //数组解构
    let arr = useState(0);
    console.log(arr)//0  初始值   f()函数   useState
    let [num, setNum] = useState(0);
    let [name] = useState('tom');

     let value=useContext(cxt);
     console.log(value)
     let p=useRef(null);
    useEffect(()=>{
        console.log(p)
    })
    return (
        <div>
            <p ref={p}>{num}</p>
            <p>{num}</p>
            <p>{name}</p>
            <button onClick={() => setNum(num + 1)}>点击+1</button>
        </div>
    )
}

//useEffect(代替类组件的生命周期函数)
function ShowTime() {
    let [time, setTime] = useState(new Date().toLocaleString());
    //import React,{Component,useState,useEffect} from 'react';
    //相当于componentDidMount和componentDidUpdate
    //相当于componentWillUnmount  组件销毁  return 一个函数
    //可以写多个useEffect
    useEffect(() => {
        console.log(time)
        let timeId = setInterval(() => {
            setTime(new Date().toLocaleString())
        }, 1000)
        return () => {
            clearInterval(timeId)
        }
    }, [])//[]是个数组  里面传的函数变化的时候才会执行依赖数组里面的东西决定这个函数执不执行  空数组则不阻碍   调用接口可以使用 [props.match.params.page]  
    useEffect(() => {

    }, []);
    return (
        <div>
            <h1>{time}</h1>
        </div>
    )
}

//自定义hook（更方便封装组件内的逻辑功能）
//函数名一定是use开头
function  useFetch(url) {
    let [data,setData]=useState([]);
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(res=>{
            setData(res.data)
        })
    })
    return data;
}
function  Topic() {
    let data=useFetch('https://cnodejs.org/api/v1/topics?page=4&tdsourcetag=s_pctim_aiomsg');
    return (
        <div>
            {
            data.map((item)=><p key={item.id}>{item.title}</p>)
            }
        </div>
    )
    
}
ReactDOM.render(
    <cxt.Provider value={{ LIST: [1, 2, 3] }}>
        {/* //  <Count/>,  */}
        <Router>
            <div>
              
               <Topic/>
                <Link to='/count'>Count</Link><br />
                <Link to='/showtime'>ShowTime</Link>
              
                <Route path='/count' component={Count}></Route>
                <Route path='/showtime' component={ShowTime}></Route>

            </div>
        </Router>
    </cxt.Provider>,
    document.getElementById('root')


)




//计数器 按钮  点击加1
//函数组件不行 例如
// function  Count() {
//     let num=0;
//     return (
//         <div>
//             <p>{0}</p>
//             <button onClick={()=>num=10}>点击+1</button>
//         </div>
//     )
// }

// class Count extends Component{
//     constructor(){
//         super();
//         this.state = {
//             num: 0
//         }
//     };
//     add=()=>{
//     //let obj=Object.assign({num:0},{num:this.state.num+1},{num:this.state.num+1})
//             this.setState({
//                 num:this.state.num+1
//             })
//     }
//     render(){
//         return(
//             <div>
//                 <p>{this.state.num}</p>
//                 <button onClick={this.add}>点击+1</button>
//             </div>
//         )
//     }
// }



