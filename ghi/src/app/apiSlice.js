import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const fridgeApi = createApi({
    reducerPath: 'fridgeApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_HOST,
    }),
    endpoints: (builder) => ({
        getAllBeverages: builder.query({
            query: () => '/api/beverages/beverages',
        }),
        getBeverage: builder.query({
            query: (item_id) => '/api/beverages/beverages/${item_id}',
        }),
    }),
})

export const { useGetAllBeveragesQuery, useGetBeverageQuery } = fridgeApi
