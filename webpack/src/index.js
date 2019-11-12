//初始化：yarn init -y
//安装yarn add webpack webpack-cli -D
//创建webpack.config.js
//yarn add webpack-dev-server -D
//yarn add html-webpack-plugin -D帮生成一个html文件的插件
//下载loader
//yarn add css-loader style-loader -D  解析css
//yarn add less-loader less -D

//yarn add  react react-dom
//yarn add babel-loader@8.0.0-beta.0 @babel/core @babel/preset-env -D
//yarn add @babel/preset-react -D
//yarn add mini-css-extract-plugin -D
//yarn add file-loader -D
//yarn add filemanager-webpack-plugin -D
import './index.css'
import './index.less'
import React from 'react';
import {render}from 'react-dom';

//JSX
let app=<div>
    <h1>hello weeee</h1>
    <img src={require('./imgs/1.jpg')} alt=''></img>
</div>
//let app1=React.createElement('h1',{},'hello ccc')
render(
    app,
    document.getElementById('root')
)
