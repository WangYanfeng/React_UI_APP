import React from 'react';
import { Menu } from 'element-react'
import 'element-theme-default'

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { state: "" }
    }

    render() {
        return (
            <div className="menu_container">
                <div className="">
                    <Menu defaultActive="1" className="el-menu-vertical-demo" onOpen={this.onOpen.bind(this)} onClose={this.onClose.bind(this)}>
                        <Menu.Item index="1">Gateway Information</Menu.Item>
                        <Menu.SubMenu index="2" title={<span><i className="el-icon-menu"></i>Gateway Setting</span>}>
                            <Menu.Item index="2-1">Interface</Menu.Item>
                            <Menu.Item index="2-2">Network</Menu.Item>
                            <Menu.ItemGroup title="VPN">
                                <Menu.Item index="2-3">SSL VPN</Menu.Item>
                                <Menu.Item index="2-4">L2TP VPN</Menu.Item>
                                <Menu.Item index="2-5">Site-to-Site VPN</Menu.Item>
                            </Menu.ItemGroup>
                        </Menu.SubMenu>
                        <Menu.SubMenu index="3" title={<span><i className="el-icon-menu"></i>Security Policy</span>}>
                            <Menu.Item index="3-1">Policy Urles</Menu.Item>
                            <Menu.ItemGroup title="Policy Objects">
                                <Menu.Item index="3-2">Policy Routing</Menu.Item>
                                <Menu.Item index="3-3">Routing Table</Menu.Item>
                            </Menu.ItemGroup>
                            <Menu.Item index="4-4">W/B List</Menu.Item>
                            <Menu.Item index="4-5">Gateway Profile</Menu.Item>
                        </Menu.SubMenu>
                        <Menu.SubMenu index="5" title={<span><i className="el-icon-menu"></i>Log Report</span>}>
                            <Menu.ItemGroup title="Policy Objects">
                                <Menu.Item index="5-1">Internet Access</Menu.Item>
                                <Menu.Item index="5-2">Internet Security</Menu.Item>
                            </Menu.ItemGroup>
                            <Menu.Item index="6-3">Report</Menu.Item>
                        </Menu.SubMenu>
                    </Menu>
                </div>
            </div >
        )
    }

    onOpen() {

    }

    onClose() {

    }
}


export default Sidebar;