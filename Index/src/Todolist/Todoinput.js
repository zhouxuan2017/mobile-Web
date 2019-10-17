import React, { Component } from 'react'
//子组件--->父组件传递数据，调用子组件时往子组件传递一个函数
//子组件通过props调用该函数往父组件传递（肯定带参数）


//受控组件和非受控组件

//非受控组件
//代码简单、比较适用于一次性获取表单的值
// export default class Todoinput extends Component{

//     componentDidMount(){
//        // console.log(this.refs);
//        console.log(this.inp.value);
//     }
//     search=()=>{
//         console.log(this.inp.value);
//     }
//     render(){
//         return (<div>
//             <input onChange={this.inp.value} ref={(inp)=>this.inp=inp} type='text'/>
//             {/* <input ref='a' type="text"/> */}
//             <button onClick={this.search}>查询</button>
//         </div>)
//     }
// }






//受控组件：value值被react的状态控制
//可以方便拿到input框的值、实时获取或处理输入的内容
export default class Todoinput extends Component {
    constructor(){
       super();
       this.state={
           n1:0,
           n2:0
       }
    }
    handleInput=(e)=>{
        if(e.keyCode===13){
           this.props.addTodo(e.target.value);
        }
        
    }
    handleChange=(e)=>{
   
        this.setState({
            [e.target.name]:parseInt(e.target.value===''?0:e.target.value) //属性值变量加中括号   对象中括号里面加变量
        })
    }
    render() {
        return (
            <div>
                {/* <input onKeyDown={(e)=>this.handleInput(e)} type='text'/> */}
                <label htmlFor='inp' style={{color:this.state.n1+this.state.n2>10?'red':'green',fontSize:20}}>输入：</label>
                <input id="inp" name="n1" onChange={(e)=>this.handleChange(e)} onKeyDown={(e)=>this.handleInput(e)} value={this.state.n1}></input>+
                <input name="n2" onChange={(e)=>this.handleChange(e)}  onKeyDown={(e)=>this.handleInput(e)} value={this.state.n2}></input>=
                <p>结果：{this.state.n1+this.state.n2}</p>
                
                {/* <p>结果：</p>
                <button>查询</button> */}
            </div>
        )
    }
}
