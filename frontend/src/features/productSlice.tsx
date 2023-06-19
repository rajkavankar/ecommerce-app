import { apiSlice } from "../services/apiSlice"
import { URLS } from "../constants"
import { Product } from "../interfaces/Product"

export const productSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<{ success: boolean; products: Product[] }, void>(
      {
        query: () => ({
          url: URLS.PRODUCTS_URL,
        }),
        keepUnusedDataFor: 5,
      }
    ),
    getProductById: builder.query<
      { success: boolean; product: Product } | undefined,
      string | undefined
    >({
      query: (productId: string) => ({
        url: `${URLS.PRODUCTS_URL}/${productId}`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
})

export const { useGetProductsQuery, useGetProductByIdQuery } = productSlice
