import React from 'react';
import Sugestion from '../Sugestion/Sugestion';
import {Button} from 'react-bootstrap'

const Cart = (props) => {
    const { cart } = props;

     /* state for showing random products */
   
    
    return (
        <div>
            <h2 className='text-center'>Choose Books</h2>
            {
                cart.map(prod => <Sugestion key={prod.id}   prod={prod} ></Sugestion>)
            }
            <Button onClick={()=>props.handleRandom(props.cart)} variant ="outline-primary" >Choose Random Book</Button>
            
        </div>
    );
};

export default Cart;