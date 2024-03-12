import Beverages from './Beverages';
import { useSelector } from 'react-redux';
import { useGetAllBeveragesQuery } from './app/apiSlice';

const BeveragesList = () => {
    const searchCriteria = useSelector(state => state.search.value);
    const { data, isLoading } = useGetAllBeveragesQuery();

    if (isLoading) return <>Loading...</>

    const filteredData = () => {
        if (searchCriteria) return data.filter(beverage => beverage.name.includes(searchCriteria))
        return data;
    }

    return (
        <>
            <h1 className='mt-3'>
                Beverage{' '}
                {searchCriteria && <small className='text-body-secondary'>"{searchCriteria}"</small>}
            </h1>
            <div className="row mt-3">
                {filteredData().map(p => <Beverage key={p.name} name={p.name} />)}
            </div>
        </>
    )
}

export default BeverageList;

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
