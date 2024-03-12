import { useEffect, useState } from "react";

function GrainList() {
    const [grains, setGrains] = useState([])

    const getData = async ()=> {
        const response = await fetch("http://localhost:8000/api/grains/grains")
        if (response.ok) {
            const {grains} = await response.json()
            setGrains(grains)
        }
    }

    const handleDelete = async (id) => {
        const deleteUrl = `http://localhost:8000/api/grains/grains/${id}`
        await fetch(deleteUrl, {method: 'delete'})
        getData()
    }

    useEffect(()=> {
        getData
    }, [])

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
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
                    {grains.map(grain=> {
                        return (
                            <tr key={grain.id}>
                                <td>{grain.name}</td>
                                <td>{grain.cost}</td>
                                <td>{grain.expiration_date}</td>
                                <td>{grain.measurement}</td>
                                <td>{grain.store_name}</td>
                                <td><button className="btn glass" onClick={() => {handleDelete(grain.id)}}>
                                    Delete</button></td>

                            </tr>
                        )
                    })}
                    <tr>

                    </tr>
                    {/* row 2 */}
                    <tr className="hover">

                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default GrainList
