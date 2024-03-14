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

export const {
    useCreateAccountMutation,
    useLoginMutation,
    useGetTokenQuery,
    useLogoutMutation,
    
} = accountApi
