import React from 'react';
import {Card } from 'react-bootstrap'
const RandomBook = (props) => {
    const { picture, name, price, author } = props.random;
    return (
        <div class ="text-center">
            <Card className='text-center  border-0 ' style={{ width: '20rem' }}>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <strong>{price}</strong><br />
                        <strong>{author}</strong>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default RandomBook;