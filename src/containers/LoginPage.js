import React from 'react';
import { connect } from 'react-redux'

import { userLoginSuccess, userLoginFail } from '../redux/actions/user_actions'
import LoginForm from '../components/login/LoginForm';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }

    handleLoginClick(name, password) {
        //TODO: ajax request to backend
        /*
        $.ajax({});
        */
        //if (false) {
        if (name === "" || password === "") {
            let errorMsg = "Incorrect username/password !";
            this.props.LoginFail(errorMsg);
        } else if (name !== "Edwin" || password !== "111111") {
            let errorMsg = "Please input username/password !";
            this.props.LoginFail(errorMsg);
        } else {
            let userInfo = {
                name: name,
            }
            // dispatch(userLoginSuccess(user));
            this.props.LoginSuccess(userInfo);
            this.props.history.push({
                pathname: '/home',
            });
        }
    }

    render() {
        return (
            <LoginForm handleLoginClick={this.handleLoginClick} errorMsg={this.props.errorMsg}></LoginForm >
        )
    }
}

// 告诉store需要哪个state
var mapStateToProps = (state) => {
    console.log(JSON.stringify(state.user));
    return {
        errorMsg: state.user.get("errorMsg")
    }
}
// store会将需要派发的行为告诉reducer
var mapDispatchToProps = (dispatch) => {
    return {
        LoginSuccess: (userInfo) => dispatch(userLoginSuccess(userInfo)),
        LoginFail: (errorMsg) => dispatch(userLoginFail(errorMsg)),
    }
}

// connect把组件和store连接起来。
Login = connect(mapStateToProps, mapDispatchToProps)(Login)
export default Login