import React from 'react'
import {
    useGetAllProduceQuery,
    useDeleteProduceMutation,
} from '../app/fridgeSlice'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'

function ProduceList() {
    const { data, isLoading } = useGetAllProduceQuery()
    const [deleteProduce] = useDeleteProduceMutation()

    const handleDelete = async (item_id) => {
        try {
            await deleteProduce(item_id)
            // Optionally, trigger a refetch or manage state locally
        } catch (error) {
            console.error('Error deleting item:', error)
        }
    }

    const [lightOn, setLightOn] = useState(true)
    const toggleLight = () => setLightOn(!lightOn)

    if (isLoading)
        return <div className="text-center text-blue-500">Loading...</div>

    return (
        <div className="p-6 fridge-bg min-h-screen">
            <h1 className="text-2xl font-bold mb-6 text-blue-800">
                Produce in the Fridge
            </h1>
            <div
                className={`p-6 ${
                    lightOn ? 'bg-blue-400' : 'bg-gray-800'
                } min-h-screen transition duration-500`}
            >
                <button onClick={toggleLight} className="btn btn-sm">
                    {lightOn ? 'Turn Light Off' : 'Turn Light On'}
                </button>
                {/* The rest of your component */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {data.map((produce, index) => (
                        <motion.div
                            key={produce.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-4 bg-blue-800 rounded-lg shadow-lg ${
                                index < data.length - 1 ? 'shelf' : ''
                            }`}
                        >
                            <h3 className="font-bold">{produce.name}</h3>
                            <p>Cost: {produce.cost}</p>
                            <p>Expiration: {produce.expiration_date}</p>
                            <p>Measurement: {produce.measurement}</p>
                            <div className="flex justify-between mt-4">
                                <Link
                                    to={`/produce/${produce.id}`}
                                    className="btn btn-sm btn-info"
                                >
                                    Details
                                </Link>
                                <button
                                    onClick={() => handleDelete(produce.id)}
                                    className="btn btn-sm btn-error"
                                >
                                    Delete
                                </button>
                                <Link
                                    to={`/produce/${produce.id}/update`}
                                    className="btn btn-sm btn-warning"
                                >
                                    Update
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProduceList
