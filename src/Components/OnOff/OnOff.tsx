import React from 'react';
import s from './OnOff.module.css'

type OnOffPropsType = {
    value: string
}

const OnOff = (props: OnOffPropsType) => {
    const buttonOn = s.button + ' ' + (props.value === 'on' ? ' ' + s[props.value] : s.off)
    const buttonOff = s.button + ' ' + (props.value === 'off' ? ' ' + s.on : s.off)
    const circleClass = s.circle + ' ' + (props.value === 'on' ? ' ' + s[props.value] : s.off)
    return (
        <div className={s.container}>
            <button className={buttonOn}>On</button>
            <button className={buttonOff}>Off</button>
            <div className={circleClass}></div>
        </div>
    );
};

export default OnOff;