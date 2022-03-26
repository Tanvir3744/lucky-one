import React, { useState, useEffect } from 'react';


const BookShop = () => {
    let [book, setBook] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => console.log(data));
    },[]);
    return (
        <div>
            
        </div>
    );
};

export default BookShop;