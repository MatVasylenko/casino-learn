import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../../../app/config/network'
import { IUser } from '../model/User';

interface IRequestGetUser {
  userId: number;
}

type IResponseGetUser = Pick<IUser, 'name' | 'nickname'>

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getUser: builder.query<IResponseGetUser, IRequestGetUser>({
      query: ({
        userId,
      }) => `user/${userId}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetUserQuery,
} = userApi