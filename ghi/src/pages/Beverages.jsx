import { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetBeveragesByNameQuery } from './app/apiSlice';

const Beverages = () => {
    const { name } = useParams();
    const { data: beverage, isLoading } = useGetBeveragesByNameQuery(name);

    return (
        <div>
            <div className="row">
                <div className="col-8">
                    <h1>{beverage.name.toUpperCase()}</h1>
                </div>
                <div className="col-4 text-end">
                    <button
                        className="btn btn-success"
                        onClick={() => console.log('favorite')}
                    >
                        Favorite
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={() => console.log('unfavorite')}
                    >
                        Unfavorite
                    </button>
                </div>
            </div>
            <ul className="list-group">
                <li className="list-group-item">
                    Beverage item: {beverage.item}
                </li>
                <li className="list-group-item">
                    Cost: {beverage.cost}
                </li>
                <li className="list-group-item">
                    Expiration: {beverage.expiration}
                </li>
            </ul>
        </div>
    )
}

export default Beverages;

// import React from 'react';
// import CategoryPage from './CategoryPage';

// const Beverages = () => {
//     return (
//         <div>
//             <h1>Beverages</h1>
//             <p>Explore our selection of refreshing beverages!</p>
//         </div>
//     );
// };

// export default Beverages;
