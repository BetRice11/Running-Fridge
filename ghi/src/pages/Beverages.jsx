// // src/Beverages.js modification
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Beverages = ({ token }) => {
//   const [beverages, setBeverages] = useState([]);

//   useEffect(() => {
//     const fetchBeverages = async () => {
//       try {
//         const config = {
//           headers: { Authorization: `Bearer ${token}` }
//         };
//         const response = await axios.get('/api/beverages/mine', config);
//         setBeverages(response.data);
//       } catch (error) {
//         console.error('Failed to fetch beverages:', error);
//       }
//     };

//     if (token) {
//       fetchBeverages();
//     }
//   }, [token]);
// return (
//     <div>
//       <h2>My Beverages</h2>
//       <ul>
//         {beverages.map((bev) => (
//           <li key={bev.id}>
//             {bev.name} - {bev.cost} - {bev.expiration_date} - {bev.store_name} - {bev.measurement}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Beverages;
