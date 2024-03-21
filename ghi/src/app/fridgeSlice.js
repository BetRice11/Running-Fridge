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
            providesTags: ['BeverageList'],
        }),

        getBeverage: builder.query({
            query: (item_id) => `/api/beverages/beverages/${item_id}`,
            credentials: 'include',
        }),

        deleteBeverage: builder.mutation({
            query: (item_id) => ({
                url: `api/beverages/beverages/${item_id}`,
                method: 'DELETE',
                invalidatesTags: ['BeverageList'],
            }),
        }),

        updateBeverage: builder.mutation({
            query: ({ item_id, updatedData }) => ({
                url: `api/beverages/beverages/${item_id}`,
                method: 'PUT',
                body: updatedData,
            }),
            invalidatesTags: ['BeverageList'],
        }),

        createBeverage: builder.mutation({
            query: (createData) => ({
                url: '/api/beverages/beverages',
                body: createData,
                method: 'POST',
            }),
            invalidatesTags: ['BeverageList'],
        }),

        getAllGrains: builder.query({
            query: () => '/api/grains/grains/mine',
            refetchOnMountOrArgChange: true,
            providesTags: ['GrainList']
        }),

        getGrain: builder.query({
            query: (item_id) => `/api/grains/grains/${item_id}`,
            credentials: 'include',
        }),

        deleteGrain: builder.mutation({
            query: (item_id) => ({
                url: `api/grains/grains/${item_id}`,
                method: 'DELETE',
                invalidatesTags: ['GrainList']
            }),
        }),

        updateGrain: builder.mutation({
            query: ({ item_id, updatedData }) => ({
                url: `api/grains/grains/${item_id}`,
                method: 'PUT',
                body: updatedData,
            }),
            invalidatesTags: ['GrainList'],
        }),

        createGrain: builder.mutation({
            query: (createData) => ({
                url: '/api/grains/grains',
                body: createData,
                method: 'POST',
            }),
            invalidatesTags: ['GrainList'],
        }),
    }),
})

export const {
    useGetAllBeveragesQuery,
    useGetBeverageQuery,
    useDeleteBeverageMutation,
    useUpdateBeverageMutation,
    useCreateBeverageMutation,
    useGetAllGrainsQuery,
    useGetGrainQuery,
    useDeleteGrainMutation,
    useUpdateGrainMutation,
    useCreateGrainMutation,
} = fridgeApi
