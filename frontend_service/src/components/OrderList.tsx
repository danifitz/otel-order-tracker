import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function OrderList() {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data.orders || []));
  }, []);

  return (
    <div>
      <h1>Order List</h1>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            <Link to={`/orders/${order.id}`}>Order #{order.id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderList;

