import React from 'react';

const Away = (props) => {
    return (
        <div>
            <div className="away">
                <h2 className="away__name">{props.team}</h2>
                <div className="away__score">{props.score}</div>
            </div>
        </div>
    )
};

export default Away;