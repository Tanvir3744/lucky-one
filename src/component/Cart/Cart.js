import React from 'react';
import Sugestion from '../Sugestion/Sugestion';

const Cart = (props) => {
    const { cart } = props;

    return (
        <div>
            <h2 className='text-center'>Choose Books</h2>
            {
                cart.map(prod => <Sugestion key={prod.id}  prod={prod} ></Sugestion>)
            }
        </div>
    );
};

export default Cart;