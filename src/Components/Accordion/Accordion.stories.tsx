import Accordion from "./Accordion"
import {AccordionPropsType} from "./Accordion"
import {Meta} from "@storybook/react";
import {useState} from "react";

const meta: Meta<AccordionPropsType> = {
    title: 'Example/Accordion',
    component: Accordion,
    argTypes: {
        color: {
            control: 'color'
        }
    },
    tags: ['autodocs'],
};

export default meta;

const users = [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Misha'},
        {id: 3, name: 'Grisha'},
        {id: 4, name: 'Natasha'},
        {id: 5, name: 'Katie'},
    ];

export const DefaultAccordion = (args: AccordionPropsType) => {
    return <Accordion {...args} newTitle={() => {} } />
};

DefaultAccordion.args = {
    title: 'Controlled Accordion',
    collapsed: false,
    items: users
};

export const ChangeableAccordion = (args: AccordionPropsType) => {
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    const [title, setTitle] = useState<string>('Controlled Accordion');
    return <Accordion {...args} title={title} collapsed={accordionCollapsed} callback={() => setAccordionCollapsed(!accordionCollapsed)} newTitle={setTitle} />
};

ChangeableAccordion.args = { items: users };