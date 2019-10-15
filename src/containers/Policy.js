import React from 'react'
import { connect } from 'react-redux'
import JSONResult from '../components/device/JSONResult'

class Policy extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <JSONResult result={this.props.policy}></JSONResult>
            </div>
        )
    }
}

var mapStateToProps = (state) => {
    console.log(JSON.stringify(state.policy));
    return {
        policy: state.policy
    }
}
var mapDispatchToProps = (dispatch) => {
    return {
        // Logout: () => dispatch(userLogout()),
    }
}

Policy = connect(mapStateToProps, mapDispatchToProps)(Policy);
export default Policy;