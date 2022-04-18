import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";
import './product-card.styles.scss'
import ButtonComponent from "../button/button.component";
const ProductCardComponent = ({product}) => {
    const { imageUrl, name, price} = product;
    const {addItemToCart} = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);

    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={name}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{`$${price}`}</span>
            </div>
            <ButtonComponent buttonType='inverted' onClick={addProductToCart}>Add to card</ButtonComponent>
        </div>
    );
};

export default ProductCardComponent;
