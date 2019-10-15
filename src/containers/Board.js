import React from 'react'
import { connect } from 'react-redux'

import GateInfo from '../components/device/GateInfo'

class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="board_container">
                <button className="show_home_btn" onClick={this.props.showHomePage}>Home</button>
                <GateInfo></GateInfo>
            </div>
        )
    }
}

var mapStateToProps = (state) => {
    return {
        policy: state.policy
    }
}
var mapDispatchToProps = (dispatch) => {
    return {
        // Logout: () => dispatch(userLogout()),
    }
}

Board = connect(mapStateToProps, mapDispatchToProps)(Board);
export default Board;