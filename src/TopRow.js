import React from 'react';
import Home from './Home';
import Away from './Away';

const TopRow = (props) => {
    return (
        <div>
            <div className="topRow">
                    <Home team="LIONS" score={props.home} />
                    <div className="timer">00:03</div>
                    <Away team="TIGERS" score={props.away} />
                </div>
        </div>
    );
};

export default TopRow;