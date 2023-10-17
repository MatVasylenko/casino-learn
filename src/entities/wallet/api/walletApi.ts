import { createApi } from "@reduxjs/toolkit/dist/query";
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from "../../../app/config/network";

enum TAGS {
  BALANCE = 'BALANCE',
}

export const walletApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: [TAGS.BALANCE],
  endpoints: (builder) => ({
    getBalance: builder.query({
      query: () => '/wallet',
      providesTags: [TAGS.BALANCE]
    }),
    updateBalance: builder.mutation({
      query: (body) => ({
        url: '/wallet',
        body,
      }),
      invalidatesTags: [TAGS.BALANCE]
    })
  })
})