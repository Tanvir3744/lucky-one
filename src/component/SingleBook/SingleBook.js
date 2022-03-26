import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { ShoppingBagOutline } from 'heroicons-react';
import './SingleBook.css';
const SingleBook = (props) => {
    let { name, picture, price, author } = props.book;
    let { handleChoose } = props;
    return (
        <div className='col-lg-4 mt-3'>
            <Card className=" shadow border-0 rounded " style={{ width: '16rem' }}>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <small className='price'>Price: ${price}</small> <br />
                        <small className='author'>Author: {author}</small>
                    </Card.Text>
                    <Button onClick={()=> handleChoose(props.book)} className='d-flex align-items-center' variant="primary">Add To Cart <ShoppingBagOutline className='mx-1'></ShoppingBagOutline> </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleBook;