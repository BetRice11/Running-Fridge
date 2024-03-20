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
            refetchOnMountOrArgChange: true,
        }),

        getBeverage: builder.query({
            query: (item_id) => `/api/beverages/beverages/${item_id}`,
            credentials: 'include',
        }),

        deleteBeverage: builder.mutation({
            query: (item_id) => ({
                url: `api/beverages/beverages/${item_id}`,
                method: 'DELETE',
            }),
        }),
    }),
})

export const {
    useGetAllBeveragesQuery,
    useGetBeverageQuery,
    useDeleteBeverageMutation,
} = fridgeApi
