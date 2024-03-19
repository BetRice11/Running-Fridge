import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetBeverageQuery } from '../app/fridgeSlice'
import { BrowserRouter as Router } from 'react-router-dom'

const Beverages = () => {
    const { item_id } = useParams()
    const { data, isLoading } = useGetBeverageQuery(item_id)

    if (isLoading) return <div>loading</div>
    return (
        <div>
            <div className="row">
                <div className="col-8">
                    <h1>{beverages.item_id}</h1>
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
                    Beverage item: {data.item}
                </li>
                <li className="list-group-item">Cost: {data.cost}</li>
                <li className="list-group-item">
                    Expiration: {data.expiration}
                </li>
            </ul>
        </div>
    )
}
export default Beverages
