import React from 'react';
import s from './OnOff.module.css'

type OnOffPropsType = {
    on: boolean
    callback: (value: boolean) => void
}

const OnOff = (props: OnOffPropsType) => {

    const buttonOn = s.button + ' ' + (props.on ? s.on : ' ');
    const buttonOff = s.button + ' ' + (props.on ? ' ' : s.off);
    const circleClass = s.circle + ' ' + (props.on ? s.on : s.off);

    return (
        <div className={s.container}>
            <h3>Controlled OnOff</h3>
            <div className={buttonOn} onClick={ () => {props.callback(true)} }>On</div>
            <div className={buttonOff} onClick={ () => {props.callback(false)} }>Off</div>
            <div className={circleClass}></div>
        </div>
    )
};

export default OnOff;