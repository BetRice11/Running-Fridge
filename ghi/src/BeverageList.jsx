import { useEffect, useState } from 'react'
import { useGetAllBeveragesQuery } from './app/apiSlice'

function BeverageList() {
    const [beverages, setBeverages] = useState([])

    const getData = async () => {
        const response = await fetch(
            'http://localhost:8000/api/beverages/beverages'
        )
        if (response.ok) {
            const { beverages } = await response.json()
            setBeverages(beverages)
        }
    }

    const { data } = useGetAllBeveragesQuery()
    console.log({ data })

    const handleDelete = async (id) => {
        const deleteUrl = `http://localhost:8000/api/beverages/beverages/${id}`
        await fetch(deleteUrl, { method: 'delete' })
        getData()
    }

    useEffect(() => {
        getData
    }, [])

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
                    {beverages.map((beverage) => {
                        return (
                            <tr key={beverage.id}>
                                <td>{beverage.name}</td>
                                <td>{beverage.cost}</td>
                                <td>{beverage.expiration_date}</td>
                                <td>{beverage.measurement}</td>
                                <td>{beverage.store_name}</td>
                                <td>
                                    <button
                                        className="btn glass"
                                        onClick={() => {
                                            handleDelete(beverage.id)
                                        }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default BeverageList
