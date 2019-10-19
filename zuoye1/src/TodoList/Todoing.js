import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Icon} from 'antd';

export default class Todoing extends Component {
    render() {
        return (
            <div id='root1' style={{ height: '900px' }}>
                
                <div style={{ height: '60px', width: '650px' }}>
                    <h2>正在进行</h2><span>{this.props.todo.length===0?0:this.props.todo.length}</span>

                </div>
                <ol className="demo-box" >
                    {this.props.todo.map((item, idx) =>
                        <div style={{ width: '600px', height: '35px', backgroundColor: 'white', marginTop: '15px', borderLeft: '5px 	#008080 solid' }} >
                            <li key={idx}><input type='checkbox'  draggable='true' name='' id='check' onChange={() => this.props.delTodo(idx)} />{item}
                            </li>
                            <Icon type="smile" style={{float:'right',marginTop:'-25px',marginRight:'60px'}}></Icon>
                            <button onClick={()=>this.props.del(idx)} style={{float:'right',marginTop:'-30px'}}>删除</button>
                        </div>
                    )}
                </ol>
                <div style={{ height: '60px', width: '650px' }}>
                    <h2>已经完成</h2><span>{this.props.todo1.length===0?0:this.props.todo1.length}</span>
                </div>
                <ol className="demo-box">
                    {this.props.todo1.map((item1, idx1) =>
                        <div style={{ width: '600px', height: '35px', backgroundColor: '#C0C0C0', marginTop: '15px', borderLeft: '5px 	#999 solid' }}>
                            <li key={idx1}><input type='checkbox' checked name='' id='check' onClick={() => { this.props.addtodo1(idx1) }} />{item1}</li>
                            <Icon type="smile" style={{float:'right',marginTop:'-25px',marginRight:'60px'}}></Icon>
                            <button onClick={()=>this.props.del1(idx1)} style={{float:'right',marginTop:'-30px'}}>删除</button>
                        </div>
                    )}
                </ol>
                <footer>Copyright © 2014 todolist.cn&nbsp;&nbsp;
                  <a href="javascript:clear();">clear</a>
                </footer>
            </div>

        )
    }
}
Todoing.propTypes = {
    todo: PropTypes.array,
    todo1: PropTypes.array
}
Todoing.defaultProps = {
    todo: [2, 3, 4],
    todo1: [2],
    a: 100
}
