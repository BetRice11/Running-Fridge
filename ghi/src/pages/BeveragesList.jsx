import Beverages from './Beverages'
import { useSelector } from 'react-redux'
import { useGetAllBeveragesQuery } from '../app/fridgeSlice'

const BeveragesList = () => {
    const searchCriteria = useSelector((state) => state.search.value)
    const { data, isLoading } = useGetAllBeveragesQuery()
    if (isLoading) return <>Loading...</>
    const filteredData = () => {
        if (searchCriteria)
            return data.filter((beverage) =>
                beverage.name.includes(searchCriteria)
            )
        return data
    }
    return (
        <>
            <h1 className="mt-3">
                Beverage{' '}
                {searchCriteria && (
                    <small className="text-body-secondary">
                        "{searchCriteria}"
                    </small>
                )}
            </h1>
            <div className="row mt-3">
                {filteredData().map((p) => (
                    <Beverage key={p.name} name={p.name} />
                ))}
            </div>
        </>
    )
}
export default BeveragesList
