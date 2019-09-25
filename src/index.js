// 默认index.js 是入口文件。约定大于配置

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.svg';

import Login from './login';
import './login.css';
import { Header, App, Footer } from './App';


class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loginStatus: false };
        this.user = { name: "", familyName: "" };
        this.loginStatusChange = this.loginStatusChange.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    loginStatusChange(params) {
        if (params.success === true) {
            this.user.name = params.user.name;
            this.user.familyName = params.user.familyName;

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
                    <Header handleLogoutClick={this.handleLogoutClick} user={this.user} />
                    <App user={this.user} />
                    <Footer />
                </div>
            )
        } else {
            return (
                <div className="demo">
                    <div className="login">
                        <div>
                            <img src={logo} className="App-logo" alt="logo" />
                        </div>
                        <Login onLoginStatusChange={this.loginStatusChange} />
                    </div>
                </div>
            )
        }
    }
}

ReactDOM.render(<Page />, document.getElementById('root'));