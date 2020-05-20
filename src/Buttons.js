import React from 'react';

const Buttons = (props) => {
    return(
        <div>
            <section className="buttons">
                <div className="homeButtons">

                    {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
                    <button className="homeButtons__touchdown"
                            onClick={() => props.incrementScore("LIONS", 7)}>Home Touchdown</button>
                    <button className="homeButtons__fieldGoal"
                            onClick={() => props.incrementScore("LIONS", 3)}>Home Field Goal</button>
                </div>
                <div className="awayButtons">
                    <button className="awayButtons__touchdown"
                            onClick={() => props.incrementScore("TIGERS", 7)}>Away Touchdown</button>
                    <button className="awayButtons__fieldGoal"
                            onClick={() => props.incrementScore("TIGERS", 3)}>Away Field Goal</button>
                </div>
                <div className="quarterButton">
                    <button className="quarterButtons_1"
                            onClick={() => props.incrementQuarter(props.quarter + 1)}>Next Quarter</button>
                </div>
            </section>
        </div>
    )
};

export default Buttons;