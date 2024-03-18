import { useSelector, useDispatch } from 'react-redux'
import { useGetAllBeveragesQuery } from './app/fridgeSlice'
import Beverages from './Beverages'

// const BeverageList = () => {
//     // const query = useSelector((state) => state.query)
//     // const { data, isLoading } = useGetAllBeveragesQuery()
//     // console.log({data})

//     if (isLoading) return <>Loading...</>

//     // const filteredData = () => {
//     //         if (query && data)
//     //         return data.filter(beverage =>
//     //             beverage.name.includes(query)
//     //     )
//     //     return data
//     // }
//     return (
//         // <>
//         //     <h1 className="mt-3">
//         //         Beverage{` `}
//         //         {query && (
//         //             <small className="text-body-secondary">
//         //                 "{query}"
//         //             </small>
//         //         )}
//         //     </h1>
//         //     <div className="row mt-3">
//         //         {/* {filteredData().map(b =>
//         //             <Beverages key={b.name} name={b.name} />
//         //         )} */}
//         //     </div>
//         // </>
//     )
// }
// export default BeverageList
