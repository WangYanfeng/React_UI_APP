import React from 'react';
import './App.css';

import Container from './Container';

function getGreeting(user) {
  return "Welcome, " + user.name;
}

// 创建组件方法1 :Header
function Header(props) {
  //条件渲染
  if (props && Object.keys(props).length !== 0) {
    //创建React元素方法 1
    // let greetingElem = React.createElement(
    //   'a',
    //   {},
    //   'Welcome, ' + getGreeting(props.user) + '!'
    // )
    return (
      <div className="App-header">
        <div className="banner"></div>
        <div className="banner_info">
          <svg className="banner_icon" viewBox="0 0 25 25">
            <path d="M0,20 a10,8 0 0,1 20,0z M10,0 a4,4 0 0,1 0,8 a4,4 0 0,1 0,-8"></path>
          </svg>
          <label className="banner_link">{getGreeting(props.user)}</label>
          <a href="#" className="banner_link" onClick={props.handleLogoutClick}>Log off</a>
        </div>
        {props.children}
      </div>
    )
  } else {
    return <p>Hello, Stranger.</p>;
  }
}

//<img src={logo} className="App-logo" alt="logo" />
function App(props) {
  //创建React元素方法 2. 大括号标记js表达式
  let appElem = (
    <div className="App">
      <Header user={props.user} handleLogoutClick={props.handleLogoutClick} />
      <Container />
      <Footer></Footer>
    </div>
  );

  return appElem;
}

// 创建组件方法2：Clock. 类可以设置局部状态、生命周期钩子
class Clock extends React.Component {
  constructor(props) {
    super(props);
    //不在render()中使用的东西，就不应该放到this.state中
    this.state = { date: new Date() }
  }

  //挂载：DOM加载组件时
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  //卸载：DOM移除组件时
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    //setState()设置状态更新，React会自动调用render()渲染DOM
    //当调用setState()时，React将对象合并到this.state 不是覆盖替换
    //this.state是局部封装。但是可以将this.state作为属性传递给子组件
    this.setState({
      date: new Date()
    })
    /*
    //this.props this.state是异步更新的，所以不能用来计算下一个状态
    this.setState({
      XXXXXX !!!! 错误 !!!! XXXXX
      counter: this.state.counter + this.props.counter,
    });
    //可以使用 setState()接受函数，第一个参数：先前状态。第二个参数：此次更新被应用时的props
    this.setState((preState, props) =>({
      ------ ++++ 正确 ++++ ------
      counter: preState.counter + props.counter,
    }));
    */
  }

  render() {
    return (
      <label>{this.state.date.toLocaleString()}</label>
    );
  }
}

function Footer() {
  return (
    <div className="App-footer">
      <div className="footer_main">
        <p>© 2019 Trend Micro Incorporated. All Rights Reserved.</p>
        <Clock />
      </div>
      <div className="footer_link">
        <a href="#">
          <img src="trend_logo.png" />
        </a>
      </div>
    </div >
  );
}


export default App;