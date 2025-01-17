import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function OrderDetails() {
  const { id } = useParams<{ id: string }>();
  const [order, setOrder] = useState<any>(null);

  useEffect(() => {
    fetch(`http://localhost:5001/api/order/${id}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [id]);

  return (
    <div>
      <h1>Order Details</h1>
      {order ? (
        <div>
          <p>Order ID: {order.orderId}</p>
          <p>Status: {order.status}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default OrderDetails;

