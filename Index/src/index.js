import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {ShowTime} from './ShowTime';
import Todolist from './Todolist/Todolist'
import Request from './Request'
import Parent from './Context/Parent'
import Hoc from './Hoc/Hoc'
import Portals from'./Portal/Portals'
import ParentPortal from './Portal/ParentPortal'
import App from './App'


// var str='hello';
// var ele=<h1>{str}</h1>
//ReactDOM.render(<Request/>,document.getElementById('root'));

//App
import {con} from './Context/Context';
let color='red';
ReactDOM.render(<con.Provider value={color}><App/></con.Provider>,document.getElementById('root'));



//ParentPortal
// import {con} from './Context/Context';
// let color='red';
// ReactDOM.render(<con.Provider value={color}><ParentPortal/></con.Provider>,document.getElementById('root'));


//Portals
// import {con} from './Context/Context';
// let color='red';
// ReactDOM.render(<con.Provider value={color}><Portals/></con.Provider>,document.getElementById('root'));

//Hoc

// import {con} from './Context/Context';
// let color='red';
// ReactDOM.render(<con.Provider value={color}><Hoc/></con.Provider>,document.getElementById('root'));


//Context
////let {Provider,Consumer}=React.createContext();
// import {con} from './Context/Context';
// let color='red';
// ReactDOM.render(<con.Provider value={color}><Parent/></con.Provider>,document.getElementById('root'));


//ReactDOM.render(<Todolist/>,document.getElementById('root'));
//组件交互
//父组件--->子组件：调用时在子组件上添加属性
//在子组件中通过props获取数据
//ReactDOM.render(<ShowTime word="   react"/>,document.getElementById('root'))
//通过函数定义的组件（无生命周期函数）
//当只是渲染结构时
// function Todo(props){
//     var e=<div>he</div>
//     return(
//         <div>
//             {/* <h1>todo</h1> */}
            
//              {/* 条件渲染 */}
//             {props.list.length>=6?<h1>todo</h1>:''}
            
//             {/* 短路操作  */}
//             {props.list.length>=5&&<h1>todo</h1>}
//             <ul>
//                 {/* <li>{props.list}</li> */}
//                 {/*循环渲染*/}
               
//                 {
//                     //map方法生成一个数组   实现元素渲染
//                     props.list.map((item,index)=>{
//                         if(index%2===0){
//                        return <li key={index}>{item}</li>}
//                     })
                    //    props.list.map(
                    //        (item,index)=>index&2===0&&<li key={item}>{item}</li>
                    //    )
//                 }
//             </ul>
//         </div>
//     )
// }
// //var item='hello';
// var item=[1,2,3,4,5];
// ReactDOM.render(<Todo list={item}/>,document.getElementById('root'));



//类定义组件  Compoent是React对象里面的一个属性  有生命周期  比较大 类当中有很多用不到的属性和方法





//函数定义组件   接收单一的props对象，返回一个React元素
//props是只读的，组件名称必须以大写字母开头
/*function Hello(props){
    return <h1>Hello{props.name}</h1>
}*/

//ReactDOM.render(e,document.getElementById('root'));


//react元素创建后不可改变
/*function tick(){

    var e=<div>
           <p>当前时间</p>
           <h1>{new Date().toLocaleString()}</h1></div>;
    ReactDOM.render(e,document.getElementById('root'));
}
tick();
setInterval(tick,1000);*/



//jsx表达式会被react转换成一个对象，类似下面声明的obj对象
//var ele=React.createElement('div',{'id':'box'},'hello',React.createElement('h1',{'id':'h'},'react'))


// var obj={type:'div',props:{
//     id:'box',
//     class:'box-box',
//     children:['hello',{
//         type:'h1',
//         props:{
//             id:'h',
//             class:'h-h',
//             children:['react']
//         }
//     }],
// }}

// var str='<h1>hello</h1>'+'';
// ele.innerHTML=str;


//注意以下性能问题及优化方法
//加载html文件、浏览器解析html生成DOM树
//link加载css文件，解析css对应的规则、和DOM树结合生成（渲染树）render tree、浏览器渲染render tree

//页面回流（重排）：内容改变，大小改变、结构改变。display.width.height.font-size
//页面重绘（把样式（字体颜色、背景颜色等）改一下，整体布局不动）页面回流一定引起页面重绘  页面重绘不一定引起页面回流

//node.offfsetLeft、node.offfsetWidth()等慎用
/*var root=document.getElementById('root');
var width=root.offsetWidth;
setInterval(function(){
    width+=1;
    root.style.width=width+'px';
},100)*/

//回流方式一display.width.height.font-size影响
/*document.body.style.width='100px';
document.body.style.height='100px';
声明一个css的类
.change{
    width:100px;
    height:100px;
}
document.body.className='change';*/


//对节点的操作先用变量代替
//回流方式二
/*console.time('a');
var str='';
for(var i=0;i<1000;i++)
{
    str+='<li>'+i+'<li>';
}
document.body.innerHTML=str;
console.timeEnd('a'); */

//文档碎片的概念  自己声明render函数，实现页面渲染
// function render(obj,container){
//     var {type,props}=obj;
//     //文档碎片
//     var fr=document.createDocumentFragment();
//     document.createDocumentFragment()
//     var ele=document.createElement(type);
//     for(var item in props){
//         if(item==='class'){
//             ele.className=props[item];
//         }else if(item==='children'){
//            for(var i=0;i<props[item].length;i++){
//               if(typeof props[item][i]==='object'){
//                   render(props[item][i],ele);
//               }
//               else{
//                 var txt=document.createTextNode(props[item][i]);
//                 ele.appendChild(txt);
//               }
//            }
//         }else{
//       ele[item]=props[item];
//         }
//     }
//     fr.appendChild(ele);
//     container.appendChild(fr);
// }
// render(obj,document.getElementById('root'));
//var e=<h1>hello</h1>;转换成一个对象
//ReactDOM.render(ele, document.getElementById('root'));

