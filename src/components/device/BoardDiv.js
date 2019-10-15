import React from 'react'
import './board.css'

function BoardDiv(props) {
    var board = <div className="board_container">
        <button className="show_home_btn" onClick={props.showHomePage}>Home</button>
        <div className="">
            <p>board</p>
        </div>
    </div>;
    return board;
}

export default BoardDiv;