import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCreateProduceMutation } from '../app/fridgeSlice'


const ProduceForm = () => {
    const [createProduce, result] = useCreateProduceMutation()
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()
    const [produceForm, setProduceForm] = useState({
        name: '',
        cost: '',
        store_name: '',
        expiration_date: '',
        measurement: '',
    })
    const handleFormChange = (event) => {
        const key = event.target.name
        const value = event.target.value
        setProduceForm({ ...produceForm, [key]: value })
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        setErrorMessage('')
        createProduce(produceForm)
    }
    useEffect(() => {
        if (result.isSuccess) {
            navigate('/')
        } else if (result.isError) {
            setErrorMessage(result.error.data.detail)
            console.error('Error:', result.error)
        }
    }, [result])
    return (
        <>
            <div className="my-5 container mx-auto max-w-lg">
                <div className="bg-blue-50 shadow-xl rounded-lg px-8 py-10 mb-6 border border-blue-200">
                    <h1 className="text-2xl font-bold mb-6 text-blue-900">
                        Add a New Produce
                    </h1>
                    {errorMessage && (
                        <div
                            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                            role="alert"
                        >
                            {errorMessage}
                        </div>
                    )}

                    <form
                        onSubmit={handleSubmit}
                        id="-form"
                        className="space-y-6"
                    >
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-blue-700"
                            >
                                Produce Name
                            </label>
                            <input
                                value={produceForm.name}
                                onChange={handleFormChange}
                                placeholder="E.g., Arctic Water"
                                required
                                type="text"
                                id="name"
                                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-blue-300 rounded-md"
                                name="name"
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="cost"
                                className="block text-sm font-medium text-blue-700"
                            >
                                Cost ($)
                            </label>
                            <input
                                value={produceForm.cost}
                                onChange={handleFormChange}
                                placeholder="0.00"
                                type="number"
                                step="0.01"
                                min="0"
                                id="cost"
                                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-blue-300 rounded-md"
                                name="cost"
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="store_name"
                                className="block text-sm font-medium text-blue-700"
                            >
                                Store Name
                            </label>
                            <input
                                value={produceForm.store_name}
                                onChange={handleFormChange}
                                placeholder="E.g., Frosty Mart"
                                type="text"
                                id="store_name"
                                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-blue-300 rounded-md"
                                name="store_name"
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="expiration_date"
                                className="block text-sm font-medium text-blue-700"
                            >
                                Expiration Date
                            </label>
                            <input
                                value={produceForm.expiration_date}
                                onChange={handleFormChange}
                                type="date"
                                id="expiration_date"
                                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-blue-300 rounded-md"
                                name="expiration_date"
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="measurement"
                                className="block text-sm font-medium text-blue-700"
                            >
                                Measurement (L)
                            </label>
                            <input
                                value={produceForm.measurement}
                                onChange={handleFormChange}
                                placeholder="E.g., 1.5"
                                id="measurement"
                                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-blue-300 rounded-md"
                                name="measurement"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Add to Fridge
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ProduceForm
