import React from 'react';
import { Card } from 'react-bootstrap';
const ReactWork = () => {
    return (
        <div>
            <Card>
                <h2 className='ms-3'>How ReactJs work</h2>
                <Card.Body>Basically, react js works in a declarative way. React treats our dom as HTML tree. While we working in react js it makes a virtual dom and while we make changes in our browser DOM it compares both. After detecting changes in virtual DOM. It changes our browser DOM also. It calls state lifecycle. React provide JSX instead of HTML while we write code we can assume that we are writing HTML but there isn’t any HTML in javascript . </Card.Body>
            </Card>
        </div>
    );
};

export default ReactWork;