import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
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
        getAllProduce: builder.query({
            query: () => '/api/produce/produce/mine',
            refetchOnMountOrArgChange: true,
        }),
        getProduce: builder.query({
            query: (item_id) => `/api/produce/produce/${item_id}`,
            credentials: 'include',
        }),
        deleteProduce: builder.mutation({
            query: (item_id) => ({
                url: `api/produce/produce/${item_id}`,
                method: 'DELETE',
            }),
        }),
        createProduce: builder.mutation({
            query: (produceData) => ({
                url: '/api/produce/produce',
                method: 'POST',
                body: produceData,
                credentials: 'include',
            }),
        }),
    }),
});
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
    useCreateProteinMutation,
    useDeleteProduceMutation,
    useGetAllProduceQuery,
    useGetProduceQuery,
    useCreateProduceMutation
} = fridgeApi;
