import React from 'react'
import { connect } from 'react-redux'

import BoardDiv from '../components/device/BoardDiv'

class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BoardDiv></BoardDiv>
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

Board = connect(mapStateToProps, mapDispatchToProps)(Board);
export default Board;