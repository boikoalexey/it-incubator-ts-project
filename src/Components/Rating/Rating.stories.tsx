import Rating, {RatingValue} from "./Rating"
import {PropsRatingType} from "./Rating"
import {Meta} from "@storybook/react";
import {useState} from "react";

const meta: Meta<PropsRatingType> = {
    title: 'Example/Rating',
    component: Rating,
};

export default meta;

export const DefaultRating = () => {
    const [ratingValue, setRatingValue] = useState<RatingValue>(0)
    return <Rating ratingValue={ratingValue} onClick={setRatingValue}/>
};
