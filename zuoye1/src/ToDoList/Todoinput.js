import React, { Component } from 'react'

export default class Todoinput extends Component {
    constructor() {
        super();
        this.state = {
            n1: '',
        }
    }
    handleInput = (e) => {
        if (e.keyCode === 13) {
            this.props.addTodo(e.target.value);
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value //属性值变量加中括号   对象中括号里面加变量
        })
    }
    render() {
        return (
            <div id='form'>
                <div id='form1'>
                    <label htmlFor='inp'>ToDoList</label>
                    <input id='input' name='n1' placeholder='添加ToDo' type='text' onChange={(e) => this.handleChange(e)} onKeyDown={(e) => this.handleInput(e)} value={this.state.n1}></input>
                </div>
            </div>
        )
    }
}
