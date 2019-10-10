// 默认index.js 是入口文件。约定大于配置

import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './Devices';
import Login from './containers/login';

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loginStatus: false };
        this.user = { name: "" };
        this.loginStatusChange = this.loginStatusChange.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    // 状态提升
    loginStatusChange(params) {
        if (params.success === true) {
            // TODO: use Redux store save data
            // TODO: should check user email format
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
                <Login loginStatusChange={this.loginStatusChange} />
            )
        }
    }
}

ReactDOM.render(<Page />, document.getElementById('root'));