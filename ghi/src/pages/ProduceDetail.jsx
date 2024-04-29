import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetProduceQuery } from '../app/fridgeSlice'
import { BrowserRouter as Router } from 'react-router-dom'

import { motion } from 'framer-motion'

const Produce = () => {
    const { item_id } = useParams()
    const { data, isLoading, isError } = useGetProduceQuery(item_id)

    if (isLoading)
        return <div className="text-center text-blue-500">Loading...</div>
    if (isError || !data)
        return (
            <div className="text-center text-red-500">
                Error loading produce details.
            </div>
        )

    return (
        <div className="bg-blue-50 min-h-screen flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white shadow-lg rounded-lg p-8 border border-blue-200 max-w-lg w-full"
            >
                <div className="text-xl font-bold mb-6 text-blue-800">
                    Produce Details
                </div>
                <div className="space-y-4">
                    <h2 className="text-lg font-semibold text-gray-900">
                        {data.name}
                    </h2>
                    <p className="text-gray-700">
                        Cost:{' '}
                        <span className="font-semibold">${data.cost}</span>
                    </p>
                    <p className="text-gray-700">
                        Store:{' '}
                        <span className="font-semibold">{data.store_name}</span>
                    </p>
                    <p className="text-gray-700">
                        Measurement:{' '}
                        <span className="font-semibold">
                            {data.measurement}
                        </span>
                    </p>
                    <p className="text-gray-700">
                        Expiration Date:{' '}
                        <span className="font-semibold">{data.expiration_date}</span>
                    </p>
                </div>
            </motion.div>
        </div>
    )
}

export default Produce
