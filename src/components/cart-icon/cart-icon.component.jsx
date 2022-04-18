import {ReactComponent as CartIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";

const CartIconComponent = () => {
    const {isCartOpen,setIsCartOpen, count} = useContext(CartContext);
    const handleCartOpen = () => setIsCartOpen(!isCartOpen);
    return (
        <div className="cart-icon-container" onClick={handleCartOpen}>
            <CartIcon className="shopping-icon"/>
            <span className="item-count">{count}</span>
        </div>
    );
};

export default CartIconComponent;
