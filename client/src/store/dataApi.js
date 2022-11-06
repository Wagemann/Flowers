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
        updateData: builder.mutation({
            query: (id, ...patch) =>({
                url: `/api/v1/data/${id}`,
                method: 'PATCH',
                body: patch,
            }),
            invalidatesTags: ["DataList"],
        })
    }),
});

export const { useGetDataQuery, useUpdateDataMutation, } = dataApi;