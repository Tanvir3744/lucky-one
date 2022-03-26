import React, { useState, useEffect } from 'react';
import SingleBook from '../SingleBook/SingleBook';
import { Container, Row, Col } from 'react-bootstrap';
import Cart from '../Cart/Cart';
import RandomBook from '../ShowRandomBook/RandomBook';
import ReactWork from '../HowReactWork/ReactWork';
import HowUseStateWork from '../HowReactWork/HowUseStateWork';
const BookShop = () => {
    let [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);

    /* state  for cart*/
    const [cart, setCart] = useState([])
    const handleChoose = (book) => {
        console.log(book, 'clicked')
        const newCart = [...cart, book]
        setCart(newCart)
    }

    const handleClear = () => {
        setCart([]);
    } 


     /* state for showing random products */
    const [random, setRandom] = useState([]);
    const handleRandom = (book) => {
        let selectNew = [...book, random]
        let randomShow = Math.floor(Math.random() * selectNew.length)
        setRandom(selectNew[randomShow])
        console.log(randomShow)
        console.log('radnomly selected', selectNew[randomShow])
    }

    return (
        <div>
            <Container fluid>
                <Row className='text-center'>
                    <h1 className='text-center'>Random Choose</h1>
                    <RandomBook random ={random}></RandomBook>

                    <Col className='px-3' md={9}>
                        <Row>
                            {
                                books.map(book => <SingleBook key={book.id} book={book} handleChoose={handleChoose}></SingleBook>)
                            }
                        </Row>
                    </Col>
                    <Col md={3} className="bg-light shadow" >
                        <Cart cart={cart} handleRandom={handleRandom} handleClear ={handleClear} ></Cart>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row className='mt-3'>
                    <ReactWork></ReactWork>
                    <HowUseStateWork></HowUseStateWork>
                </Row>
            </Container>
        </div>
    );
};

export default BookShop;