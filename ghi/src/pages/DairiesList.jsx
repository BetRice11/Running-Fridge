import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
    useGetAllGrainsQuery,
    useDeleteGrainMutation,
} from '../app/fridgeSlice'
import { deleteItem } from '../app/itemSlice'
import { Link } from 'react-router-dom'

function DairiesList() {
    const { data, isLoading } = useGetAllGrainsQuery()
    const [deleteBeverage] = useDeleteGrainMutation()
    console.log({ data })

    const dispatch = useDispatch()

    const handleDelete = async (item_id) => {
        try {
            await deleteBeverage(item_id)
            refetch()
        } catch (error) {}
        console.log('Deleting item with ID:', item_id)
    }

    // Add this
    const changeHandler = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }

    // Add this
    const submitToRedux = (e, item_id) => {
        e.preventDefault()
        changeName(item_id)
    }

    if (isLoading) return <>Loading...</>

    return (
        <div className="overflow-x-auto">
            <h1>Grains</h1>
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
                                {/* this handles the refresh on submit */}
                                <form
                                    onSubmit={(e) => submitToRedux(e, item_id)}
                                >

                                    <button className="btn btn-info">
                                        <Link to={`/grains/${p.id}`}>
                                            Details
                                        </Link>
                                    </button>
                                    <button
                                        className="btn btn-error"
                                        onClick={() => handleDelete(p.id)}
                                    >
                                        Delete
                                    </button>

                                    {/* this form ends it */}
                                </form>
                            </td>
                        </tr>
                    ))}
                </tbody>
                {/* ))} */}
            </table>
        </div>
    )
}
export default DairiesList
