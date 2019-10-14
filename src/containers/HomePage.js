import React from 'react';
import { connect } from 'react-redux'

import Header from '../components/home/Header';
import Footer from '../components/home/Footer';
import DevicesList from '../components/home/DevicesList';
import { Dashboard } from '../components/home/Dashboard';
import { userLogout } from '../redux/actions/user_actions'

import 'element-theme-default';
import 'element-theme-default/lib/index.css';
import 'element-theme-default/lib/carousel.css';
import 'element-theme-default/lib/carousel-item.css';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.handleChooseDevice = this.handleChooseDevice.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    shouldComponentUpdate() {
        if (this.props.user === null || this.props.user.name === "") {
            this.props.history.replace('/');
        }
        return false;
    }
    componentWillMount() {
        if (this.props.user === null || this.props.user.name === "") {
            this.props.history.replace('/');
        }
    }
    componentDidMount() {
        console.log("query devices list data");
        console.log("query dashboard data");
        //TODO: query data
    }

    render() {
        console.log('in render');
        return (
            <div className="App">
                <Header user={this.props.user} handleLogoutClick={this.handleLogoutClick} />
                <div className="main_container">
                    <DevicesList chooseDevice={this.handleChooseDevice}></DevicesList>
                    <Dashboard></Dashboard>
                </div>
                <Footer></Footer>
            </div>
        );
    }

    handleChooseDevice(deviceId) {
        // this.props.history.push({
        //     pathname: '/device',
        //     state: {
        //         id: deviceId
        //     }
        // });
        this.props.history.push('#/device/' + deviceId);
    }
    handleLogoutClick() {
        //this.props.history.replace('/');
        console.log("logout success");
        this.props.Logout();
    }
}

var mapStateToProps = (state) => {
    console.log(JSON.stringify(state.user));
    return {
        user: state.user.get("userInfo")
    }
}
var mapDispatchToProps = (dispatch) => {
    return {
        Logout: () => dispatch(userLogout()),
    }
}

HomePage = connect(mapStateToProps, mapDispatchToProps)(HomePage)
export default HomePage;