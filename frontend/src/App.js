// // import { Container } from 'react-bootstrap'
// // import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import Header from './components/Header'
// import Footer from  './components/Footer'

// import HomeScreen from './screens/HomeScreen'
// import ProductScreen from './screens/ProductScreen'
// import { Container } from 'react-bootstrap'

// import CartScreen from './screens/CartScreen'
// import LoginScreen from './screens/LoginScreen'
// import RegisterScreen from './screens/RegisterScreen'
// import ProfileScreen from './screens/ProfileScreen'
// import ShippingScreen from './screens/ShippingScreen'




// function App() {
//   return (
//     <BrowserRouter>
//       <Header />
//       <main className="py-3">
//         <Routes>
//           <Route path="/" element={<HomeScreen />} />
//           <Route path="/login" element={<LoginScreen />} />
//           <Route path="/register" element={<RegisterScreen />} />
//           <Route path="/profile" element={<ProfileScreen />} />
//           <Route path="/shipping" element={<ShippingScreen />} />

//           {/* <Route path="/shipping" element={<ShippingScreen />} /> */}
//           <Route path='/product/:id' element={<ProductScreen />} />
//           <Route path='/cart/:id?' element={<CartScreen />} />
//         </Routes>
//       </main>
//       <Footer/>
//     </BrowserRouter>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/shipping" element={<ShippingScreen />} />
          <Route path="/placeorder" element={<PlaceOrderScreen/>} />
          <Route path="/order/:id" element={<OrderScreen/>} />
          <Route path="/payment" element={<PaymentScreen />} />
          <Route path="/product/:id" element={<ProductScreen />} />
          <Route path="/cart/:id?" element={<CartScreen />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;



