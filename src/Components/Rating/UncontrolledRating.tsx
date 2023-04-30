import React, {useState} from "react";
import s from './Rating.module.css'

function UncontrolledRating() {

    let [value, setValue] = useState(0);

    return (
        <div>
            <h3>Uncontrolled Rating</h3>
            <Star selected={value > 0} setValue={ () => {setValue (1)} }/>
            <Star selected={value > 1} setValue={ () => {setValue (2)} }/>
            <Star selected={value > 2} setValue={ () => {setValue (3)} }/>
            <Star selected={value > 3} setValue={ () => {setValue (4)} }/>
            <Star selected={value > 4} setValue={ () => {setValue (5)} }/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    setValue: () => void
}

function Star(props: StarPropsType) {

    const boldStar = props.selected ? s.bold : ' '

    return <span className={boldStar} onClick={() => { props.setValue() } }>Star </span>
}

export default UncontrolledRating;