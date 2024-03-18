import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const fridgeApi = createApi({
    reducerPath: 'fridgeApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_HOST,
        credentials: 'include',
    }),

    endpoints: (builder) => ({
        getAllBeverages: builder.query({
            query: () => '/api/beverages/beverages/mine',
        }),

        getBeverage: builder.query({
            query: (item_id) => item_id ? `/api/beverages/beverages/${item_id}` : '',
        }),
    }),
})

export const {
    useGetAllBeveragesQuery,
    useGetBeverageQuery,
} = fridgeApi
