import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
    useGetBeverageQuery,
    useUpdateBeverageMutation,
    useGetAllBeveragesQuery,
} from '../app/fridgeSlice'
import { query } from '../app/querySlice'
import { useDispatch } from 'react-redux'

function UpdateBeverage() {
    const { item_id } = useParams()
    const navigate = useNavigate()
    const { data: beverage, refetch, error } = useGetBeverageQuery(item_id)
    const [updateBeverage] = useUpdateBeverageMutation()
    const [isLoading, setIsLoading] = useState(false)

    const [formData, setFormData] = useState({
        name: '',
        cost: '',
        expiration_date: '',
        measurement: '',
        store_name: '',
    })
    useEffect(() => {
        if (beverage) {
            setFormData({
                name: beverage.name,
                cost: beverage.cost,
                expiration_date: beverage.expiration_date,
                measurement: beverage.measurement,
                store_name: beverage.store_name,
            })
        }
    }, [beverage])

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            await updateBeverage({ item_id, updatedData: formData }).unwrap()
            navigate('/beverages')
            console.log('Calling refetch...')
        } catch (error) {
            console.error('Error updating beverage:', error)
        } finally {
            setIsLoading(false)
        }
    }

    console.log('isLoading:', isLoading)

    if (isLoading) return <div>Loading...</div>

    if (error) return <div>Error: {error.message}</div>

    return (
        <div className="bg-blue-950 min-h-screen flex items-center justify-center">
            <div className="bg-white shadow-xl rounded-lg p-8 border border-blue-300 max-w-md w-full">
                <h1 className="text-2xl font-bold mb-6 text-blue-800">
                    Update Beverage
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-blue-700">
                            Name:
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 focus:ring-blue-400 focus:border-blue-400 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-blue-700">
                            Cost:
                        </label>
                        <input
                            type="number"
                            name="cost"
                            value={formData.cost}
                            onChange={handleChange}
                            className="mt-1 focus:ring-blue-400 focus:border-blue-400 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-blue-700">
                            Expiration Date:
                        </label>
                        <input
                            type="date"
                            name="expiration_date"
                            value={formData.expiration_date}
                            onChange={handleChange}
                            className="mt-1 focus:ring-blue-400 focus:border-blue-400 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-blue-700">
                            Measurement:
                        </label>
                        <input
                            type="text"
                            name="measurement"
                            value={formData.measurement}
                            onChange={handleChange}
                            className="mt-1 focus:ring-blue-400 focus:border-blue-400 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-blue-700">
                            Store Name:
                        </label>
                        <input
                            type="text"
                            name="store_name"
                            value={formData.store_name}
                            onChange={handleChange}
                            className="mt-1 focus:ring-blue-400 focus:border-blue-400 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
                    >
                        Update Beverage
                    </button>
                </form>
            </div>
        </div>
    )
}

export default UpdateBeverage
