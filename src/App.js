import './App.scss';
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/nav.component";
import { Routes, Route, Link} from "react-router-dom";
import AuthenticationComponent from "./routes/authentication/authentication.component";
import ShopComponent from "./routes/shop/shop.component";
import CheckoutComponent from "./routes/checkout/checkout.component";

const NoMatch = () =>  {
    return <>
        <h2>No match found</h2>
        <Link to='/'> Go back to Home page</Link>
    </>
}

const App = () =>  {
  return (
      <div>
          <Routes>
              <Route path='/' element={<Navigation/>}>
                  <Route index element={<Home/>}/>
                  <Route path='authentication' element={<AuthenticationComponent/>}/>
                  <Route path='shop/*' element={<ShopComponent/>}/>
                  <Route path='checkout' element={<CheckoutComponent/>}/>
                  <Route path="*" element={<NoMatch />} />
              </Route>
          </Routes>
      </div>
  );
}

export default App;
