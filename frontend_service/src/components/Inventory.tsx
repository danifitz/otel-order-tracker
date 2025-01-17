import React, { useEffect, useState } from "react";

function Inventory() {
  const [inventory, setInventory] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:5002/inventory/")
      .then((res) => res.json())
      .then((data) => setInventory(data.products || []));
  }, []);

  return (
    <div>
      <h1>Inventory</h1>
      <ul>
        {inventory.map((item) => (
          <li key={item.id}>
            Product {item.id}: {item.stock}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Inventory;

