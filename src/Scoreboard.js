//TODO: STEP 1 - Import the useState hook.
import React, {useState} from 'react';
import TopRow from './TopRow';
import BottomRow from "./BottomRow";
import Buttons from './Buttons';

const Scoreboard = (props) => {
    //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
    const [homeScore, setHomeScore] = useState(0);
    const [awayScore, setAwayScore] = useState(0);

    // const teams = {
    //     "LIONS": {
    //         "type": "home",
    //         "score": homeScore
    //     },
    //     "TIGERS": {
    //         "type": "away",
    //         "score": awayScore
    //     }
    // };

    function updateScore(team, amount){
        if(team === "LIONS"){
            setHomeScore(homeScore + amount);
        }
        else{
            setAwayScore(awayScore + amount);
        }
    }

    return (
        <div>
            <section className="scoreboard">
                <TopRow home={homeScore} away={awayScore} />
                <BottomRow />
            </section>
            <Buttons incrementScore={updateScore}
                    home={homeScore}
                    away={awayScore} />
        </div>
    );
};

export default Scoreboard;