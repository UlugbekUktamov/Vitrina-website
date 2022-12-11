import React from 'react'
import GoodListItem from './GoodListItem'

export default function GoodListItems(props) {
    const { goods = [], addToBasket } = props

    if (!goods.length) {
        return <h3>Nothing found!</h3>
    }

    return (
        <div className='cards'>
            {
                goods.map(good => (
                    <GoodListItem key={good.id} {...good} addToBasket={addToBasket} />
                ))
            }
        </div>
    )
}
