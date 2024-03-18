import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useGetAllBeveragesQuery } from './app/fridgeSlice'

function BeverageList() {
    const query = useSelector((state) => state.query.value)
    const { data, isLoading } = useGetAllBeveragesQuery()
    console.log({data})

    if (isLoading) return <>Loading...</>

    const filteredData = () => {
        if (query)
            return data.beverage.filter(b =>
                b.name.includes(query)
            )
        return data.beverage
    }

    return (
        <div className="overflow-x-auto">
            <h1>Beverages</h1>
            <table className="table">
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
                    {filteredData().map(b =>
                    <Beverages key={b.name} name={b.name} />)
                    }
                </tbody>
            </table>
        </div>
    )
}
export default BeverageList
