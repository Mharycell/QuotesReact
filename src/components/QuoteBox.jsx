import { useState } from 'react';
import React from 'react';
import quotes from "../quotes.json"
import BodyCard from "./BodyCard"
import "../components/quoteBox.css"


const QuoteBox = () => {
    const colors = ["#B39C", "#C4FC", "#B0A8", "#FF8066", "#4E8397", "#00896F", "#3596B5", "#04004A", "#BE93"];

    const randomIndex = Math.floor(Math.random()* quotes.length);
    
    const [index, setIndex] = useState(randomIndex);
    
    const changeQuote = () => {
      const randomIndex = Math.floor(Math.random()* quotes.length);
      setIndex(randomIndex);
    
    }
        
    const randomColor = Math.floor(Math.random() * colors.length)
    document.body.style = `background: ${colors[randomColor]}; color: ${colors[randomColor]}`

    return (
        
        <div className='card'>
            <BodyCard 
            colors ={randomColor} 
            randomIndex={index} 
            changeQuote={changeQuote}
            arreglo={colors}
            />
        </div>
                
        
    )
}

export default QuoteBox;