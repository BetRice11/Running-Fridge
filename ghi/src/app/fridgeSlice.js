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
        getAllDairy: builder.query({
            query: () => '/api/dairies/dairies/mine',
            refetchOnMountOrArgChange: true,
        }),

        getDairy: builder.query({
            query: (item_id) => `/api/dairies/dairies/${item_id}`,
            credentials: 'include',
        }),

        deleteDairy: builder.mutation({
            query: (item_id) => ({
                url: `api/dairies/dairies/${item_id}`,
                method: 'DELETE',
            }),
        }),
        createDairy: builder.mutation({
            query: (createData) => ({
                url: '/api/dairies/dairies',
                body: createData,
                method: 'POST',
            }),
            invalidatesTags: ['DairyList'],
        }),
        updateDairy: builder.mutation({
            query: ({ item_id, updatedData }) => ({
                url: `api/dairies/dairies/${item_id}`,
                method: 'PUT',
                body: updatedData,
            }),
            invalidatesTags: ['DairyList'],
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
    useCreateGrainMutation,,
    useGetDairyQuery,
    useGetAllDairyQuery,
    useDeleteDairyMutation,
    useCreateDairyMutation,
    useUpdateDairyMutation,
} = fridgeApi
