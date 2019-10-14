import React from "react"
import { Carousel } from 'element-react';

import './devicesList.css'

function DevicesList(props) {
    return (
        <div className="devices_carousel">
            <Carousel interval="4000" type="card" height="250px">
                {
                    [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
                        let deviceClass = "";
                        let deviceStatus = "";
                        if (index === 2) {
                            deviceClass = "device_info warning_shadow";
                            deviceStatus = "Offline";
                        } else {
                            deviceClass = "device_info normal_shadow";
                            deviceStatus = "Online";
                        }
                        return (
                            <Carousel.Item key={index} >
                                <div className="carousel_item" onClick={props.chooseDevice.bind(this, item)}>
                                    <div className="device_img">
                                        <div>Device Name {item}</div>
                                        <img src="/image/gateway.png"></img>
                                    </div>
                                    <div className={deviceClass}>
                                        <div className="info_row">
                                            <label className="info_title">Status:</label>
                                            <label>{deviceStatus}</label>
                                        </div>
                                        <div className="info_row">
                                            <label className="info_title">Policy deploy status:</label>
                                            <label>Success</label>
                                        </div>
                                        <div className="info_row">
                                            <label className="info_title">Version:</label>
                                            <label>8.8</label>
                                        </div>
                                        <div className="info_row">
                                            <label className="info_title">End users:</label>
                                            <label>8 users in the last 15 minutes</label>
                                        </div>
                                        <hr />
                                        <div className="info_row">
                                            <label className="info_title">Deploy mode:</label>
                                            <label>Bridge</label>
                                        </div>
                                        <div className="info_row">
                                            <label className="info_title">WAN:</label>
                                            <label>10.206.67.57 / 255.255.254.0</label>
                                        </div>
                                        <div className="info_row">
                                            <label className="info_title">Deploy mode:</label>
                                            <label>Bridge</label>
                                        </div>
                                        <div className="info_row">
                                            <label className="info_title">Interface:</label>
                                            <div className="nic_up" title="">
                                                <span className="nic_label">WAN</span>
                                            </div>
                                            <div className="nic_down" title="">
                                                <span className="nic_label">LAN1</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        </div>
    );
}


export default DevicesList;