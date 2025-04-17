// Need to use the React-specific entry point to import createApi
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const rootApi = createApi({
    reducerPath: 'meteo',
    baseQuery: fetchBaseQuery({baseUrl: ''}),
    endpoints: (builder) => ({
        getUser: builder.query<{ name: string }, void>({
            query: () => `https://jsonplaceholder.typicode.com/users/1`,
        }),
    }),
})


export const {useGetUserQuery} = rootApi