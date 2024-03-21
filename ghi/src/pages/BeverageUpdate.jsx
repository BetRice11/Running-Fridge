import { useState , useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useGetBeverageQuery, useUpdateBeverageMutation, useGetAllBeveragesQuery } from '../app/fridgeSlice'
import { query } from '../app/querySlice'
import { useDispatch } from 'react-redux'

function UpdateBeverage() {
    const { item_id } = useParams()
    const navigate = useNavigate()
    // const dispatch = useDispatch
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

    // dispatch(beverageUpdated(response.data))

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

            // dispatchEvent(beverageUpdated(response.data))
            navigate('/beverages')
            console.log('Calling refetch...')
            // Optionally, redirect to a different page after successful update
            // history.push('/beverages');
        } catch (error) {
            console.error('Error updating beverage:', error)
        } finally {
            setIsLoading(false)
        }
    }

    // const changeHandler = (e) => {
    //     e.preventDefault()
    //     setName(e.target.value)
    // }

    // const submitToRedux = (e, item_id) => {
    //     e.preventDefault()
    //     changeName(item_id)
    // }

    console.log('isLoading:', isLoading)

    if (isLoading) return <div>Loading...</div>

    if (error) return <div>Error: {error.message}</div>


    return (
        <div>
            <h1>Update Beverage</h1>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <label>Cost:</label>
                <input
                    type="number"
                    name="cost"
                    value={formData.cost}
                    onChange={handleChange}
                />
                <label>Expiration Date:</label>
                <input
                    type="date"
                    name="expiration_date"
                    value={formData.expiration_date}
                    onChange={handleChange}
                />
                <label>Measurement:</label>
                <input
                    type="text"
                    name="measurement"
                    value={formData.measurement}
                    onChange={handleChange}
                />
                <label>Store Name:</label>
                <input
                    type="text"
                    name="store_name"
                    value={formData.store_name}
                    onChange={handleChange}
                />

                <button type="submit">Update Beverage</button>
            </form>
        </div>
    )
}

export default UpdateBeverage
