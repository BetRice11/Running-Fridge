// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { useDispatch } from 'react-redux';
// import { setUser } from './userSlice';

// export const userApi = createApi({
//   reducerPath: 'userApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: import.meta.env.VITE_API_HOST,
//     credentials: 'include',
//   }),
//   endpoints: (builder) => ({
//     getUser: builder.query({
//       query: () => ({
//         url: '/api/user',
//       }),
//       providesTags: ['User'],
//     }),
//     updateUser: builder.mutation({
//       query: (body) => ({
//         url: '/api/user',
//         method: 'PUT',
//         body,
//       }),
//       invalidatesTags: ['User'],
//       onSuccess: (data, variables, api) => {
//         api.dispatch(setUser(data)); // Update the user slice with the new data
//       },
//     }),
//     // Add more endpoints as needed
//   }),
// });

// export const { useGetUserQuery, useUpdateUserMutation } = userApi;
