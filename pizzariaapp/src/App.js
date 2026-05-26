import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import OrderPizza from "./components/OrderPizza";
import BuildPizza from "./components/BuildPizza";
import ShoppingCart from "./components/ShoppingCart";
import Login from "./components/Login";
import Register from "./components/Register";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";
import MyOrders from "./components/MyOrders";

function App() {

  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/order" element={<OrderPizza />} />

        <Route path="/build" element={<BuildPizza />} />

        <Route path="/cart" element={<ShoppingCart />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/checkout" element={<Checkout />}/>

        <Route path="/payment" element={<Payment />}/>

        <Route path="/myorders" element={<MyOrders />}/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;