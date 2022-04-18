import './cart-item.styles.scss'

const CartItemComponent = ({cartItem}) => {
    const {name, quantity, imageUrl, price} = cartItem;
    return (
        <div className="cart-item-container">
            <img src={imageUrl} alt={name}/>
            <span className="item-details">
                <span className="name">{name}</span>
                <span>{`${quantity} X ${price}`}</span>
            </span>
        </div>
    )
}

export default CartItemComponent;
