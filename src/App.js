import './App.scss';
import Home from "./components/routes/home/home.component";
import Navigation from "./components/routes/navigation/nav.component";
import SignInComponent from "./components/routes/sign-in/sign-in.component";
import { Routes, Route, Link} from "react-router-dom";

const Shop = () =>  {
    return <h2>I am the Shop Component</h2>
}

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
                  <Route path='sign-in' element={<SignInComponent/>}/>
                  <Route path='shop' element={<Shop/>}/>
                  <Route path="*" element={<NoMatch />} />
              </Route>
          </Routes>

      </div>
  );
}

export default App;
