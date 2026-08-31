import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Checkout from './pages/Checkout';
import Wishlist from './pages/Wishlist';
import Orders from './pages/Orders';
import Navbar from './components/Navbar';

import './App.css'
import AuthProvider from './context/AuthContext';
import CartProvider from './context/CartContext';
import WishlistProvider from './context/WishlistContext';
import OrderProvider from './context/OrderContext';
import ProductDetails from './pages/ProductDetails';
import ProtectedRoute from './components/ProtectedRoute';

function App() {

  return (
    <AuthProvider>
      <CartProvider>
      <WishlistProvider>
      <OrderProvider>
  <div className='app'>
    <Navbar />
     <Routes>
       <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>}/>
       <Route path='/auth' element={<Auth />}/>
       <Route path='/checkout' element={<ProtectedRoute><Checkout /></ProtectedRoute>}/>
       <Route path='/productdetails/:id' element={<ProtectedRoute><ProductDetails /></ProtectedRoute>}/>
       <Route path='/wishlist' element={<ProtectedRoute><Wishlist /></ProtectedRoute>}/>
       <Route path='/orders' element={<ProtectedRoute><Orders /></ProtectedRoute>}/>
     </Routes>
  </div>
  </OrderProvider>
  </WishlistProvider>
  </CartProvider>
  </AuthProvider>
  );
}

export default App;
