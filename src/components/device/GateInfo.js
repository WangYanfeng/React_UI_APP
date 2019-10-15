import React from 'react'

import { Layout, Card, Button, Tabs } from 'element-react'

function CMDPanel(props) {
    return (
        <Card className="panel_card" header={
            <div className="clearfix">
                <span style={{ "lineHeight": "30px" }}>Push Command Pannel</span>
            </div>
        }
        >
            <Layout.Row>
                <Layout.Col span={6} offset={0}>
                    <Card bodyStyle={{ padding: 0 }}>
                        <div style={{ padding: 14 }}>
                            <span>Logs/Events</span>
                            <div>
                                <Button type="text" className="button">Edit</Button>
                            </div>
                            <div>
                                <span style={{ "float": "right", "marginBottom": "20px" }}>
                                    <Button type="primary">Push CMD</Button>
                                </span>
                            </div>
                        </div>
                    </Card>
                </Layout.Col>
                <Layout.Col span={6} offset={2}>
                    <Card bodyStyle={{ padding: 0 }}>
                        <div style={{ padding: 14 }}>
                            <span>Ping</span>
                            <div>
                                <Button type="text" className="button">Edit</Button>
                            </div>
                            <div>
                                <span style={{ "float": "right", "marginBottom": "20px" }}>
                                    <Button type="primary">Push CMD</Button>
                                </span>
                            </div>
                        </div>
                    </Card>
                </Layout.Col>
                <Layout.Col span={6} offset={2}>
                    <Card bodyStyle={{ padding: 0 }}>
                        <div style={{ padding: 14 }}>
                            <span>Traceroute</span>
                            <div>
                                <Button type="text" className="button">Edit</Button>
                            </div>
                            <div>
                                <span style={{ "float": "right", "marginBottom": "20px" }}>
                                    <Button type="primary">Push CMD</Button>
                                </span>
                            </div>
                        </div>
                    </Card>
                </Layout.Col>
            </Layout.Row>
        </Card>
    );
}

function InfoPanel(props) {
    return (
        <div className="panel_div">
            <Tabs type="card" value="1">
                <Tabs.Pane label="General Information" name="1">
                    <div className="legendDiv">
                        <span className="legendKey">Display name:</span>
                        <span>edwin_test</span>
                    </div>
                    <div className="legendDiv">
                        <span className="legendKey">Status:</span>
                        <span>Online</span>
                    </div>
                </Tabs.Pane>
                <Tabs.Pane label="Network Setting" name="2">
                    <div className="legendDiv">
                        <span className="legendKey">Deployment mode:</span>
                        <span>Bridge mode</span>
                    </div>
                    <div className="legendDiv">
                        <span className="legendKey">Host name:</span>
                        <span>localhost</span>
                    </div>
                </Tabs.Pane>
                <Tabs.Pane label="Hardware and Registration" name="3">
                    <div className="legendDiv">
                        <span className="legendKey">Model:</span>
                        <span>CloudEdge 100</span>
                    </div>
                    <div className="legendDiv">
                        <span className="legendKey">Serial number:</span>
                        <span>BPYB-AWRY-BFBF</span>
                    </div>
                </Tabs.Pane>
            </Tabs>
        </div>
    );
}
function GateInfo(props) {
    return (
        <div>
            <InfoPanel></InfoPanel>
            <CMDPanel></CMDPanel>
        </div>
    );
}

export default GateInfo;