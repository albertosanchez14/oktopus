import { apiSlice } from "../../../app/api/apiSlice";
import { FileType } from "../types/file";

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
    downloadFile: builder.query({
      query: (args: { folderId: string, file: FileType }) => ({
        url: `/files/folders/${args.folderId}/${args.file.id}`,
        body: args.file,        
      }),
    }),
  }),
});

export const {
  useGetFolderFilesQuery,
  useGetFileofFolderQuery,
  useDownloadFileQuery,
} = foldersApiSlice;
