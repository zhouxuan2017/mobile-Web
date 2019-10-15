import React,{Component,Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// class ShowTime extends Component  直接导出
export  default  class ShowTime extends Component{
    //类  大部分都是方法
    constructor(props){
        super(props);
     this.state={
             time:new Date().toLocaleString()
     }
    //  setInterval(()=>{
    //        this.setState({
    //            time:new Date().toLocaleString()
    //        })
    //  },1000)
    this.handleClick=this.handleClick.bind(this)
    console.log('constructor')
    console.log('construcor',this.props.word)
    }
    componentDidMount(){
        console.log('componentDidMount')
        setTimeout(()=>{
            this.setState({
                time:new Date().toLocaleString()
            })
      },1000)
    }

    shouldComponentUpdate(){
        return true;
    }
    getSnapshotBeforeUpdate(){
        console.log('getSnpshot');
    }
    componentDidUpdate(){
        console.log('didupdate')
    }
    handleClick=(num,e)=>{
        console.log(this);
        console.log(num,e);
        console.log('点击成功');
    }
    divClick(num,e){
        console.log(num,e);
    }
    render(){
        console.log('render')
    //     setTimeout(()=>{
    //         this.setState({
    //             time:new Date().toLocaleString()
    //         })
    //   },1000)
        return(
            // 开头引入了所以可以不用写React.Fragment  直接写Fragment就可以
        <Fragment>
             <div onClick={(ev)=>this.handleClick(1,ev)}>{this.state.time}</div>
             <div onClick={()=>{
                 console.log(1);
             }}>{this.state.time}</div>
            <div onClick={this.divClick.bind(this,333)}>hello{this.props.word}</div>
        </Fragment>
        );
    }

}
//默认导出   default  只能导出一次
//export default ShowTime;

//命名导出   可以导出多个
export {ShowTime};

