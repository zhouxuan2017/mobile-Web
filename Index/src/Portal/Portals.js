import React, { Component } from 'react'
import ReactDOM from 'react-dom';

export default class Portals extends Component {
    cli=()=>{
        console.log('dsfdf');
    }
    render() {
        return (
            ReactDOM.createPortal(
           
                <div>
                    {/* <div>dsndsf</div> */}
                    <div onClick={this.cli}>{this.props.children}</div>
                </div>,
                document.body
             
            )
       
        )
    }
}
