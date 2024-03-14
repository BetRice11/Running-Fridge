import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const beverageApi = createApi({
    reducerPath: 'beverageApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_HOST
    }),
    endpoints: (builder) => ({
        getAllBeverages: builder.query({
            query: () => '/api/beverage',
            transformResponse: (response) => response.beverage
        }),
        getBeverageByName: builder.query({
            query: (name) => `/api/beverage/${name}`
        }),
        getToken: builder.query({
            query: () => ({
                url: `/token`,
                credentials: 'include'
            }),
            transformResponse: (response) => response?.account || null,
            providesTags: ['Account']
        }),
        logout: builder.mutation({
            query: () => ({
                url: `/token`,
                method: 'DELETE',
                credentials: 'include'
            }),
            invalidatesTags: ['Account', 'Favorites']
        }),
        login: builder.mutation({
            query: (info) => {
                const formData = new FormData();
                formData.append('username', info.username)
                formData.append('password', info.password);
                return {
                    url: '/token',
                    method: 'POST',
                    body: formData,
                    credentials: 'include'
                }
            },
            invalidatesTags: ['Account', {type: 'Favorites', id: 'MINE'}]
        }),
        signup: builder.mutation({
            query: (body) => ({
                url: `/api/accounts`,
                body,
                method: 'POST',
                credentials: 'include'
            }),
            invalidatesTags: ['Account', {type: 'Favorites', id: 'MINE'}]
        })
    })
})

export const {
    useGetAllBeveragesQuery,
    useGetBeverageByNameQuery,
    useGetTokenQuery,
    useLogoutMutation,
    useLoginMutation,
    useSignupMutation,

} = beverageApi;



// // apiSlice.js

// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Define the initial state
// const initialState = {
//   data: [],
//   loading: false,
//   error: null,
// };

// // Define the async thunk to fetch data from the API
// export const fetchData = createAsyncThunk('api/fetchData', async () => {
//   try {
//     const response = await axios.get('https://api.example.com/data');
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// });

// // Define the API slice
// const apiSlice = createSlice({
//   name: 'api',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchData.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchData.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = action.payload;
//       })
//       .addCase(fetchData.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const accountApi = createApi({
    reducerPath: 'accountApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_HOST,
        credentials: 'include',
    }),
    endpoints: (builder) => ({
        createAccount: builder.mutation({
            query: (body) => {
                return {
                    url: '/api/auth/accounts',
                    method: 'POST',
                    body,
                }
            },
        }),
        login: builder.mutation({
            query: (info) => {
                let formData = null
                if (info instanceof HTMLElement) {
                    formData = new FormData(info)
                } else {
                    formData = new FormData()
                    formData.append('username', info.username)
                    formData.append('password', info.password)
                }
                return {
                    url: '/token',
                    method: 'POST',
                    body: formData,
                    credentials: 'include',
                }
            },
            invalidatesTags: (result) => {
                return (result && ['Account']) || []
            },
        }),
        logout: builder.mutation({
            query: () => {
                return {
                    url: '/token',
                    method: 'DELETE',
                }
            },
            invalidatesTags: ['Account'],
        }),
        getToken: builder.query({
            query: () => ({
                url: '/token',
            }),
            providesTags: ['Account'],
        }),
    }),
})

export default apiSlice.reducer;
