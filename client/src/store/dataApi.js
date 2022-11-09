import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const dataApi = createApi({
    reducerPath: 'data',
    baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000',
    }),
    endpoints: builder =>({
        getData: builder.query({
            query:() => '/api/v1/data/',
            providesTags: ['DataList'],
        }),
    }),
});

export const { useGetDataQuery } = dataApi;