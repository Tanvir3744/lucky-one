import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { ShoppingBagOutline } from 'heroicons-react';
const SingleBook = (props) => {
    let { name, picture, price, author } = props.book;
    return (
        <div className='col-lg-4 mt-3'>
            <Card className=" shadow border-0 rounded " style={{ width: '16rem' }}>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p>Price: ${price}</p>
                        <p>Author: {author}</p>
                    </Card.Text>
                    <Button className='d-flex align-items-center' variant="primary">Add To Cart <ShoppingBagOutline className='mx-1'></ShoppingBagOutline> </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleBook;