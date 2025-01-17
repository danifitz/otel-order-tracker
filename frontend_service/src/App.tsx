import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import OrderList from "./components/OrderList";
import OrderDetails from "./components/OrderDetails";
import Inventory from "./components/Inventory";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserProfile />} />
        <Route path="/orders" element={<OrderList />} />
        <Route path="/orders/:id" element={<OrderDetails />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </Router>
  );
}

export default App;

