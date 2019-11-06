import React, { Component } from 'react'
import { Link,Route } from 'react-router-dom'
export default class Api extends Component {
    render() {
        return (
            <div>
                <div className='homewrap'>
                <Link to='/all=1'><a >关于 /</a></Link> <Link to='/api'><span>&nbsp;&nbsp;API</span></Link> 
                </div>
                <div className='start1' style={{ backgroundColor: 'white', height: '1750px', paddingLeft: '20px' }}>
                    <p>以下 api 路径均以<a href=' https://cnodejs.org/api/v1'> https://cnodejs.org/api/v1</a> 为前缀</p>
                    <p>update 2019-03-21: 涉及发帖和发评论的接口都已经下线了，太多人为了测试客户端乱发帖了。</p>


                    <h1>主题</h1><hr />
                    <h2>get/topics主题首页</h2><hr />
                    <p>接收get参数</p>
                    <ul>
                        <li>page Number 页数</li>
                        <li>tab String 主题分类。目前有 ask share job good</li>
                        <li>limit Number 每一页的主题数量</li>
                        <li>mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。</li>
                    </ul>
                    <p>示例:  <a href='/api/v1/topics'>/api/v1/topics</a></p>

                    <h2>get /topic/:id 主题详情</h2><hr />
                    <p>接收 get 参数</p>
                    <ul>
                        <li>mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。</li>
                        <li>accesstoken String 当需要知道一个主题是否被特定用户收藏以及对应评论是否被特定用户点赞时，才需要带此<br />参数。会影响返回值中的 is_collect 以及 replies 列表中的 is_uped 值。</li>

                    </ul>
                    <p>示例:  <a href='/api/v1/topic/5433d5e4e737cbe96dcef312'>/api/v1/topic/5433d5e4e737cbe96dcef312</a></p>
                    <h1>主题收藏</h1><hr />
                    <h2>post /topic_collect/collect 收藏主题</h2><hr />
                    <p>接收 post 参数</p>
                    <ul>
                        <li>accesstoken String 用户的 accessToken</li>
                        <li>topic_id String 主题的id</li>

                    </ul>
                    <p>返回值示例</p>
                    <p>{"success :"}true}</p>
                    <h2>post /topic_collect/de_collect 取消主题</h2><hr />
                    <p>接收 post 参数</p>
                    <ul>
                        <li>accesstoken String 用户的 accessToken</li>
                        <li>topic_id String 主题的id</li>

                    </ul>
                    <p>返回值示例</p>
                    <p>success:true</p>
                    <h2>get /topic_collect/:loginname 用户所收藏的主题</h2><hr />
                    <p>示例：<a href='/api/v1/topic_collect/alsotang'>/api/v1/topic_collect/alsotang</a></p>


                    <h1>用户</h1><hr />
                    <h2>get /user/:loginname 用户详情</h2><hr />

                    <p>示例:  <a href='示例：/api/v1/user/alsotang'>示例：/api/v1/user/alsotang</a></p>

                    <h2>post /accesstoken 验证 accessToken 的正确性</h2><hr />
                    <p>接收 post 参数</p>
                    <ul>
                        <li>accesstoken String 用户的 accessToken</li>
                    </ul>
                    <p>如果成功匹配上用户，返回成功信息。否则 403。</p>
                    <p>返回值示例</p>
                    <p>success, true, loginname, req.user.loginname, id, req.user.id, avatar_url, req.user.avatar_url</p>
                    <h1>消息通知</h1><hr />
                    <h2>get /message/count 获取未读消息数</h2><hr />
                    <p>接收 get 参数</p>
                    <ul>
                        <li>accesstoken String </li>
                    </ul>
                    <p>返回值示例</p>
                    <p>data, 3</p>{/* 
                    <h2>get /messages 获取已读和未读消息</h2><hr />
                    <p>接收 get 参数</p>
                    <ul>
                        <li>accesstoken String </li>
                        <li>mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。</li>
                    </ul>
                    <p>返回值示例</p>
                    <p>data, 3</p>
                    <h2>post /message/mark_all 标记全部已读</h2><hr />
                    <p>接收 post参数</p>
                    <ul>
                        <li>accesstoken String </li>
                    </ul>
                    <p>返回值示例</p>
                    <p>success, true, marked_msgs, id, '544ce385aeaeb5931556c6f9'  </p>
                    <h2>post /message/mark_one/:msg_id 标记单个消息为已读</h2><hr />
                    <p>请求示例：<a href='/message/mark_one/58ec7d39da8344a81eee0c14'>/message/mark_one/58ec7d39da8344a81eee0c14</a></p>
                    <ul>
                        <li>accesstoken String </li>
                    </ul>
                    <p>返回值示例</p>
                    <p>success, true, marked_msg_id, "58ec7d39da8344a81eee0c14"} </p>
                    <h1>知识点</h1>
                    <p>1.如何获取 accessToken？ 用户登录后，在设置页面可以看到自己的 accessToken。 建议各移动端应用使用手机扫码的形式登录，验证使用 /accesstoken 接口，登录后长期保存 accessToken。</p> */}
                </div>
            </div>
        )
    }
}
