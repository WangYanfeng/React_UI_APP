import React from "react"

import { Carousel } from 'element-react';


function DevicesList(props) {
    return (
        <div className="devices_carousel">
            <Carousel interval="4000" type="card" height="200px">
                {
                    [1, 2, 3, 4, 5, 6].map((item, index) => {
                        return (
                            <Carousel.Item key={index} >
                                <div className="choose_device" onClick={props.chooseDevice.bind(this, item)}>Device {item}</div>
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        </div>
    );
}


export default DevicesList;