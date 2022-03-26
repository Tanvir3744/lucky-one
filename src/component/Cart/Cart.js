import React from 'react';
import Sugestion from '../Sugestion/Sugestion';
import { Button } from 'react-bootstrap'

const Cart = (props) => {
    const { cart } = props;


    return (
        <div>
            <h2 className='text-center'>Choose Books</h2>
            {
                cart.map(prod => <Sugestion key={prod.id} prod={prod} ></Sugestion>)
            }
            
                <Button onClick={() => props.handleRandom(props.cart)} variant="outline-primary" >Choose Book</Button>
                <Button className='px-2 ms-2' onClick={() => props.handleClear()} variant='outline-success'>Choose Again</Button>
            
        </div>
    );
};

export default Cart;