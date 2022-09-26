/* eslint-disable no-unused-expressions */
import React from 'react';
import Search from '../Search/Search';
import "./Food.css";
const Food = ({ foods, orderHandeler, searchHandeler}) => {
    // const [order, setOrder] = useState('Order');
    
    return (
        <div>
            <Search searchHandeler={ searchHandeler } />
            <div className='food'>
            {
                foods.map(food => {
                    return (
                        <div className='singleFood' key={ food.idMeal }>
                            <img src={ food.strMealThumb } alt="" />
                            <h4>{ food.strMeal }</h4>
                            <p>Category: { food.strCategory }</p>
                            <p>Origin: { food.strArea }</p>
                            <p>Description: { food.strInstructions? food.strInstructions.slice(0,120):"Not available" }</p>
                            <input type='button' className='button' onClick={ () => {
                                orderHandeler(food.strMeal);
                            }} defaultValue='Order'/>
                        </div>
                    )
                })
            }
            </div>
        </div>
    );
};

export default Food;