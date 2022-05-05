import {Route,Routes} from 'react-router-dom'
import './App.css';
import Login from './Components/Auth/Login/Login';
import RequireAuth from './Components/Auth/RequireAuth/RequireAuth';
import Signup from './Components/Auth/Signup/Signup';
import Home from './Components/Home/Home';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='/signup' element={<Signup></Signup>} ></Route>
        <RequireAuth></RequireAuth>
        {/* <Route path='/' element={} ></Route>
        <Route path='/' element={} ></Route> */}
      
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
