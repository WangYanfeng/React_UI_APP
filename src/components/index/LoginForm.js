import React from 'react';
import './loginForm.css';

function LoginFormHeader(props) {
    return (
        <div className="cont">
            <div className="demo">
                <div className="login">
                    <div className="login_logo">
                        <img src="/image/trend_logo.png" alt="logo" />
                    </div>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

function LoginRow(props) {
    return (
        <div className="login__row">
            <svg className={props.svg_class} viewBox="0 0 20 20">
                <path className="svg-icon-path" d={props.svg_d}></path>
            </svg>
            {props.children}
        </div>
    )
}

function ErrorMsg(props) {
    return (
        <div className="container">
            {
                props.errorMsg &&
                <div className="flash-error">
                    <span>{props.errorMsg}</span>
                </div>
            }
        </div>
    )
}

//受控组件
//非受控组件 <input type="password" ref={(pwd) => this.password = pwd} name="password" />   ==>    this.password.value
class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "", password: "" };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePwd = this.handleChangePwd.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }

    handleChangeName(event) {
        this.setState({ name: event.target.value });
    }
    handleChangePwd(event) {
        this.setState({ password: event.target.value });
    }
    handleLoginClick() {
        this.props.handleLoginClick(this.state.name, this.state.password);
    }
    render() {
        return (
            <LoginFormHeader>
                <div className="login__form">
                    <form autoComplete="off">
                        <LoginRow svg_class="login__icon name" svg_d="M0,20 a10,8 0 0,1 20,0z M10,0 a4,4 0 0,1 0,8 a4,4 0 0,1 0,-8">
                            <input type="text" className="login__input name" placeholder="Username" value={this.state.name} name="name" onChange={this.handleChangeName} />
                        </LoginRow>
                        <LoginRow svg_class="login__icon pass svg-icon" svg_d="M0,20 20,20 20,8 0,8z M10,13 10,16z M4,8 a6,8 0 0,1 12,0">
                            <input type="password" className="login__input pass" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChangePwd} />
                        </LoginRow>
                        <ErrorMsg errorMsg={this.props.errorMsg} />
                        <div>
                            <input type="button" className="login__submit" value="Log In" onClick={this.handleLoginClick} />
                        </div>
                        <p className="login__signup">Don't have an account? &nbsp;<a href="#">Provition Company</a></p>
                    </form>
                </div>
            </LoginFormHeader >
        )
    }
}

export default LoginForm