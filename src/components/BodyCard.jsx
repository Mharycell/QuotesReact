import React from 'react';
import quotes from "../quotes.json"
import "../components/quoteBox.css"

const BodyCard = ({colors, randomIndex, changeQuote, arreglo}) => {
    return (
        <>
            <h1>
            <i className="fa-solid fa-quote-left"></i> { }
            {quotes[randomIndex].author}
            </h1>
             <h2> 
             {quotes[randomIndex].quote}
            </h2>
            <button onClick={changeQuote} style={{background:arreglo[colors]}}><i class="fa-solid fa-angle-right"></i></button>
        </>
    );
};

export default BodyCard;