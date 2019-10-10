import React from 'react';
import LoginForm from '../components/index/LoginForm';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { errorMsg: "" };
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }

    handleLoginClick(name, password) {
        //TODO: ajax request to backend
        /*
        $.ajax()
        */
        if (false) {
            //if (name !== "Edwin" || password !== "111111") {
            this.setState({ errorMsg: "Incorrect username/password !" });
        } else {
            console.log("login ajax success");
            let result = {
                success: true,
                user: {
                    name: name,
                }
            }
            this.props.loginStatusChange(result);
        }
    }

    render() {
        return (
            <LoginForm handleLoginClick={this.handleLoginClick} errorMsg={this.state.errorMsg}></LoginForm >
        )
    }
}

export default Login