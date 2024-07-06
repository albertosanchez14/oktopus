import { apiSlice } from "../../../app/api/apiSlice";
import { logOut } from "./authSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    sendLogout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          // const { data } =
          await queryFulfilled;
          // console.log("Logged out", data);
          dispatch(logOut(undefined));
          dispatch(apiSlice.util.resetApiState());
        } catch (error) {
          console.error("Failed to log out", error);
        }
      },
    }),
    refreshToken: builder.mutation({
      query: () => ({ url: "/auth/refresh", method: "GET" }),
    }),
  }),
});

export const {
  useLoginMutation,
  useSendLogoutMutation,
  useRefreshTokenMutation,
} = authApiSlice;
