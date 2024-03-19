import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useGetAllBeveragesQuery } from './app/fridgeSlice'
import Beverages from './pages/BeverageDetail'
import { Link } from 'react-router-dom'

function BeverageList() {
    const query = useSelector((state) => state.query.value)
    const { data, isLoading } = useGetAllBeveragesQuery()
    console.log({ data })

    if (isLoading) return <>Loading...</>

    // const filteredData = () => {
    //     if (query)
    //         return data.filter(p =>
    //             p._id.includes(query)
    //         )
    //     return data
    // }

    return (
        <div className="overflow-x-auto">
            <h1>Beverages</h1>
            {data.map((p) => (
                <div key={p.id} id={p.id}>
                    <p>{p.name}</p>
                    <Link to={`/beverages/${p.id}`}>Details</Link>
                </div>
            ))}
            {/* <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cost</th>
                        <th>Exp Date</th>
                        <th>Measurement</th>
                        <th>Store</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table> */}
        </div>
    )
}
export default BeverageList
