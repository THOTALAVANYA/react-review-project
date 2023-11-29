import React, { useState } from 'react'
import { reviews } from './data'
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa'
const Review = () => {
    const [index,setIndex]=useState(0)
    const {name,job,image,text}=reviews[index]
    // console.log(reviews)
    const checkPerson=(number)=>{
        if(number > reviews.length -1){
           return 0
        }
       if (number < 0){
           return reviews.length-1
       }
       return number

   }

    const prevPerson=()=>{
        setIndex((index)=>{
            let newIndex =index - 1
            return checkPerson(newIndex)
        })
    }
    const nextPerson=()=>{
        setIndex((index)=>{
            let newIndex =index + 1
            return checkPerson(newIndex)
        })

    }
    const randomPerson=()=>{
       let randomNum= Math.floor(Math.random() * reviews.length)
        console.log(randomNum)
        if (randomNum=== index){
            randomNum =index + 1
        }
        setIndex(checkPerson(randomNum))
    }
  return (
    <article className='review'>
        <div className='img-container'>
            <img src={image} alt={name} className='person-img'/>
            <span className='quote-icon'>
                <FaQuoteRight/>
            </span>
            </div>
                <h4 className='author'>{name}</h4>
                <p className='job'>{job}</p>
                <p className='info'>{text}</p>
                <div className='button-container'>
                <button className='prev-btn' onClick={prevPerson}>
                    <FaChevronLeft/>
                </button>
                <button className='prev-btn' onClick={nextPerson}>
                    <FaChevronRight/>
                </button>
            </div>
            <button className='random-btn' onClick={randomPerson} >Suprise me</button>
    </article>
  )
}

export default Review
