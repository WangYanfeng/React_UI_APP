import React from 'react';

import Container from './Container';
import Header from './components/index/Header';
import Footer from './components/index/Footer';
import './devices.css';

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


export default App;