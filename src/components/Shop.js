import React, { useEffect, useState } from 'react'
import { toast } from "react-toastify"
import BasketList from './BasketList'
import Cart from './Cart'
import { API_URL, API_KEY } from "./config"
import GoodListItems from './GoodListItems'
import Loader from './Loader'

export default function Shop() {
    const [goods, setGoods] = useState([])
    const [loading, setLoading] = useState(true)
    const [order, setOrder] = useState([])
    const [isBacketShow, setBacketShow] = useState(false)

    const addToBasket = (item) => {
        const itemIndex = order.findIndex(orderItem => orderItem.id === item.id)
        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1
            }
            setOrder([...order, newItem])
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                } else {
                    return orderItem;
                }
            })
            setOrder(newOrder)
        }
        toast.success("Goods added to basket successfully!")
    }

    const handleBasketShow = () => {
        setBacketShow(!isBacketShow)
    }

    const removeFromBasket = (itemID) => {
        const newOrder = order.filter(item => item.id !== itemID)
        setOrder(newOrder)
        toast.error("Goods deleted from basket successfully!")
    }

    const incrementQuantity = (itemID) => {
        const newOrder = order.map(el => {
            if (el.id === itemID) {
                const newQuantity = el.quantity + 1
                return {
                    ...el,
                    quantity: newQuantity
                }
            } else {
                return el
            }
        })

        setOrder(newOrder)
    }

    const decrementQuantity = (itemID) => {
        const newOrder = order.map(el => {
            if (el.id === itemID) {
                const newQuantity = el.quantity - 1
                return {
                    ...el,
                    quantity: newQuantity >= 0 ? newQuantity : 0
                }
            } else {
                return el
            }
        })

        setOrder(newOrder)
    }


    useEffect(() => {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY
            }
        })
            .then(res => res.json())
            .then(data => {
                setGoods(() => data.featured && data.featured)
                setLoading(false);
            });
    }, [])

    return (
        <div className='container content'>
            <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
            {
                loading ? <Loader /> : <GoodListItems goods={goods} addToBasket={addToBasket} />
            }
            {
                isBacketShow && <BasketList
                    order={order}
                    handleBasketShow={handleBasketShow}
                    removeFromBasket={removeFromBasket}
                    decrementQuantity={decrementQuantity}
                    incrementQuantity={incrementQuantity} />
            }
        </div>
    )
}
