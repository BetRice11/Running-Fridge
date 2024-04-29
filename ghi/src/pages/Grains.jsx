import React from 'react';
import CategoryPage from './CategoryPage';
import { useParams } from 'react-router-dom';
import { useGetGrainQuery } from '../app/fridgeSlice';

const Grains = () => {
    const { item_id } = useParams()
    const {data, isLoading } = useGetGrainQuery(item_id)
    console.log({data})

    if (isLoading) return <>Loading...</>


    return (
        <div>
            <div className="row">
                <div className="col-8">
                    <h1>
                        Grain
                    </h1>
                </div>
                <div>
                    <p>
                        {data.name}
                        {data.cost}
                        {data.store_name}
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Grains;
