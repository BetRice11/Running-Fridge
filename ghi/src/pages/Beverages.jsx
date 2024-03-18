import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetBeverageQuery } from '../app/fridgeSlice'
import { BrowserRouter as Router } from 'react-router-dom'

const Beverages = () => {
    const { item_id } = useParams()
    const { data: beverage, isLoading } = useGetBeverageQuery(item_id)
    console.log({beverage})

    if (isLoading) return <div>loading</div>
    
    return (
        <div>
            <div className="row">
                <div className="col-8">
                    <h1>{beverage.name}</h1>
                </div>
                <div className="col-4 text-end">
                </div>
            </div>
            <ul className="list-group">
                <li className="list-group-item">
                    Beverage item: {beverage.store}
                </li>
                <li className="list-group-item">Cost: {beverage.cost}</li>
                <li className="list-group-item">
                    Expiration: {beverage.expiration_date}
                </li>
            </ul>
        </div>
    )
}
export default Beverages
