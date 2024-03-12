// // src/BeveragesList.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const BeveragesList = () => {
//   const [beverages, setBeverages] = useState([]);

//   useEffect(() => {
//     const fetchBeverages = async () => {
//       try {
//         const response = await axios.get('/api/beverage');
//         setBeverages(response.data);
//       } catch (error) {
//         console.error('Error fetching beverages:', error);
//       }
//     };

//     fetchBeverages();
//   }, []);

//   return (
//     <div>
//       <h2>Beverage List</h2>
//       <ul>
//         {beverages.map(beverage => (
//           <li key={beverage.id}>
//             {beverage.name} - {beverage.cost} - {beverage.measurement} - {beverage.store_name} - {beverage.expiration}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default BeveragesList;
