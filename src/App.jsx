import './App.css'
import { Routes,Route,Link } from 'react-router-dom';
import {Navbar} from './components/Navbar.jsx';
import {Shop} from './pages/shop/Shop';
import {Cart} from './pages/cart/Cart';
import { ShopContextProvider } from './context/shop-context';
function App() {


  return (
    <div className='App'>
      <ShopContextProvider>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </ShopContextProvider>
    </div>
   
  )
}

export default App
