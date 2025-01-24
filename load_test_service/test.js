import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 3, // Number of virtual users
  duration: '1h', // Test duration
};

export default function () {
  // Test the Frontend Service
  let res = http.get('http://frontend-service:3000');
  check(res, { 'Frontend: Homepage loaded': (r) => r.status === 200 });

  // Test the User Service
  res = http.get('http://user-service:5005/profile');
  check(res, { 'User Service: Profile loaded': (r) => r.status === 200 });

  // Test the Order Service
  res = http.get('http://order-service:5001/api/orders');
  check(res, { 'Order Service: Orders loaded': (r) => r.status === 200 });

  res = http.get('http://order-service:5001/api/orders/1');
  check(res, { 'Order Service: Order details loaded': (r) => r.status === 200 });

  // Test the Inventory Service
  res = http.get('http://inventory-service:5002/inventory/2');
  check(res, { 'Inventory Service: Inventory loaded': (r) => r.status === 200 });

  // Test the Notification Service
  res = http.post('http://notification-service:5003/notify', JSON.stringify({ message: 'Test notification' }), {
    headers: { 'Content-Type': 'application/json' },
  });
  check(res, { 'Notification Service: Notification sent': (r) => r.status === 200 });

  // Test creating an order in the order service
  res = http.post('http://order-service:5001/api/order', JSON.stringify({}), {
    headers: {'Content-Type': 'application/json'}
  });
  check(res, { 'Order Service: Order created': (r) => r.status === 200 });

  sleep(1); // Pause for a second between iterations
}
