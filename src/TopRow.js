import React, {useEffect, useState} from 'react';
import Home from './Home';
import Away from './Away';

const TopRow = (props) => {
    const [time, setTime] = useState(props.timeleft);

    useEffect(() => {
        const timeValues = props.timeleft.split(":");
        let minutes = parseInt(timeValues[0]);
        let seconds = parseInt(timeValues[1]);

        const timer = setInterval(() => {
            let timeString = (seconds < 10 ? '0' + seconds : seconds).toString();
            
            if(seconds > 0){
                seconds -= 1;
            }
            else{
                seconds = 59;

                if(minutes !== 0){
                    minutes -= 1;
                }
            }

            console.log(`${minutes}:${timeString}`);
            setTime(`${minutes}:${seconds}`);
        }, 1000);

        if(minutes === 0){
            clearInterval(timer);
        }
    }, [props.timeleft]);

    return (
        <div>
            <div className="topRow">
                    <Home team="LIONS" score={props.home} />
                    <div className="timer">{time}</div>
                    <Away team="TIGERS" score={props.away} />
                </div>
        </div>
    );
};

export default TopRow;