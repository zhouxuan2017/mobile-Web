import React, { Component } from 'react'
import { isNode } from '@babel/types'
import store from '../store'
// import{CHANGE_VALUE ,ADD_ITEM} from '../actions/actionTypes';
import {addItem,changevalue} from'../actions/actionCreators';

export default class Todoinput extends Component {
    constructor(){
        super();
        this.state={
              inputValue:store.getState().value
        }
    }
    add=(e)=>{
        if(e.keyCode===13){
            store.dispatch(
                // {type:ADD_ITEM,value:e.target.value}
                addItem(e.target.value)
                )
        }
    }
    hangleChange=(e)=>{
        store.dispatch(
            // type:ADD_ITEM,value:e.target.value
            addItem(e.target.value)
        )
        // this.setState({
        //     inputValue:e.target.value
        // })
    }
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({
                inputValue:store.getState().inputChange
            })
        })
    }
    render() {
        return (
            <div>
                <input onChange={this.hangleChange} type='text' value={this.state.inputValue}></input>
            </div>
        )
    }
}
