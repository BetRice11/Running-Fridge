import React from 'react';
import CategoryPage from './CategoryPage';
import { useParams } from 'react-router-dom';
import { useGetProduceQuery } from '../app/fridgeSlice';

const Produce = () => {
    const { item_id } = useParams()
    const {data, isLoading } = useGetProduceQuery(item_id)
    console.log({data})

    if (isLoading) return <>Loading...</>


    return (
        <div>
            <div className="row">
                <div className="col-8">
                    <h1>
                        Produce
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

export default Produce;
