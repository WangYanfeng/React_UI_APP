// 默认index.js 是入口文件。约定大于配置

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Login from './login';
import './login.css';
import App from './App';

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loginStatus: false };
        this.user = { name: "" };
        this.loginStatusChange = this.loginStatusChange.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    loginStatusChange(params) {
        if (params.success === true) {
            this.user.name = params.user.name;
            this.setState({ loginStatus: true });
        }
    }

    handleLogoutClick() {
        console.log("logout success");
        this.setState({ loginStatus: false });
    }

    render() {
        const isLogin = this.state.loginStatus;

        if (isLogin) {
            return (
                <div>
                    <App handleLogoutClick={this.handleLogoutClick} user={this.user} />
                </div>
            )
        } else {
            return (
                <div className="cont">
                    <div className="demo">
                        <div className="login">
                            <div className="login_logo">
                                <img src="trend_logo.png" alt="logo" />
                            </div>
                            <Login onLoginStatusChange={this.loginStatusChange} />
                        </div>
                    </div>
                </div>
            )
        }
    }
}

ReactDOM.render(<Page />, document.getElementById('root'));