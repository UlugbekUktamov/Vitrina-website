import React from 'react'

export default function GoodListItem(props) {
    const { id, name, description, price, full_background, addToBasket } = props;
    return (
        <div className='card' id={id}>
            <div className='card-image'>
                <img src={full_background} alt={name} />
            </div>
            <div className='card-content'>
                <p className='card-title'>{description}</p>
            </div>
            <div className='card-action'>
                <button className='btn' onClick={() => addToBasket({ id, name, price })}>Buy</button>
                <span style={{ fontSize: "20px" }} className='right'>{price}$</span>
            </div>
        </div>
    )
}
