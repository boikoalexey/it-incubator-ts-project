import React from 'react';
import './App.css';
import Accordion from "./Components/Accordion";
import Rating from "./Components/Rating";
import OnOff from "./Components/OnOff/OnOff";

function App() {
    return (
        <div className="App">
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <OnOff value={"on"}/>
            <OnOff value={"off"}/>
        </div>
    );
}

export default App;
