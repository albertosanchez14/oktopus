import { apiSlice } from "../../../app/api/apiSlice";

export const authGoogleApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    googleLogin: builder.query({
      query: () => ({
        url: "/auth/google",
      }),
    }),
  }),
});
