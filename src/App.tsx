import React, {useState} from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import Rating, {RatingValue} from "./Components/Rating/Rating";
import UncontrolledOnOff from "./Components/OnOff/UncontrolledOnOff";
import UncontrolledRating from "./Components/Rating/UncontrolledRating";
import UncontrolledAccordion from "./Components/Accordion/UncontrolledAccordion";
import OnOff from "./Components/OnOff/OnOff";

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValue>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    const [switchOn, setSwitchOn] = useState<boolean>(false);
    const [title, setTitle] = useState<string>('Controlled Accordion');
    const items = [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Misha'},
        {id: 3, name: 'Grisha'},
        {id: 4, name: 'Natasha'},
        {id: 5, name: 'Katie'},
    ]

    return (
        <div className="App">
            <Accordion
                title={title} collapsed={accordionCollapsed}
                callback={() => setAccordionCollapsed(!accordionCollapsed)}
                items={items}
                newTitle={setTitle}/>
            <UncontrolledAccordion title={"Uncontrolled Accordion"}/>
            <Rating ratingValue={ratingValue} onClick={setRatingValue}/>
            <UncontrolledRating/>
            <OnOff callback={setSwitchOn} on={switchOn}/>
            <UncontrolledOnOff/>
        </div>
    );
}

export default App;
