import React, { Component } from 'react'
// import store from '../store';
// import {DEL_ITEM} from '../actions/actionTypes'
import  {delItem} from '../actions/actionCreators'
//不是consumer
import {connect} from 'react-redux';
//   class Todoing extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             todos:this.props.todos
//         }
//     }
//     componentDidMount()
//     {
//        console.log(this.props)
//         // this.subid=store.subscribe(()=>{
//         //     this.setState({
//         //         todos:store.getState().todo
//         //     })
//         // })
//     }
//     componentWillUnmount(){
//         this.subid();
       
//     }
//     // delItem=(e)=>{
    //     store.dispatch({type:DEL_ITEM,index:e})
    // }
//     delItem=(e)=>{
//         this.props.dispatch(delItem(e))
//     }
//     render() {
//         console.log(store)
//         return (
//            <ul>
//                {
//                    this.props.todos.map((item,idx)=>(
//                         <li key={item,idx}>{item}----<button onClick={()=>this.delItem(idx)}>删除</button></li>
//                    ))
//                }
//            </ul>
//         )
//     }
// }



function  Todoing({dispatch,todos}) {
    let del = (index)=>{
        dispatch(delItem(index))
    }
    return (
                   <ul>
                       {
                           todos.map((item,idx)=>(
                                <li key={item,idx}>{item}----<button onClick={()=>del(idx)}>删除</button></li>
                           ))
                       }
                   </ul>
                )
}
let mapStateToProps=(state)=>{
  return{
    todos: state.todo
  }
}
export default connect(mapStateToProps)(Todoing)