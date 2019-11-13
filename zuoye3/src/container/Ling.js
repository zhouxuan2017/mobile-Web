import React, { Component } from 'react'
import { NavBar, Grid, ListView, Icon, Tabs, List, InputItem, Button, WhiteSpace, WingBlank, TabBar, Carousel } from 'antd-mobile';
const tabs2 = [
    { title: '推荐' },
    { title: '冬季' },
    { title: '小清新' },
    { title: '小户型' },
    { title: '个性色彩' },
    { title: '+' },
];
export default class Ling extends Component {
    constructor() {
        super();
        this.state = {
            data: ['1', '2', '3'],
            imgHeight: 576,
        }
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
    }
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#3fcccb', color: 'white' }}
                    rightContent={[
                        <Icon key="0" type="search" style={{ color: 'white', marginRight: '16px' }} />,
                    ]}
                >灵感</NavBar>
                <Tabs tabs={tabs2}
                    initialPage={0}
                    tabBarUnderlineStyle={{ border: '2px solid #ffdb2c' }}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '560px', backgroundColor: '#fff' }}>
                        <Carousel
                            autoplay={false}
                            infinite
                            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                            afterChange={index => console.log('slide to', index)}
                        >
                            {this.state.data.map(val => (
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '560px', backgroundColor: '#fff' }}>
                                    <div style={{ height: 550, width: '100%' }}>
                                        <div style={{ height: 170, width: '100%', marginTop: 20, float: 'left' }}>
                                            <div style={{ height: 160, width: '42%', marginLeft: 20, float: 'left' }}>
                                                <img src={require('../img/33_03.jpg')} style={{ height: 160, width: '100%' }}></img>
                                            </div>
                                            <div style={{ height: 160, width: '42%', marginLeft: 20, float: 'left' }}>
                                                <img src={require('../img/33_05.jpg')} style={{ height: 160, width: '100%' }}></img>
                                            </div>
                                        </div>
                                        <div style={{ height: 170, width: '100%', marginTop: 20, float: 'left' }}>
                                            <div style={{ height: 160, width: '42%', marginLeft: 20, float: 'left' }}>
                                                <img src={require('../img/55_07.jpg')} style={{ height: 160, width: '100%' }}></img>
                                            </div>
                                            <div style={{ height: 160, width: '42%', backgroundColor: 'blue', marginLeft: 20, float: 'left' }}>
                                                <img src={require('../img/55_08.jpg')} style={{ height: 160, width: '100%' }}></img>
                                            </div>
                                        </div>
                                        <div style={{ height: 170, width: '100%', marginTop: 20, float: 'left' }}>
                                            <div style={{ height: 160, width: '42%', backgroundColor: 'green', marginLeft: 20, float: 'left' }}>
                                                <img src='https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3010250678,193274141&fm=15&gp=0.jpg' style={{ height: 160, width: '100%' }}></img>
                                            </div>
                                            <div style={{ height: 160, width: '42%', marginLeft: 20, float: 'left' }}>
                                                <img src='https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2994809266,1841020797&fm=15&gp=0.jpg' style={{ height: 160, width: '100%' }}></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '560px', backgroundColor: '#fff' }}>
                        <div style={{ height: 550, width: '100%' }}>
                                        <div style={{ height: 170, width: '100%', marginTop: 20, float: 'left' }}>
                                            <div style={{ height: 160, width: '42%', marginLeft: 20, float: 'left' }}>
                                                <img src='https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2869684373,743127439&fm=26&gp=0.jpg' style={{ height: 160, width: '100%' }}></img>
                                            </div>
                                            <div style={{ height: 160, width: '42%', marginLeft: 20, float: 'left' }}>
                                                <img src='https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3706693800,4036855349&fm=26&gp=0.jpg' style={{ height: 160, width: '100%' }}></img>
                                            </div>
                                        </div>
                                        <div style={{ height: 170, width: '100%', marginTop: 20, float: 'left' }}>
                                            <div style={{ height: 160, width: '42%', marginLeft: 20, float: 'left' }}>
                                                <img src='https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1018982136,2568905947&fm=26&gp=0.jpg'style={{ height: 160, width: '100%' }}></img>
                                            </div>
                                            <div style={{ height: 160, width: '42%', backgroundColor: 'blue', marginLeft: 20, float: 'left' }}>
                                                <img src='https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3126870435,1376909150&fm=26&gp=0.jpg' style={{ height: 160, width: '100%' }}></img>
                                            </div>
                                        </div>
                                        <div style={{ height: 170, width: '100%', marginTop: 20, float: 'left' }}>
                                            <div style={{ height: 160, width: '42%', backgroundColor: 'green', marginLeft: 20, float: 'left' }}>
                                                <img src='https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3512457597,3325003699&fm=26&gp=0.jpg' style={{ height: 160, width: '100%' }}></img>
                                            </div>
                                            <div style={{ height: 160, width: '42%', marginLeft: 20, float: 'left' }}>
                                                <img src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2583588083,3380286843&fm=26&gp=0.jpg' style={{ height: 160, width: '100%' }}></img>
                                            </div>
                                        </div>
                                    </div>
                </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '560px', backgroundColor: '#fff' }}>
                    <div style={{ height: 550, width: '100%' }}>
                                        <div style={{ height: 170, width: '100%', marginTop: 20, float: 'left' }}>
                                            <div style={{ height: 160, width: '42%', marginLeft: 20, float: 'left' }}>
                                                <img src='https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1794150692,1788581418&fm=26&gp=0.jpg' style={{ height: 160, width: '100%' }}></img>
                                            </div>
                                            <div style={{ height: 160, width: '42%', marginLeft: 20, float: 'left' }}>
                                                <img src='https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2434469855,2417006531&fm=26&gp=0.jpg' style={{ height: 160, width: '100%' }}></img>
                                            </div>
                                        </div>
                                        <div style={{ height: 170, width: '100%', marginTop: 20, float: 'left' }}>
                                            <div style={{ height: 160, width: '42%', marginLeft: 20, float: 'left' }}>
                                                <img src='https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=202405650,893126985&fm=26&gp=0.jpg'style={{ height: 160, width: '100%' }}></img>
                                            </div>
                                            <div style={{ height: 160, width: '42%', backgroundColor: 'blue', marginLeft: 20, float: 'left' }}>
                                                <img src='https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2079049221,426231452&fm=26&gp=0.jpg' style={{ height: 160, width: '100%' }}></img>
                                            </div>
                                        </div>
                                        <div style={{ height: 170, width: '100%', marginTop: 20, float: 'left' }}>
                                            <div style={{ height: 160, width: '42%', backgroundColor: 'green', marginLeft: 20, float: 'left' }}>
                                                <img src='https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=323960196,644624699&fm=26&gp=0.jpg' style={{ height: 160, width: '100%' }}></img>
                                            </div>
                                            <div style={{ height: 160, width: '42%', marginLeft: 20, float: 'left' }}>
                                                <img src='https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3952589135,2861542356&fm=26&gp=0.jpg' style={{ height: 160, width: '100%' }}></img>
                                            </div>
                                        </div>
                                    </div>
                </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '560px', backgroundColor: '#fff' }}>
                    <div style={{ height: 550, width: '100%' }}>
                                        <div style={{ height: 170, width: '100%', marginTop: 20, float: 'left' }}>
                                            <div style={{ height: 160, width: '42%', marginLeft: 20, float: 'left' }}>
                                                <img src='https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3017848265,287005695&fm=26&gp=0.jpg' style={{ height: 160, width: '100%' }}></img>
                                            </div>
                                            <div style={{ height: 160, width: '42%', marginLeft: 20, float: 'left' }}>
                                                <img src='https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=199781979,3295014574&fm=26&gp=0.jpg' style={{ height: 160, width: '100%' }}></img>
                                            </div>
                                        </div>
                                        <div style={{ height: 170, width: '100%', marginTop: 20, float: 'left' }}>
                                            <div style={{ height: 160, width: '42%', marginLeft: 20, float: 'left' }}>
                                                <img src='https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1892898398,4030216167&fm=26&gp=0.jpg'style={{ height: 160, width: '100%' }}></img>
                                            </div>
                                            <div style={{ height: 160, width: '42%', backgroundColor: 'blue', marginLeft: 20, float: 'left' }}>
                                                <img src='https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3320023621,3430778438&fm=26&gp=0.jpg' style={{ height: 160, width: '100%' }}></img>
                                            </div>
                                        </div>
                                        <div style={{ height: 170, width: '100%', marginTop: 20, float: 'left' }}>
                                            <div style={{ height: 160, width: '42%', backgroundColor: 'green', marginLeft: 20, float: 'left' }}>
                                                <img src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2305158674,2312736756&fm=26&gp=0.jpg' style={{ height: 160, width: '100%' }}></img>
                                            </div>
                                            <div style={{ height: 160, width: '42%', marginLeft: 20, float: 'left' }}>
                                                <img src='https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1972725076,553013319&fm=26&gp=0.jpg' style={{ height: 160, width: '100%' }}></img>
                                            </div>
                                        </div>
                                    </div>
                </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '560px', backgroundColor: '#fff' }}>
                    <div style={{ height: 550, width: '100%' }}>
                                        <div style={{ height: 170, width: '100%', marginTop: 20, float: 'left' }}>
                                            <div style={{ height: 160, width: '42%', marginLeft: 20, float: 'left' }}>
                                                <img src='http://img5.imgtn.bdimg.com/it/u=1807597796,952124775&fm=26&gp=0.jpg' style={{ height: 160, width: '100%' }}></img>

                                            </div>
                                            <div style={{ height: 160, width: '42%', marginLeft: 20, float: 'left' }}>
                                                <img src='http://img2.imgtn.bdimg.com/it/u=3898127951,3918252127&fm=26&gp=0.jpg' style={{ height: 160, width: '100%' }}></img>
                                            </div>
                                        </div>
                                        <div style={{ height: 170, width: '100%', marginTop: 20, float: 'left' }}>
                                            <div style={{ height: 160, width: '42%', marginLeft: 20, float: 'left' }}>
                                                <img src='http://img0.imgtn.bdimg.com/it/u=2399445413,3825399311&fm=26&gp=0.jpg'style={{ height: 160, width: '100%' }}></img>
                                            </div>
                                            <div style={{ height: 160, width: '42%', backgroundColor: 'blue', marginLeft: 20, float: 'left' }}>
                                                <img src='http://img0.imgtn.bdimg.com/it/u=3088661305,2798761713&fm=26&gp=0.jpg' style={{ height: 160, width: '100%' }}></img>
                                            </div>
                                        </div>
                                        <div style={{ height: 170, width: '100%', marginTop: 20, float: 'left' }}>
                                            <div style={{ height: 160, width: '42%', backgroundColor: 'green', marginLeft: 20, float: 'left' }}>
                                                <img src='http://img2.imgtn.bdimg.com/it/u=333844494,4008953604&fm=15&gp=0.jpg' style={{ height: 160, width: '100%' }}></img>
                                            </div>
                                            <div style={{ height: 160, width: '42%', marginLeft: 20, float: 'left' }}>
                                                <img src='http://img4.imgtn.bdimg.com/it/u=2562542953,2493266917&fm=26&gp=0.jpg' style={{ height: 160, width: '100%' }}></img>
                                            </div>
                                        </div>
                                    </div>
                </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '560px', backgroundColor: '#fff' }}>
                       主人，小编没有更多了哎
                </div>
                </Tabs>
            </div>
        )
    }
}
