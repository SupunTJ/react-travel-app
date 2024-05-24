import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const randomDestinationApi = createApi({
  reducerPath: "apirandomdestination",
  baseQuery: fetchBaseQuery({ baseUrl: "https://random-data-api.com/api/v2/" }),

  endpoints: (builder) => ({
    // QUERY -> GET
    //MUTATIONS -> POST/PUT/DELETE
    getRandomDestination: builder.query({
      query: () => ({
        url: "addresses",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetRandomDestinationQuery } = randomDestinationApi;
