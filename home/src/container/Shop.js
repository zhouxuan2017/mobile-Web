import React, { Component } from 'react'
import { NavBar, Grid,SearchBar, ListView, Icon, List, InputItem, Button, WhiteSpace, WingBlank, TabBar, Carousel } from 'antd-mobile';
const arr=[
    {icon:require('../img/5_06.jpg'),text:'桌'},
   {icon:require('../img/5_08.jpg'),text:'床'},
   {icon:require('../img/5_10.jpg'),text:'椅'},
    {icon:require('../img/5_12.jpg'),text:'几'},
    {icon:require('../img/5_14.jpg'),text:'柜'},
    {icon:require('../img/8_21.jpg'),text:'书架'},
    {icon:require('../img/55_23.jpg'),text:'沙发'},
    {icon:require('../img/55_25.jpg'),text:'家居饰品'},
    {icon:require('../img/99_27.jpg'),text:'户外家具'},
    {icon:require('../img/a_28.jpg'),text:'全部分类'},
]
const data =  arr.map((_val, i) => ({
    icon: arr[i].icon,
    text: arr[i].text,
}));
export default class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'blueTab',
            data: [1, 2, 3, 4],
            imgHeight: 176,
        };
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['http://img0.imgtn.bdimg.com/it/u=2833259139,1630081513&fm=26&gp=0.jpg', 'http://img5.imgtn.bdimg.com/it/u=2235513760,1942190569&fm=26&gp=0.jpg', 'http://img2.imgtn.bdimg.com/it/u=1019945468,1270499964&fm=26&gp=0.jpg', 'http://img2.imgtn.bdimg.com/it/u=1569405964,3721078154&fm=26&gp=0.jpg'],

            }); 
        }, 100);
    }
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#3fcccb', color: 'white' }}
                    rightContent={[

                        <div key="0" className='iconfont icongouwuche' style={{ color: 'white', marginRight: '16px' }} />
                    ]}
                >商城</NavBar>
                <Carousel
                    autoplay={true}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    slideWidth='375px'
                >            
                    {this.state.data.map((val, index) => (                 
                       <div style={{position:'relative'}}>
                             <div style={{zIndex:9999,position:'absolute',width:'100%'}}><SearchBar placeholder="Search" maxLength={8} style={{backgroundColor:'#f5e9e2',width:'90%',float:'right'}}/></div>
                            <img
                            key={val}
                            src={this.state.data[index]}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });                       
                            }}
                        />                    
                       </div>      
                        // </a>
                    ))}
                 
                </Carousel>
                <Grid data={data}
      columnNum={5}/>
                <div style={{width:'100%',height:210}}>
                    <div style={{width:'44%',marginLeft:15,height:200,float:'left'}}>
                        <img src={require('../img/7_06.jpg')} style={{width:'100%',height:200}}></img>
                    </div>
                    <div style={{width:'44%',marginLeft:15,height:200,float:'left'}}>
                    <img src={require('../img/55.jpg')} style={{width:'100%',height:200}}></img>
                    </div>
                    <div style={{height:190}}>
                        <img style={{width:'100%',height:190}} src='https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3524021006,2702978246&fm=26&gp=0.jpg'></img>
                    </div>
                </div>
            </div>
        )
    }
}
