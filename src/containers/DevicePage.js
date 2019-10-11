import React from 'react';
import { Layout } from 'element-react';
import Sidebar from '../components/Sidebar';

import Header from '../components/HomePage/Header';
import Footer from '../components/HomePage/Footer';

import './devicePage.css';
import 'element-theme-default';
import 'element-theme-default/lib/index.css';
import 'element-theme-default/lib/carousel.css';
import 'element-theme-default/lib/carousel-item.css';

class DevicePage extends React.Component {
    constructor(props) {
        super(props);
        this.showChooseDevice = this.showChooseDevice.bind(this);
        this.handleChooseDevice = this.handleChooseDevice.bind(this);
    }

    componentDidMount() {
        console.log(this.props.match.params);
    }

    render() {
        let testUser = {
            name: "TEST"
        }
        return (
            <div>
                <Header user={testUser} handleLogoutClick={this.props.handleLogoutClick} />
                <div className="main_container">
                    <Layout.Row gutter="2">
                        <Layout.Col span="4">
                            <Sidebar></Sidebar>
                        </Layout.Col>
                        <Layout.Col span="20">
                            <div className="board_container">
                                <button className="show_device_btn" onClick={this.showChooseDevice}>Index</button>
                                <div className="">
                                    <p>board</p>
                                </div>
                            </div>
                        </Layout.Col>
                    </Layout.Row>
                </div>
                <Footer></Footer>
            </div>
        )
    }

    handleChooseDevice(deviceId) {
        console.log(deviceId);
    }
    showChooseDevice() {
        //this.props.history.goBack();
        this.props.history.push('/index');
    }
}


export default DevicePage;