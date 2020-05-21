//TODO: STEP 1 - Import the useState hook.
import React, {useState} from 'react';
import TopRow from './TopRow';
import BottomRow from "./BottomRow";
import Buttons from './Buttons';

const Scoreboard = (props) => {
    //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
    const [timeLeft, setTimeLeft] = useState("14:59");
    const [homeScore, setHomeScore] = useState(0);
    const [awayScore, setAwayScore] = useState(0);
    const [quarter, setQuarter] = useState(1);
    const [down, setDown] = useState(1);
    const [togo, setToGo] = useState(10);
    const [ballon, setBallOn] = useState(40);

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
                <TopRow home={homeScore} timeleft={timeLeft} away={awayScore} />
                <BottomRow quarter={quarter} down={down} togo={togo} ballon={ballon} />
            </section>
            <Buttons incrementScore={updateScore}
                     incrementQuarter={setQuarter}
                     incrementDown={setDown}
                     incrementToGo={setToGo}
                     incrementBallOn={setBallOn}
                     home={homeScore}
                     away={awayScore}
                     quarter={quarter}
                     down={down}
                     togo={togo}
                     ballon={ballon} />
        </div>
    );
};

export default Scoreboard;