import React, {useState} from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import Rating, {RatingValue} from "./Components/Rating/Rating";
import UncontrolledOnOff from "./Components/OnOff/UncontrolledOnOff";
import UncontrolledRating from "./Components/Rating/UncontrolledRating";
import UncontrolledAccordion from "./Components/Accordion/UncontrolledAccordion";
import OnOff from "./Components/OnOff/OnOff";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValue>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [switchOn, setSwitchOn] = useState<boolean>(false);

    return (
        <div className="App">
            <Accordion titleValue={"Controlled Accordion"} collapsed={accordionCollapsed} callback={() => setAccordionCollapsed(!accordionCollapsed)} />
            <UncontrolledAccordion titleValue={"Uncontrolled Accordion"}/>
            <Rating ratingValue={ratingValue} onClick={setRatingValue}/>
            <UncontrolledRating/>
            <OnOff callback={setSwitchOn} on={switchOn}/>
            <UncontrolledOnOff />
        </div>
    );
}

export default App;
