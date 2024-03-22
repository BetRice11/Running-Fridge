import { useState , useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useGetProduceQuery, useUpdateProduceMutation } from '../app/fridgeSlice'


function UpdateProduce() {
    const { item_id } = useParams()
    const navigate = useNavigate()
    const { data: produce, error } = useGetProduceQuery(item_id)
    const [updateProduce] = useUpdateProduceMutation()
    const [isLoading, setIsLoading] = useState(false)

    const [formData, setFormData] = useState({
        name: '',
        cost: '',
        expiration_date: '',
        measurement: '',
        store_name: '',
    })

    useEffect(() => {
        if (produce) {
            setFormData({
                name: produce.name,
                cost: produce.cost,
                expiration_date: produce.expiration_date,
                measurement: produce.measurement,
                store_name: produce.store_name,
            })
        }
    }, [produce])

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
            await updateProduce({ item_id, updatedData: formData }).unwrap()
            navigate('/Produce')
            console.log('Calling refetch...')
        } catch (error) {
            console.error('Error updating produce:', error)
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
                    Update Produce
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
                        Update Produce
                    </button>
                </form>
            </div>
        </div>
    )
}

export default UpdateProduce
