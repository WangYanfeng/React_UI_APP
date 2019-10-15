import React from 'react';
import { Layout } from 'element-react';
import { connect } from 'react-redux'

import Board from './Board';
import Policy from './Policy';
import Header from '../components/home/Header';
import Footer from '../components/home/Footer';
import MenuBar from '../components/device/MenuBar';
import { userLogout } from '../redux/actions/user_actions'

import 'element-theme-default';
import 'element-theme-default/lib/index.css';
import 'element-theme-default/lib/carousel.css';
import 'element-theme-default/lib/carousel-item.css';

class DevicePage extends React.Component {
    constructor(props) {
        super(props);
        this.showHomePage = this.showHomePage.bind(this);
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
        console.log("query device data");
        //TODO: query data
    }

    render() {
        return (
            <div>
                <Header user={this.props.user} handleLogoutClick={this.handleLogoutClick} />
                <div className="main_container">
                    <Layout.Row>
                        <Layout.Col span="4">
                            <MenuBar></MenuBar>
                        </Layout.Col>
                        <Layout.Col span="15">
                            <Board showHomePage={this.showHomePage}></Board>
                        </Layout.Col>
                        <Layout.Col span="5">
                            <Policy></Policy>
                        </Layout.Col>
                    </Layout.Row>
                </div>
                <Footer></Footer>
            </div>
        )
    }

    showHomePage() {
        //this.props.history.goBack();
        this.props.history.push('/home');
    }
    handleLogoutClick() {
        this.props.Logout();
    }
}

function mapStateToProps(state) {
    return {
        user: state.user.get("userInfo")
    }
}

function mapDispatchToProps(dispatch) {
    return {
        Logout: () => dispatch(userLogout()),
    }
}

DevicePage = connect(mapStateToProps, mapDispatchToProps)(DevicePage);
export default DevicePage;