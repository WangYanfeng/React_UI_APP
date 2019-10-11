import React from 'react';

import Header from '../components/HomePage/Header';
import Footer from '../components/HomePage/Footer';
import DevicesList from '../components/HomePage/DevicesList';
import { Dashboard } from '../components/HomePage/Dashboard';

import './homePage.css';
import 'element-theme-default';
import 'element-theme-default/lib/index.css';
import 'element-theme-default/lib/carousel.css';
import 'element-theme-default/lib/carousel-item.css';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.handleChooseDevice = this.handleChooseDevice.bind(this);
    }

    componentDidMount() {
        console.log("query devices list data");
        console.log("query dashboard data");
        //TODO: query data
    }

    render() {
        return (
            <div className="App">
                <Header user={this.props.user} handleLogoutClick={this.props.handleLogoutClick} />
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
        this.props.history.push('device/' + deviceId);
    }

}


export default HomePage;