// 默认index.js 是入口文件。约定大于配置

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

import './index.css';
import Login from './containers/login';
import HomePage from './containers/HomePage';
import DevicePage from './containers/DevicePage';

class Index extends React.Component {
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
            this.props.history.push({
                pathname: '/index',
            });
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
                    <HomePage history={this.props.history} handleLogoutClick={this.handleLogoutClick} user={this.user} />
                </div>
            )
        } else {
            return (
                <Login loginStatusChange={this.loginStatusChange} />
            )
        }
    }
}

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/index" component={Index} />
            <Route exact path="/device/:id" component={DevicePage} />
        </Switch>
    </HashRouter>
);

ReactDOM.render(<BasicRoute />, document.getElementById('root'));