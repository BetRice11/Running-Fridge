import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useGetAllBeveragesQuery, useDeleteBeverageMutation } from './app/fridgeSlice'
import { deleteItem } from './app/itemSlice'
import { Link } from 'react-router-dom'

function BeverageList() {
    // const query = useSelector((state) => state.query.value)
    const { data, isLoading } = useGetAllBeveragesQuery()
    const [deleteBeverage] = useDeleteBeverageMutation()
    console.log({ data })

    const dispatch = useDispatch()

    const handleDelete = async (item_id) => {
        try{
            await deleteBeverage(item_id)
            refetch()
        } catch (error) {

        }
        console.log('Deleting item with ID:', item_id)
    }

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
                {/* {data.map((p) => ( */}
                <tbody>
                    {data.map((p) => (
                        <tr key={p.id} id={p.id}>
                            <td>{p.name}</td>
                            <td>{p.cost}</td>
                            <td>{p.expiration_date}</td>
                            <td>{p.measurement}</td>
                            <td>{p.store_name}</td>
                            <td>
                                <button className="btn btn-info">
                                    <Link to={`/beverages/${p.id}`}>
                                        Details
                                    </Link>
                                </button>
                                <button
                                    className="btn btn-error"
                                    onClick={() => handleDelete(p.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                {/* ))} */}
            </table>
        </div>
    )
}

export default BeverageList
