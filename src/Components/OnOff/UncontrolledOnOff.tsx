import React, {useState} from 'react';
import s from './OnOff.module.css'

const UncontrolledOnOff = () => {

    let [on, setOn] = useState(false);
    const buttonOn = s.button + ' ' + (on ? s.on : ' ');
    const buttonOff = s.button + ' ' + (on ? ' ' : s.off);
    const circleClass = s.circle + ' ' + (on ? s.on : s.off);

    return (
        <div className={s.container}>
            <h3>Uncontrolled OnOff</h3>
            <div className={buttonOn} onClick={() => {setOn(true)}}>On</div>
            <div className={buttonOff} onClick={() => {setOn(false)}}>Off</div>
            <div className={circleClass}></div>
        </div>
    )
};

export default UncontrolledOnOff;