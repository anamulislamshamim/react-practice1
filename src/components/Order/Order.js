import React from 'react';
import "./Order.css";
const Order = ({ food }) => {
    // console.log('My ',food);
    return (
        <div className='order'>
            <div style={{position:"sticky",top:"30px"}}>
                <h3>Ordered Foods</h3>
                {
                    food.map(singlefood => {
                        return (
                            <p key={ Math.random()}>{singlefood}</p>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Order;