import React from "react";
import s from './Rating.module.css'

export type RatingValue = 0 | 1 | 2 | 3 | 4 | 5

export type PropsRatingType = {
    ratingValue: RatingValue
    onClick: (value: RatingValue) => void
}

const Rating = (props: PropsRatingType) => {

    return (
        <div>
            <h3>Controlled Rating</h3>
            <Star selected={props.ratingValue > 0} onClick={props.onClick} value={1}/>
            <Star selected={props.ratingValue > 1} onClick={props.onClick} value={2}/>
            <Star selected={props.ratingValue > 2} onClick={props.onClick} value={3}/>
            <Star selected={props.ratingValue > 3} onClick={props.onClick} value={4}/>
            <Star selected={props.ratingValue > 4} onClick={props.onClick} value={5}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    value: RatingValue
    onClick: (value: RatingValue) => void
}

function Star(props: StarPropsType) {

    const boldStar = props.selected ? s.bold : ' '

    return <span className={boldStar} onClick={ () => {props.onClick(props.value)} } >Star </span>
}

export default Rating;