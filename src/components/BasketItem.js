export default function BasketItem(props) {
    const { name, price, quantity, removeFromBasket, id, incrementQuantity, decrementQuantity } = props

    return (
        <li className='collection-item'>
            {name} x {quantity} = {price}
            <span className='secondary-content'>
                <div className='waves-effect waves-light btn btnq' onClick={() => incrementQuantity(id)}>
                    <i className='material-icons left'>exposure_plus_1</i>add
                </div>
                <div className='waves-effect waves-light btn btnq' onClick={() => decrementQuantity(id)}>
                    <i className='material-icons left'>exposure_minus_1</i>remove
                </div>
                <i onClick={() => removeFromBasket(id)} className='material-icons basket-delete'>delete_forever</i>
            </span>
        </li>
    )
}