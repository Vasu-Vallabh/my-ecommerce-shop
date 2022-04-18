import {useContext} from "react";
import {CartContext} from  '../../contexts/cart.context';
import ButtonComponent from "../button/button.component";
import './cart-dropdown.styles.scss';
import CartItemComponent from "../cart-item/cart-item.component";
import { useNavigate } from 'react-router-dom';

const CartDropdownComponent = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
               {
                    cartItems.map(item => <CartItemComponent key={`${item.id}`} cartItem={item}/>)
                }
            </div>
            <ButtonComponent buttonType="default" onClick={()=>navigate('/checkout')}>GO TO CHECKOUT</ButtonComponent>
        </div>
    );
};

export default CartDropdownComponent;
