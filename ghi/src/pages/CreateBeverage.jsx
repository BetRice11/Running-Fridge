import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCreateBeverageMutation } from '../app/fridgeSlice'


const BeverageForm = () => {
    const [createBeverage, result] = useCreateBeverageMutation()
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()
    const [beverageForm, setBeverageForm] = useState({
        name: '',
        cost: '',
        store_name: '',
        expiration_date: '',
        measurement: '',
    })
    const handleFormChange = (event) => {
        const key = event.target.name
        const value = event.target.value
        setBeverageForm({ ...beverageForm, [key]: value })
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        setErrorMessage('')
        createBeverage(beverageForm)
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
            <div className="my-5 container">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Create a New Beverage</h1>
                        {errorMessage && (
                            <div className="alert alert-danger" role="alert">
                                {errorMessage}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} id="beverage-form">
                            <div className="form-floating mb-3">
                                <input
                                    value={beverageForm.name}
                                    onChange={handleFormChange}
                                    placeholder="name"
                                    required
                                    type="text"
                                    id="name"
                                    className="form-control"
                                    name="name"
                                />
                                <label htmlFor="name">Name</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input
                                    value={beverageForm.cost}
                                    onChange={handleFormChange}
                                    placeholder="cost"
                                    type="number"
                                    id="cost"
                                    className="form-control"
                                    name="cost"
                                />
                                <label htmlFor="cost">Cost</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input
                                    value={beverageForm.store_name}
                                    onChange={handleFormChange}
                                    placeholder="store name"
                                    type="text"
                                    id="store_name"
                                    className="form-control"
                                    name="store_name"
                                />
                                <label htmlFor="store_name">Store Name</label>
                            </div>

                            <div className="form mb-3">
                                <input
                                    value={beverageForm.expiration_date}
                                    onChange={handleFormChange}
                                    type="date"
                                    id="expiration_date"
                                    className="form-control"
                                    name="expiration_date"
                                ></input>
                                <label htmlFor="expiration_date">
                                    Expiration Date
                                </label>
                            </div>

                            <div className="form mb-3">
                                <input
                                    value={beverageForm.measurement}
                                    onChange={handleFormChange}
                                    placeholder="measurement"
                                    id="measurement"
                                    className="form-control"
                                    name="measurement"
                                ></input>
                                <label htmlFor="measurement">Measurement</label>
                            </div>

                            <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BeverageForm
