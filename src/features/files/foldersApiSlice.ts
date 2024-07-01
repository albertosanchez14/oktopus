import { apiSlice } from "../../app/api/apiSlice";

const foldersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFolderFiles: builder.query({
      query: (folderId: string) => ({
        url: `/files/folders/${folderId}`,
      }),
      keepUnusedDataFor: 5,
    }),
    getFileofFolder: builder.query({
      query: (args: { folderId: string; fileId: string }) => ({
        url: "/files/folders",
        params: {
          folderId: args.folderId,
          fileId: args.fileId,
        },
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetFolderFilesQuery, useGetFileofFolderQuery } =
  foldersApiSlice;
