import React, {useState} from 'react';
import TopRow from './TopRow';
import BottomRow from "./BottomRow";
import Buttons from './Buttons';

const Scoreboard = () => {
    //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
    const [homeScore, setHomeScore] = useState(0);
    const [awayScore, setAwayScore] = useState(0);

    return (
        <div>
            <section className="scoreboard">
                <TopRow home={homeScore} away={awayScore} />
                <BottomRow />
            </section>
            <Buttons incrementHomeScore={setHomeScore}
                    incrementAwayScore={setAwayScore}
                    home={homeScore}
                    away={awayScore} />
        </div>
    );
};

export default Scoreboard;