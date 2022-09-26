import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import Order from '../Order/Order';
import "./Restaurant.css";  
const Restaurant = () => {
    const [meals, setMeals] = useState([]);
    const [food, setFood] = useState([]);
    const [firstalpha, setFirstalpha] = useState('a')
    const searchHandeler = (searchLetter) => {
        if(!searchLetter){
            alert('Please do not remain empty!');
        }else{

            setFirstalpha(searchLetter);
        }
    };
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${firstalpha}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    },[firstalpha]);
    // let orderedFoods = [...food];
    const orderHandeler = (foodName) => {
        if(food.includes(foodName)){
            alert('This food is already Ordered! Please taste other foods!');
            return;
        }else{

            setFood((prevFood) => [...prevFood, foodName])
        }
    }
    return (
        <div className='restaurant'>
            <Food foods={ meals } orderHandeler={orderHandeler} searchHandeler={ searchHandeler } />
            <Order food={ food }/>
        </div>
    );
};

export default Restaurant;