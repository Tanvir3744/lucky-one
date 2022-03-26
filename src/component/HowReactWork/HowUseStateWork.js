import React from 'react';
import { Card } from 'react-bootstrap';
const HowUseStateWork = () => {
    return (
        <div>
            <Card className='mt-3'>
                <h2 className='ms-3'>How useState() works?</h2>
                <Card.Body>While we working in a functional component it doesn’t contain any state like class-based component. Without the state, we won’t be able to make changes (interact) to our website.
                    Thats why react provide us useState hook to use state in the functional component. UseState hook store our data in a state variable that allow us to interact with our data.
                </Card.Body>
            </Card>
        </div>
    );
};

export default HowUseStateWork;