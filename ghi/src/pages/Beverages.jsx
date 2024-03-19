import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetBeverageQuery } from '../app/fridgeSlice'
import { BrowserRouter as Router } from 'react-router-dom'

const Beverage = () => {
    const { item_id } = useParams()
    const { data, isLoading, isError } = useGetBeverageQuery(item_id)
    console.log({data})

    // const beverage = data[0].name
    // console.log(data[0].name)
    if (isLoading) return <>Loading...</>

    // if (!beverage) {
    //     return <div>Beverage not found</div>}

    return (
        <div>
            <div className="row">
                <div className="col-8">
                    <h1>
                        Beverages
                    </h1>
                </div>
                <div>
                    <p>
                        {data.name}
                        {data.cost}
                        {data.store_name}
                    </p>
                </div>
                {/* <div className="col-4 text-end">
                    {data.map((p) => (
                        <div key={p.id} id={p.id}>
                            <p>{p.name}</p>
                        </div>
                    ))}
                </div> */}
            </div>
            {/* <ul className="list-group">
                <li className="list-group-item">
                    Beverage item: {data}
                </li>
                <li className="list-group-item">Cost: {data.cost}</li>
                <li className="list-group-item">
                    Expiration: {data.expiration_date}
                </li>
            </ul> */}
        </div>
    )
}
export default Beverage
