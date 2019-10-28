React项目实战

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# 简介
#### React
1. 默认index.js 是入口文件。约定大于配置
2. 组件、受控组件、非受控组件
3. Props、设置状态更新
4. 生命周期
5. 状态提升
6. 组合
### react-router-dom
1. 标签跳转，函数跳转
2. url传参，隐式传参
3. goBack: this.props.history.goBack();
### Redux [Learn Page](https://redux.js.org/introduction/getting-started)
1. “展示组件”与“容器组件”分离
2. redux: 分为store + action + reducer。 store通过dispatch()调用reducer处理action, 通过type处理并返回state。
3. react-redux: 简化react使用redux。
   connect() 把指定的state和指定的action与React组件连接起来。
   \<Provider/> 把state传给它的所有子组件。
4. redux-persist redux的state数据必须保存到localStorage或sessionStorage，否则刷新页面后会丢失。redux-persist可以将store中的数据缓存到浏览器的sessionStorage或者localStorage中
5. 
### element-react
### react-chartjs chart.js
1. [GIT doc](https://github.com/chartjs/Chart.js/tree/v1.1.1)
### Webpack
1. 是打包工具
### babel
1. 是JS编译器，用来将最新的JS语法转化为ES5语法。babel还可以转换JSX语法。
2. babel只转换语法，babel-pilofill可以转换api


# Available Scripts
In the project directory, you can run: <br/>
`npm start`: Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.<br/>
`npm test`: Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.<br/>
`npm run build`: Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.<br/>
`npm run eject` **Note: this is a one-way operation. Once you `eject`, you can’t go back!**


# Step to create this project
`npm install -g create-react-app`<br/>
`npm install -g webpack webpack-cli `<br/>
`create-react-app new-react-app`<br/>
`npm install react-router-dom --save`<br/>
`npm install webpack-cli --save`<br/>
`npm install redux`<br/>
`npm install react-redux`<br/>
`npm install immutable`<br/>
`npm install element-react --save`<br/>
`npm install element-theme-default --save`<br/>
`npm install --save chart.js@^1.1.1`<br/>
`npm install --save react-chartjs`<br/>
`npm install react-json-tree --save`

