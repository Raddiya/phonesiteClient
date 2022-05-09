import { Route, Routes } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddItems from './Components/AddItems/AddItems';
import Login from './Components/Auth/Login/Login';
import Signup from './Components/Auth/Signup/Signup';
import Home from './Components/Home/Home';
import Inventory from './Components/Inventory/Inventory';
import ManageInventory from './Components/ManageInventory/ManageInventory';
import MyItems from './Components/MyItems/MyItems';
import { ToastContainer } from 'react-toastify';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';
import SingleItems from './Components/SingleItems/SingleItems';
import Auth from '../src/Firebase/Firebase.init';
import 'bootstrap/dist/css/bootstrap.min.css';
import Notfound from './Components/NotFound/Notfound';
import RequireAuth from './Components/Auth/RequireAuth/RequireAuth';
import Blog from './Components/Blog/Blog';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/signup' element={<Signup />} ></Route>
        <Route path='/inventory' element={<Inventory />} ></Route>
        <Route path='/manageinventory' element={
          <RequireAuth>
            <ManageInventory />
          </RequireAuth>
        } ></Route>
        <Route path='/myitems' element={
          <RequireAuth>
            <MyItems />
          </RequireAuth>
        } ></Route>
        <Route path='/additems' element={
          <RequireAuth>
            <AddItems />
          </RequireAuth>
        } ></Route>
        <Route path='/singleitems/:id' element={
          <RequireAuth>
            <SingleItems/>
          </RequireAuth>
        } ></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='*' element={<Notfound />} ></Route>
      </Routes>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
