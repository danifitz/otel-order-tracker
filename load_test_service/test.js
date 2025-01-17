import http from 'k6/http';
import { check, sleep } from 'k6';

// export const options = {
//   vus: 10, // Number of virtual users
//   duration: '30s', // Test duration
// };

export const options = {
  vus: 50, // Increase virtual users
  duration: '1m', // Run the test for 1 minute
};

export default function () {
  // Test the User Profile endpoint
  let res = http.get('http://frontend_service:3000/profile');
  check(res, { 'Profile page loaded': (r) => r.status === 200 });

  // Test the Orders page
  res = http.get('http://frontend_service:3000/orders');
  check(res, { 'Orders page loaded': (r) => r.status === 200 });

  // Test a specific order detail
  res = http.get('http://frontend_service:3000/orders/1');
  check(res, { 'Order details loaded': (r) => r.status === 200 });

  // Test Inventory page
  res = http.get('http://frontend_service:3000/inventory');
  check(res, { 'Inventory page loaded': (r) => r.status === 200 });

  sleep(1); // Pause for a second between requests
}

