import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { URLS } from "../constants"

const baseQuery = fetchBaseQuery({ baseUrl: URLS.BASE_URL })

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Product", "Order", "User"],
  endpoints: (builder) => ({}),
})
