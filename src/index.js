// 默认index.js 是入口文件。约定大于配置

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/lib/integration/react';

import store from './redux/store'
import LoginPage from './containers/LoginPage';
import HomePage from './containers/HomePage';
import DevicePage from './containers/DevicePage';
import './index.css';

const BasicRoute = () => (
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route exact path="/" component={LoginPage} />
                <Route exact path="/home" component={HomePage} />
                <Route exact path="/device/:id" component={DevicePage} />
            </Switch>
        </HashRouter>
    </Provider>
);

ReactDOM.render(<BasicRoute />, document.getElementById('root'));