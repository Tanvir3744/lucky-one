import React from 'react';
import {TrashOutline} from 'heroicons-react'
import './Sugestion.css'
const Sugestion = (props) => {
    const { name, picture } = props.prod;
    return (
        <div className='d-flex align-items-center '>
                <img className=" side-img  border-2 rounded-circle " src={picture} alt="" />
            <div className="book-name">
                <h6>{name}</h6>
            </div>
            <div className="button d-flex align-items-center bg-warning ms-2 shadow p-2 rounded-circle">
                <TrashOutline></TrashOutline>
            </div>
        </div>
    );
};

export default Sugestion;