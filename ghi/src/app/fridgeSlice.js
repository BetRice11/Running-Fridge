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

        getAllGrains: builder.query({
            query: () => '/api/grains/grains/mine',
            refetchOnMountOrArgChange: true,
        }),

        getGrain: builder.query({
            query: (item_id) => `/api/grains/grains/${item_id}`,
            credentials: 'include',
        }),

        deleteGrain: builder.mutation({
            query: (item_id) => ({
                url: `api/grains/grains/${item_id}`,
                method: 'DELETE',
            }),
        }),
        getAllGrains: builder.query({
            query: () => '/api/dairies/dairies/mine',
            refetchOnMountOrArgChange: true,
        }),

        getGrain: builder.query({
            query: (item_id) => `/api/dairies/dairies/${item_id}`,
            credentials: 'include',
        }),

        deleteGrain: builder.mutation({
            query: (item_id) => ({
                url: `api/dairies/dairies/${item_id}`,
                method: 'DELETE',
            }),
        }),
        }),
        getAllProteins: builder.query({
            query: () => '/api/proteins/proteins/mine',
            refetchOnMountOrArgChange: true,
        }),

        getProtein: builder.query({
            query: (item_id) => `/api/proteins/proteins/${item_id}`,
            credentials: 'include',
            }),

        deleteProtein: builder.mutation({
            query: (item_id) => ({
                url: `api/proteins/proteins/${item_id}`,
                method: 'DELETE',
            }),
        }),
         createProtein: builder.mutation({
            query: (proteinData) => ({
                url: '/api/proteins/proteins',
                method: 'POST',
                body: proteinData,
                credentials: 'include',
            }),
        }),
    }),
})

export const {
    useGetAllBeveragesQuery,
    useGetBeverageQuery,
    useDeleteBeverageMutation,
    useDeleteGrainMutation,
    useGetAllGrainsQuery,
    useGetGrainQuery,
    useDeleteProteinMutation,
    useGetAllProteinsQuery,
    useGetProteinQuery,
    useCreateProteinMutation
} = fridgeApi
