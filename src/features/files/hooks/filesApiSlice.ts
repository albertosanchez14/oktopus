import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";

import { apiSlice } from "../../../app/api/apiSlice";
import { RootState } from "../../../app/store";

const filesAdapter = createEntityAdapter({});

const initialState = filesAdapter.getInitialState();

export const filesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFiles: builder.query({
      query: () => ({ url: "/files" }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetFilesQuery } = filesApiSlice;

// returns the query result object
export const selectFilesResult =
  filesApiSlice.endpoints.getFiles.select(undefined);

// create a memoized selector
const selectFilesData = createSelector(
  selectFilesResult,
  (filesResult) => filesResult.data // normalized state object with entities and ids
);

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllFiles,
  selectById: selectFilesById,
  selectIds: selectFilesIds,
  // Pass in a selector that returns the users slice of state
} = filesAdapter.getSelectors(
  (state: RootState) => selectFilesData(state) ?? initialState
);
