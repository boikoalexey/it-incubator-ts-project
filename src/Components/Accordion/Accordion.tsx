import React from "react";

export type AccordionPropsType = {
    title: string
    collapsed: boolean
    callback: () => void
    color?: string
    items: {id: number, name: string}[]
    newTitle: (title: string) => void
}

function Accordion(props: AccordionPropsType) {

    return <div>
        <AccordionTitle title={props.title} callback={props.callback} color={props.color}/>
        { !props.collapsed && <AccordionBody items={props.items} newTitle={props.newTitle}/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    callback: () => void
    color?: string
}

function AccordionTitle(props: AccordionTitlePropsType) {

    return <h3 onClick={props.callback} style={{color: props.color ? props.color : 'black'}}>{props.title}</h3>
}

type AccordionBodyPropsType = {
    items: {id: number, name: string}[]
    newTitle: (title: string) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    return <ul>
        {props.items.map( i => <li key={i.id} onClick={() => props.newTitle(i.name)}>{i.name}</li>)}
    </ul>
}

export default Accordion;