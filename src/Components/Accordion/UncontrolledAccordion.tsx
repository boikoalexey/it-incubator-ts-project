import React, {useState} from "react";

type AccordionPropsType = {
    title: string
}

function UncontrolledAccordion(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(true)

    return <div>
        <AccordionTitle title={props.title} setCollapsed={ () => {setCollapsed(!collapsed)} } />
        { !collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    setCollapsed: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {

    return <h3 onClick={ () => {props.setCollapsed()} }>{props.title}</h3>

}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default UncontrolledAccordion;