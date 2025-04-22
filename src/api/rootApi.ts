// Need to use the React-specific entry point to import createApi
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {API_KEY, API_URL} from "../utils/Constants.ts";
import {WeatherData} from "../types/types.ts";


// Define a service using a base URL and expected endpoints
export const rootApi = createApi({
    reducerPath: 'meteo',
    baseQuery: fetchBaseQuery({baseUrl: API_URL}),
    endpoints: (builder) => ({
        getWeather: builder.query<WeatherData, string>({
            query: (location) => `?q=${location}&key=${API_KEY}`,
        }),
    }),
})


export const {useGetWeatherQuery} = rootApi