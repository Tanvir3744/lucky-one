import React from 'react';
import {Card } from 'react-bootstrap'
const RandomBook = (props) => {
    const { picture, name, price, author } = props.random;
    return (
        <div >
            <Card className='text-center shadow border-0 ' style={{ width: '20rem' }}>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <strong>price : ${price}</strong>
                        <strong>Author : {author}</strong>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default RandomBook;