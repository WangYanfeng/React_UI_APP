import React from 'react';
import { Layout } from 'element-react';

import Sidebar from './components/Sidebar'

import 'element-theme-default';
import 'element-theme-default/lib/index.css';
import 'element-theme-default/lib/carousel-item.css';
import 'element-theme-default/lib/carousel.css';
import { Dashboard } from './components/Dashboard';

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activeDeviceId: "" };
        this.showChooseDevice = this.showChooseDevice.bind(this);
        this.handleChooseDevice = this.handleChooseDevice.bind(this);
    }

    render() {
        if (this.state.activeDeviceId === "") {
            return (
                <div className="main_container">
                    <Dashboard chooseDevice={this.handleChooseDevice}></Dashboard>
                </div>
            )
        } else {
            return (
                <div className="main_container">
                    <Layout.Row gutter="2">
                        <Layout.Col span="4">
                            <Sidebar></Sidebar>
                        </Layout.Col>
                        <Layout.Col span="20">
                            <div className="board_container">
                                <button className="show_device_btn" onClick={this.showChooseDevice}>DEV</button>
                                <div className="">
                                    <p>board</p>
                                </div>
                            </div>
                        </Layout.Col>
                    </Layout.Row>
                </div>
            )
        }
    }

    handleChooseDevice(deviceId, event) {
        console.log(deviceId);
        this.setState({ activeDeviceId: deviceId });
    }
    showChooseDevice() {
        this.setState({ activeDeviceId: "" });
    }

    onClose() {

    }
}


export default Container;