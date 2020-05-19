import React from 'react';
import Home from './Home';

const TopRow = (props) => {
    return (
        <div>
            <div className="topRow">
                    <Home score={props.home} />
                    <div className="timer">00:03</div>
                    <div className="away">
                        <h2 className="away__name">Tigers</h2>
                        <div className="away__score">{props.away}</div>
                    </div>
                </div>
        </div>
    );
};

export default TopRow;