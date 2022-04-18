import {useContext} from "react";
import {Link, Outlet} from "react-router-dom";
import './nav.styles.scss';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import CartIconComponent from "../../components/cart-icon/cart-icon.component";
import CartDropdownComponent from "../../components/cart-dropdown/cart-dropdown.component";
import {UserContext} from "../../contexts/user.contexts";
import {CartContext} from "../../contexts/cart.context";
import {signOutAuth} from "../../utils/firebase/firebaseConfig.component";

const Navigation = () => {

    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);

    const handleSignOut = async () => {
        await signOutAuth();
    }

    return <>
        <div className='navigation'>
            <div className='logo-container'>
                <Link to='/'>
                    <Logo className='logo'/>
                </Link>
            </div>
            <div className="nav-links-container">
                <Link className='nav-link' to='shop'>
                    <p>Shop</p>
                </Link>
                {currentUser ? (<span className='nav-link' onClick={handleSignOut}>SignOut</span>) : (
                    <Link className='nav-link' to='authentication'><p>SignIn</p></Link>)}
                <CartIconComponent className="nav-link"/>
            </div>
            {isCartOpen && <CartDropdownComponent/>}
        </div>
        <Outlet/>
    </>
}

export default Navigation;
