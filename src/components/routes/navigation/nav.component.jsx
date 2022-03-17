import {Link, Outlet} from "react-router-dom";
import './nav.styles.scss';
import {ReactComponent as Logo} from '../../../assets/logo.svg';

const Navigation = () =>  {
    return <>
        <div className='navigation'>
            <div className='logo-container'>
                <Link to='/'>
                    <Logo className='logo'/>
                </Link>
            </div>
            <div>
                <div className="nav-links-container">
                    <Link className='nav-link' to='sign-in'>
                        <p>SignIn</p>
                    </Link>
                    <Link className='nav-link' to='shop'>
                        <p>Shop</p>
                    </Link>
                </div>
            </div>
        </div>
        <Outlet/>
    </>
}

export default Navigation;
