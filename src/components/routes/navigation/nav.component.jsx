import { useContext} from "react";
import {Link, Outlet} from "react-router-dom";
import './nav.styles.scss';
import {ReactComponent as Logo} from '../../../assets/logo.svg';
import {UserContext} from "../../../contexts/user.contexts";
import {signOutAuth} from "../../utils/firebase/firebaseConfig.component";

const Navigation = () =>  {

    const { currentUser } = useContext(UserContext);
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
            <div>
                <div className="nav-links-container">
                    <Link className='nav-link' to='shop'>
                        <p>Shop</p>
                    </Link>
                        {
                            currentUser ?
                                (<span className='nav-link' onClick={handleSignOut}>SignOut</span>)
                                :
                                (<Link className='nav-link' to='authentication'><p>SignIn</p></Link>)
                        }
                </div>
            </div>
        </div>
        <Outlet/>
    </>
}

export default Navigation;
