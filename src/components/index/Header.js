import React from 'react';
import "./header.css"

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

export default Header;