import { BrowserRouter as Router, Route } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import OrderList from "./components/OrderList";
import OrderDetails from "./components/OrderDetails";
import Inventory from "./components/Inventory";
// Grafana frontend o11y
import { FaroRoutes } from '@grafana/faro-react';

function App() {
  return (
    <Router>
      <FaroRoutes>
        <Route path="/" element={<UserProfile />} />
        <Route path="/orders" element={<OrderList />} />
        <Route path="/orders/:id" element={<OrderDetails />} />
        <Route path="/inventory" element={<Inventory />} />
      </FaroRoutes>
    </Router>
  );
}

export default App;